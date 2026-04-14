# Gym List

A personal gym workout reference app organized by body part. Select a muscle group, pick a workout, and watch the embedded YouTube video.

**Live site:** https://nahomsolomon12.github.io/gym-list

---

## Workouts

**Core**
- 90-90 Breathing
- Heel Slide
- Standing Wall Supported Reach

**Legs**
- SI Joints
- Hip Circuit - Rotational and Abduction
- Gluteus Maximus, Minimus and Medius
- Shin + Ankle Rolls

**Upper Body**
- Chest + Upper Back: Until 11 Minutes
- Lats
- Shoulder External Rotation
- Dumbbell Pullover

---

## Tech Stack

- React 19
- React Router v7
- Vite
- Deployed via GitHub Pages (`gh-pages`)

---

## Running Locally

```bash
npm install
npm run dev
```

## Deploying

```bash
npm run deploy
```

Builds the project and pushes the `dist` folder to the `gh-pages` branch.

---

## Adding Workouts

All workout data lives in [src/data.js](src/data.js). Each entry needs an `id`, a `name`, and a YouTube embed `video` URL:

```js
{
  id: 12,
  name: "My New Exercise",
  video: "https://www.youtube.com/embed/VIDEO_ID"
}
```

Add it to the relevant body part array (`Core`, `Legs`, or `Upperbody`), or add a new key to `gymData` for a new body part.
