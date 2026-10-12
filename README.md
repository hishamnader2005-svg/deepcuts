# Spotify Game

A game built around Spotify music data. Guess, play, and see how well you know your music.

## Features

- Pulls track and artist data from the Spotify Web API
- Game rounds based on songs/artists
- Score tracking

## Getting Started

### Prerequisites

- A [Spotify Developer](https://developer.spotify.com/dashboard) account and an app (for your Client ID and Secret)
- Add `http://localhost:3000/callback` (or whatever your app uses) as a Redirect URI in the Spotify dashboard

### Setup

```bash
git clone https://github.com/hishamnader2005-svg/<repo-name>.git
cd <repo-name>
```

Create a `.env` file in the project root:

```
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
```

Install dependencies and run (adjust to your stack):

```bash
# Node
npm install
npm start

# Python
pip install -r requirements.txt
python main.py
```

## How to Play

1. Log in with Spotify.
2. Start a round.
3. Score points for correct answers.

## Tech Stack

- Spotify Web API
- (add your language/framework here)

## Notes

Never commit your `.env` file or Spotify credentials. Make sure `.env` is in `.gitignore`.

## Author

Hisham Nader: [GitHub](https://github.com/hishamnader2005-svg) | [LinkedIn](https://www.linkedin.com/in/hisham-nader-557175262/)
