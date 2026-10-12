# Deep Cuts 💿

A daily music guessing game. You get 7 prompts like "Name a song with a color in the title" and 25 seconds each to type a song. The rarer your answer, the more points you score.

Built with plain HTML, CSS and JavaScript. No frameworks, no build step, no API keys.

## How to Play

1. Pick **Today's Daily** or **Endless Mode**.
2. Read the prompt and type a song title before the timer runs out.
3. Your answer is matched against the built-in song library and scored by rarity.
4. Finish all 7 prompts, see how deep you dug, and share your result.

### Scoring

| Tier | Points |
| --- | --- |
| Chart-topper | 10 |
| Fan favorite | 30 |
| Deep cut | 60 |
| One in a million | 100 |
| Not in the crate | 0 |

- **Combo bonus:** back-to-back Fan favorite or better answers build a combo worth up to +25 extra points per round.
- **Depth:** your score is shown in meters (10 m per point), and the background gets darker the deeper you go.
- **Ranks:** from Surface Skimmer up to One in a Million.

## Features

- **Daily Dive:** everyone gets the same 7 prompts each day, once per day
- **Endless Mode:** random prompts, play as many times as you want
- **Streaks and best score** saved in your browser
- **Typo-tolerant matching** that ignores case, accents, punctuation and "the/a"
- **Shareable emoji result** (🟩🟪🟦⬜⬛), copied with one click
- **Sound effects** with a mute toggle
- Works on desktop and mobile

## Run It

No install needed. Download or clone the repo and open `index.html` in any modern browser.

To serve it locally instead:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project Structure

```
index.html          Page markup and screens
styles/style.css    Styling and animations
styles/script.js    Game logic, song library, scoring, sound
```

## Adding Songs

All prompts and songs live in the `PROMPTS` array at the top of `styles/script.js`. Each song goes in a tier from 1 (common) to 4 (rare), written as `"Title — Artist"`. Add alternate accepted spellings after a `|`:

```js
"Mambo No. 5 — Lou Bega|Mambo Number 5"
```

## Notes

Deep Cuts is a fan-made project and is not affiliated with or endorsed by Spotify.

## Author

Built by Hisham Nader.

[GitHub](https://github.com/hishamnader2005-svg) | [LinkedIn](https://www.linkedin.com/in/hisham-nader-557175262/)
