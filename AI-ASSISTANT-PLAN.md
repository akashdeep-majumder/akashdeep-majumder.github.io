# AI Assistant Section — Design Doc (on hold)

Status: **designed, not yet implemented.** Revisit when ready to build.

## Decision

Fully static, precomputed Q&A widget — not a live chatbot. Retrieval and generation both
happen offline at "build" time (a manual script, not part of `next build`); the browser only
ever does client-side fuzzy search over a static JSON file.

Chosen over a live Gemini/Grok chatbot because it optimizes for what actually matters on a
portfolio: fast, free, deterministic (same question → byte-identical answer, always), secure
(no API key ever ships to the browser), and deployable on GitHub Pages as-is — no server, no
separate backend deployment.

Framed for a resume/interview as: *"Built a deterministic AI portfolio assistant using an
offline LLM generation pipeline, markdown-based knowledge retrieval, client-side semantic
search, and precomputed responses — instant, zero-cost inference on a fully static site."*
This is a legitimate architecture (moving inference from runtime to build time is a real
production pattern when latency/cost matter and answers don't change often), not "fake AI."

## Why not a live fallback (for now)

Considered and rejected for v1. A live fallback for unmatched questions reopens exactly the
problems the static design avoids:
- **Determinism breaks** for whatever it answers (mitigate later with a `localStorage` cache
  keyed by normalized question — per-visitor consistency, not global).
- **"No server" and "live LLM call" are in tension.** Only two real options: (a) call Gemini
  directly from the browser with a referrer-restricted API key — a speed bump against casual
  abuse, not real access control (Referer is client-set, trivially spoofed via curl/Postman);
  or (b) a serverless proxy holds the key — real protection, but it's a server, which was
  explicitly ruled out.
- Considered moving the whole site to Vercel for real Next.js API routes + streaming +
  server-side key storage — genuinely the better architecture if hosting were on the table,
  but **explicitly decided against**: staying on GitHub Pages, current URL unchanged.

Revisit only if the static + curated-question-set version turns out to have real gaps in
practice (i.e. people keep asking things outside the ~50 curated questions) — and even then,
the cheaper fix is usually "add the missing question and regenerate," not "add a live LLM call."

## Architecture

```
Build time (manual script, run on-demand, not on every deploy):
  knowledge/*.md  (About / Experience / Projects / Skills content)
        │
        ▼
  scripts/generate-qa.ts
    for each curated question:
      1. Fuse.js / keyword match → relevant knowledge chunks (retrieval)
      2. send {question + chunks} to Gemini once, temperature 0
      3. write {question, answer} → src/data/qa.json
        │
        ▼
Runtime (client-side only, ships in the static bundle, no network call):
  "Ask me anything" widget
    - suggested question chips → exact lookup in qa.json (instant)
    - free-text input → Fuse.js fuzzy match against the question corpus
      → if score clears threshold, show that answer + sources
      → else, graceful fallback: "couldn't find that — try asking about
        [suggested topics]"
```

**Retrieval:** Fuse.js (weighted keys: `question` + `keywords`), not hand-rolled BM25/TF-IDF —
overkill at 30–100 entries, and Fuse handles typos for free. Runs entirely client-side, no
model download (ruled out transformers.js — multi-MB download, bad for the perf budget).

**Confidence threshold:** not a hardcoded guess. Fuse's score is inverted from intuitive
"similarity" (0 = perfect match, 1 = no match), so a rule like "score < 0.3 → show answer" needs
tuning against ~20–30 realistic recruiter phrasings run against the actual question corpus once
it exists — don't ship an untested threshold.

**API key:** only ever touches the local machine / CI when running the generation script.
Never ships to the browser. No key, no server, no exposed secret.

## Schema

```ts
{
  id: number,
  question: string,
  keywords: string[],       // phrasing variants Fuse should also match on
  searchText: string,       // normalized question text for Fuse indexing
                             // (NOT "embeddingText" — no embedding model is used here,
                             //  this is lexical/fuzzy matching, keep the name honest)
  answer: {
    short: string,
    detailed: string,       // two tiers only, not three — "medium" tends to be
                             // redundant and triples review effort for no clear gain
  },
  sources: string[],         // e.g. ["about.md", "experience.md"] — shown as
                              // citations under the answer for trust/legitimacy
}
```

## Curated question set (draft, 46 questions — pending final review)

Consolidated to avoid near-duplicate intents (e.g. "Do you know Node?" / "Do you know
databases?" folded into one broader "backend technologies" question with keyword coverage,
rather than one canned Q&A per single-word variant — reduces ambiguous fuzzy matches).

**Background & fit (6)**
1. Tell me about yourself.
2. What kind of role are you looking for?
3. What's your experience level / how many years have you been working?
4. What's your strongest skill?
5. What are you like to work with / how do you work with teams?
6. Why should we hire you?

**Tech stack (8)**
7. What frontend technologies do you know?
8. What's your experience with React?
9. Have you worked with Three.js or React Three Fiber?
10. What state management have you used?
11. What backend technologies do you know?
12. What databases have you worked with?
13. What's your testing experience?
14. What tools do you use day-to-day (Docker, Git, CI/CD, etc.)?

**Thedush / professional experience (10)**
15. What was your role at Thedush Robotics?
16. Tell me about the ONIX project.
17. What's the biggest performance optimization you've shipped?
18. Tell me about a time you solved a hard technical problem.
19. What's your experience with WebSockets / real-time systems?
20. Tell me about the Warehouse Management System project.
21. What's your experience with robotics / ROS2?
22. Tell me about the robot configuration builder project.
23. Have you migrated a legacy system? What did that involve?
24. What's your architecture / system design experience?

**Personal projects (8)**
25. What's your proudest personal project?
26. Tell me about the cricket scoring app.
27. Tell me about the TestAI project.
28. Tell me about the Adda social media app.
29. Have you built anything with AI / LLMs?
30. What personal projects have you shipped end-to-end?
31. Have you built a desktop app (Electron)?
32. What's a project where you used AI-assisted development?

**Performance & engineering practice (6)**
33. How do you approach performance optimization?
34. What's your experience with Core Web Vitals / Lighthouse?
35. How do you debug a slow React app?
36. What's your approach to code quality / testing?
37. How do you structure a large frontend codebase?
38. What's a mistake you made and what did you learn from it?

**Explain the portfolio itself (4)**
39. Explain your portfolio / how is this site built?
40. How does this AI assistant work? (meta — recruiters ask this one)
41. What's the tech stack behind this website?
42. Why did you build a static Q&A instead of a live chatbot?

**Availability & logistics (4)**
43. Are you open to relocation / remote work?
44. What's your notice period / availability?
45. What's your salary expectation?
46. How can I get in touch with you?

## Next steps when resumed

1. Extract `knowledge/*.md` source files from current About/Experience/Projects/Skills content
   (currently inline in TSX, needs pulling out to be a clean generation source).
2. Write `scripts/generate-qa.ts` (Fuse-based retrieval + Gemini call, one-time/manual run).
3. Build the widget UI (question chips + free-text input + threshold fallback + citations),
   matching DESIGN.md's restraint — no gimmicky length-picker, a quiet "more detail" expand.
4. Tune the confidence threshold against real test phrasings before shipping.
