# Adopt A Pet 🐾

A beginner-friendly React project to learn and demonstrate core **React Router** concepts by building a functional pet adoption website.

## What You'll Learn

This project teaches you how to:
- **Set up client-side routing** with `react-router-dom`, creating a fast single-page application (SPA).
- **Create routes for different pages** using modern JSX-based configuration.
- **Build dynamic pages** that render content based on URL parameters (e.g., `/dog` or `/cat/123`).
- **Read URL parameters** using the `useParams` hook.
- **Handle search functionality** by reading query strings with the `useSearchParams` hook.
- **Style active navigation links** using the `<NavLink>` component.
- **Navigate programmatically** using the `useNavigate` hook and the `<Navigate>` component.
- **Fetch data** within components using `useEffect` and manage component state (`useState`).
- **Handle loading and error states** for a better user experience.
- **Integrate with a mock API** and understand the importance of avoiding race conditions during initialization.

## What The App Does

This is a pet adoption website where users can:
- View all available pets on the home page
- Filter pets by animal type (dogs, cats, etc.)
- Click on a pet to see detailed information
- Search for pets by name
- Handle cases where pet details aren't available

## Key Concepts in Action

#### 1. Route Configuration (`src/App.js`)
The application uses `createBrowserRouter` to define all possible routes. This includes an index route for the homepage, dynamic routes for pet types and details, and a search route.

```javascript
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={ <HomePage /> } />
    <Route path=":type" element={ <HomePage />} />
    <Route path=":type/:id" element={ <PetDetailsPage />} />
    <Route path="search" element={ <SearchPage />} />
    {/* ... */}
  </Route>
));
```

#### 2. Reading URL Parameters (`src/pages/home/index.js`)
The `HomePage` uses the `useParams` hook to get the `type` of animal from the URL. This `type` is then used to fetch and display the correct pets.

```javascript
import { useParams } from 'react-router-dom';

const HomePage = () => {
  const { type } = useParams(); // Gets 'dog', 'cat', etc. from the URL

  useEffect(() => {
    getPets(type); // Fetches pets based on the type
  }, [type]);
  // ...
};
```

#### 3. Styling Active Links (`src/components/navigation/index.js`)
The `<NavLink>` component is used for navigation. It allows for easy styling of the currently active link by passing a function to the `className` prop.

```javascript
<NavLink 
  to="/"
  className={ ({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}` }
>
  All Pets
</NavLink>
```

#### 4. Mock API Initialization (`src/index.js`)
To prevent a race condition where the app tries to fetch data before the mock API is ready, the app rendering is wrapped in the `.then()` of the `worker.start()` promise.

```javascript
worker.start().then(() => {
  // ... render the React app
});
```

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

The main files for this project are in the `src/` folder, organized by pages, components, and API logic. The routing is centralized in `src/App.js`, and mock API handlers are in `src/mocks/`.

- `src/App.js` - Main app component where you'll add routing
- `src/pages/home/index.js` - Home page showing all pets
- `src/pages/detail/index.js` - Individual pet details page
- `src/pages/search/index.js` - Search results page
- `src/pages/petNotFound/index.js` - "Pet not found" error page

## Important Notes

- This app uses **Mock Service Worker (MSW)** to simulate API calls
- For best experience, use Google Chrome with third-party cookies enabled

## Next Steps

Once you have the app running, your task is to:
1. Install React Router
2. Set up routes in `App.js`
3. Connect the navigation and links
4. Handle URL parameters for pet details
5. Add search functionality

Happy coding! 🚀