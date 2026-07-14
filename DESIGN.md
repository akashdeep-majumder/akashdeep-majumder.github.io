# Portfolio Design Guidelines

## Philosophy

This portfolio should feel premium, modern, and confident.

The goal is **not** to impress with flashy animations.

The goal is to make the experience feel smooth, intentional, and alive.

Think:

- Linear
- Vercel
- Raycast
- Notion

Avoid looking like a template or an animation showcase.

---

# Design Principles

- Simplicity over decoration.
- Motion should support the content.
- Every animation should have a purpose.
- Users should notice the polish, not the animations.
- Performance is more important than visual effects.
- Accessibility comes first.

If an animation makes reading harder, remove it.

---

# Motion Guidelines

The website should never feel completely static.

Every major section should have subtle motion, but never overwhelming.

## Allowed Animations

### Section Reveal

As sections enter the viewport:

- fade in
- move upward slightly (20–40px)
- duration: 0.5–0.7s
- ease-out
- animate only once

---

### Staggered Children

Lists should never appear all at once.

Examples:

- project cards
- skills
- timeline items
- achievements

Use small stagger delays (50–100ms).

---

### Hover States

Interactive elements should feel responsive.

Buttons:

- slight lift (1–2px)
- subtle background transition

Cards:

- tiny translateY
- slightly brighter border
- optional subtle shadow

Links:

- smooth color transition
- optional underline animation

Hover effects should feel instant and lightweight.

---

### Page Load

Hero content may fade in with a slight stagger.

Do not create long intro animations.

The user should be able to interact immediately.

---

### Scrolling

Scrolling should feel smooth.

Avoid:

- scroll hijacking
- pinned sections
- excessive parallax

Only subtle reveal animations are allowed.

---

### Background Motion

Very subtle background movement is acceptable.

Examples:

- slowly moving gradients
- slight animated glow
- gentle floating blur

Movement should take 20–30 seconds for a full cycle.

Users should barely notice it.

---

### Numbers

Statistics may count up once when visible.

Do not repeat the animation.

---

# Motion Rules

Animation duration:

150–600ms

Hover:

150–200ms

Section reveal:

500–700ms

Never use:

- bounce
- elastic
- exaggerated spring effects

Prefer:

ease-out

or gentle spring animations.

---

# Visual Style

Minimal.

Lots of whitespace.

Strong typography.

Soft borders.

Muted colors.

Very few shadows.

No glassmorphism.

No neon.

No heavy gradients.

No unnecessary icons.

---

# Components

Project cards should feel interactive.

Buttons should feel clickable.

Sections should have breathing room.

Navigation should remain clean.

Everything should align to a consistent spacing system.

---

# Performance

Animations must maintain 60fps.

Prefer CSS transforms:

- translate
- opacity
- scale

Avoid animating:

- width
- height
- top
- left

Use Intersection Observer (or Motion's viewport APIs) instead of expensive scroll listeners whenever possible.

---

# Accessibility

Respect prefers-reduced-motion.

Animations should never hide important information.

The website must remain fully usable without motion.

---

# What NOT to Add

Do NOT add:

- spinning elements
- floating icons everywhere
- animated backgrounds with particles
- typing effects
- excessive parallax
- scroll progress tied to every element
- random entrance directions
- rotating cards
- bouncing buttons
- flashy loaders
- unnecessary 3D effects

Less is more.

---

# When Making Changes

Before implementing any animation, ask:

1. Does this improve the user experience?
2. Does it make the page feel more premium?
3. Would Linear or Vercel ship this?
4. If removed, would anyone miss it?

If the answer is "no", don't add it.

Aim for a portfolio that feels refined rather than animated.
