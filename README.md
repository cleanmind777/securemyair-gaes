## SecureMyAir  GAES Frontend

This repository contains the frontend application for **SecureMyAir** (GAES), built with React. It provides the user interface for authentication, dashboard views, and customer management.

### Tech stack

- **Framework**: React (SPA)
- **Language**: JavaScript (ES6+)
- **Package manager**: npm

### Environment variables

Create a `.env` file in the project root (copy from `.env.example`). Only variables prefixed with `REACT_APP_` are exposed to the app.

| Variable | Description |
|----------|-------------|
| `REACT_APP_API_URL` | API base URL for backend requests (e.g. `http://localhost/php/gaes` or `https://api.securemyair.com/gaes`). No trailing slash. |

```bash
cp .env.example .env
# Edit .env with your values.
```

### Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm start
   ```

   Then open `http://localhost:3000` in your browser.

3. **Create a production build**

   ```bash
   npm run build
   ```

   The optimized build output will be generated in the `gaes` directory.

### Project structure (frontend)

- `src/`
  - `App.js`  main application component and routing
  - `index.js`  entry point
  - `components/`  shared UI components (layout, inputs, dialogs, forms, reset password flow, etc.)
  - `pages/`  top-level pages such as `LoginPage` and `DashboardPage`
  - `context/`  `ClientContext` and route protection (`Protected.js`)
  - `assets/`  images such as logos and banners

### Available npm scripts

- **`npm start`**  start development server
- **`npm run build`**  build production bundle into `gaes/`
- **`npm test`** (if configured)  run tests

### Deployment

The `gaes` directory contains the static production build (HTML, JS, CSS, media). You can deploy this folder to any static hosting provider (e.g., Nginx, Apache, S3 + CloudFront, or similar). Point your web server to serve `gaes/index.html` for all SPA routes.

### License

This project is proprietary to its owner. Do not distribute without permission.