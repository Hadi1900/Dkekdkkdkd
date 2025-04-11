# MoodFlix - Movie Recommendations Based on Your Mood

A React-based application that recommends movies based on your current mood.

## Features

- Mood-based movie recommendations (Happy, Sad, Excited, Relaxed)
- Search functionality for finding specific movies
- Detailed movie information with trailers and similar movies
- Favorites system to save movies you like
- Responsive design for mobile and desktop

## Deployment Instructions

When deploying this application on Replit, follow these steps to avoid build errors:

1. Make sure all script paths in HTML files use relative paths:
   - In `client/index.html`, the script should be `<script type="module" src="./src/main.tsx"></script>`
   - Not `<script type="module" src="/src/main.tsx"></script>` (absolute path)

2. Use the Deploy button in Replit to deploy the application

3. If you encounter any deployment errors, try these steps:
   - Check that the index.html file exists in both the client directory and the root directory
   - Verify that all import paths use relative paths (starting with `./`) instead of absolute paths (starting with `/`)

## Development

To run the application locally:

```bash
npm run dev
```

This will start the server at [http://localhost:5000](http://localhost:5000).

## Environment Variables

The application requires the following environment variables:

- `TMDB_API_KEY`: API key for The Movie Database 

## Technologies Used

- React
- Express
- Vite
- TanStack Query
- Tailwind CSS
- shadcn/ui components