# Adopt A Pet 🐾

A beginner-friendly React project to learn **React Router** by building a pet adoption website.

## What You'll Learn

This project teaches you how to:
- Set up client-side routing with React Router
- Create different pages for your React app
- Handle URL parameters and query strings
- Navigate between pages programmatically
- Show different content based on the current URL

## What The App Does

You'll build a pet adoption website where users can:
- View all available pets on the home page
- Filter pets by animal type (dogs, cats, etc.)
- Click on a pet to see detailed information
- Search for pets by name
- Handle cases where pet details aren't available

## Getting Started

### Prerequisites
- Node.js installed on your computer
- A code editor (like VS Code)

### Setup Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser** and go to [http://localhost:3000](http://localhost:3000)

## Project Structure

The main files you'll work with are in the `src/` folder:

- `src/App.js` - Main app component where you'll add routing
- `src/pages/home/index.js` - Home page showing all pets
- `src/pages/detail/index.js` - Individual pet details page
- `src/pages/search/index.js` - Search results page
- `src/pages/petNotFound/index.js` - "Pet not found" error page

## Important Notes

- This app uses **Mock Service Worker (MSW)** to simulate API calls
- For best experience, use Google Chrome with third-party cookies enabled
- The app starts with basic components - you'll add the routing logic yourself!

## Next Steps

Once you have the app running, your task is to:
1. Install React Router
2. Set up routes in `App.js`
3. Connect the navigation and links
4. Handle URL parameters for pet details
5. Add search functionality

Happy coding! 🚀