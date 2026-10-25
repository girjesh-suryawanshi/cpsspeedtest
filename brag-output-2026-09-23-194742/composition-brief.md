# Hyperframes Composition Brief: CpsSpeedTest

## Objective
Create a short launch-style brag video for CpsSpeedTest.

## Output
- Composition directory: `brag-output-2026-09-23-194742/composition/`
- Rendered video: `brag-output-2026-09-23-194742/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 18 seconds

## Source Material
- Project root: `f:\reactworkspace\cpsspeedtest\`
- Primary files read: `src/app/page.tsx`, `src/app/globals.css`, `src/app/layout.tsx`
- Product name: CpsSpeedTest
- Tagline / strongest claim: How fast can you click?
- Key UI or visual moment to recreate: The Animated CPS Gauge from the homepage.
- Copy that must appear verbatim:
  - How fast can you CLICK?
  - 14.2 CPS
  - Compete Globally.

## Creative Direction
- Tone preset: chaotic
- Creative direction: High-energy arcade speedrun
- Interpretation: Fast cuts, heavy use of hard beat-driven transitions, text that slams in and holds, high-BPM music to match the clicking intensity.
- Angle: A fast-paced, high-energy arcade speed test challenge. The video leans into the intense, competitive nature of clicking and reaction speed, using the site's neon-on-dark aesthetic to feel like an esports training tool.
- Hook: The question "How fast can you click?" slamming onto the screen word-by-word, immediately followed by the animated CPS Gauge filling up rapidly.
- Outro / punchline: "Compete Globally."
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign

## Visual Identity
- Background: hsl(222.2, 84%, 4.9%)
- Text: hsl(210, 40%, 98%)
- Accent: hsl(172.2, 91.2%, 59.8%)
- Display font: Inter
- Body font: Inter
- Visual references from the project: The neon gradient filled gauge, the stat badges, and the Game Cards from `page.tsx`.

## Storyboard
Use the storyboard in `brag-output-2026-09-23-194742/brag-plan.md` as the creative contract.

Scene summary:
1. The Challenge — 3.0s — "How fast can you CLICK?" slamming in.
2. The Gauge — 5.0s — CPS Gauge fills rapidly to 14.2 CPS.
3. The Games — 5.0s — 3 game cards reveal one by one.
4. The Rank / Outro — 5.0s — Cheetah rank card pops in, then "Compete Globally."

## Audio
- Audio role: dense rhythmic layer
- Audio arc: Starts chaotic and intense, builds tension during the gauge filling, hits hard beats during card reveals, and ends with a sudden cut.
- Music: (use a high-BPM chaotic or electronic track)
- Music treatment: hard start, high volume throughout, abrupt cut on the final logo.
- Music cue guidance: detect at composition via analyze_music_cues.py / hyperframes beats. Use strong cues for scene transitions.
- Audio-reactive treatment: subtle; use music RMS/bass to make the gauge glow and pulse.
- Audio-coupled moments:
  - The Challenge — beat reveal for each word
  - The Gauge — counter ticking matching rapid clicks
  - The Games — card sequence
- SFX selection guidance: use rapid clicking sounds, hard synthetic impact hits, and swish/whoosh sounds for fast slides.
- SFX analysis guidance: use lower high-frequency-risk sounds for the word-by-word reveals.
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation.
- Audio files: copy the chosen music and any Hyperframes-selected SFX into `composition/assets/`

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — `hyperframes-core` (composition contract + `data-*` timing), `hyperframes-animation` (motion), `hyperframes-creative` (design spec, beats, audio-reactive), `hyperframes-keyframes` (seek-safe keyframes), and `hyperframes-cli` (lint/check/render). /brag is its own workflow: do not enter the `hyperframes` entry-point intent interview and do not route into its generic promo / launch-video workflow. Prefer native Hyperframes conventions over anything in `/brag`.

Requirements:
- Show at least one real UI, copy, or visual element from the source project.
- Keep all text readable in the final render.
- Keep the video within 15-25 seconds.
- Include the planned music/SFX layer unless audio was explicitly disabled or documented as intentionally silent.
- Treat `/brag` audio notes as guidance, not a fixed cue sheet. Choose SFX after the visual animation exists.
- Treat music cue metadata as optional timing hints. Hyperframes decides exact animation timing and should ignore cues that hurt readability, scene pacing, or the product story.
- Major reveals may move toward nearby strong cues within about 0.15s. Smaller entrances may align to nearby beat points within about 0.10s. Use only 1-3 strong cue locks in a 15-25s video unless the edit clearly benefits from more.
- Use SFX to support motion and interaction: card sounds for card-like reveals, short announcement cues for major payoffs, key/click sounds for text or user actions, and restraint when the edit is already busy.
- Honor planned music treatment such as fade-outs, ducking, beat-aligned reveals, or letting a final SFX ring over the music, using the best Hyperframes-supported implementation.
- When music is present and the treatment is not `none`, consider Hyperframes audio-reactive workflow: extract audio data and use RMS/frequency bands for subtle, brand-specific motion. Good targets are glow, depth, background warmth, card presence, title emphasis, or other existing visual elements. Avoid waveform/equalizer visuals, musical-note graphics, generic particle systems, strobing, or heavy pulsing.
- Use local assets for audio and any required runtime/media dependencies when possible.
- Run `hyperframes check` before render — it is brag's single gate.
