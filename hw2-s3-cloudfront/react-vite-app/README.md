# React Vite Multi-Page Application

A simple React application built with Vite featuring multiple pages and responsive design.

## Features

- **3 Pages**: Home, About, and Projects
- **React Router**: Client-side routing for seamless navigation
- **Responsive Design**: Mobile-friendly layout with CSS
- **Image Placeholders**: Ready-to-use placeholders for your images
- **404 Error Page**: Custom error page for handling missing routes

## Project Structure

```
react-vite-app/
├── public/              # Static assets (place your images here)
├── src/
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   └── Projects.css
│   ├── App.jsx         # Main app component with routing
│   ├── App.css         # Global styles and navigation
│   └── main.jsx        # Entry point
├── index.html          # Main HTML file
├── error.html          # 404 error page
└── package.json
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Adding Images

### For Page Images

1. Place your images in the `public/` folder
2. Update the image paths in the page components:
   - Home page: `src/pages/Home.jsx` (line 9)
   - Projects page: `src/pages/Projects.jsx` (lines 16, 23, 30)

Example:
```jsx
<img src="/your-image.jpg" alt="Description" />
```

### Image Locations

- **Home Page**: 1 image placeholder
- **Projects Page**: 3 image placeholders (one per project card)

## Pages

- **Home** (`/`): Landing page with welcome message and image placeholder
- **About** (`/about`): Information about the team and mission
- **Projects** (`/projects`): Showcase of projects with image placeholders

## Deployment

### S3 / CloudFront

When deploying to AWS S3 with CloudFront:

1. Build the project: `npm run build`
2. Upload the contents of the `dist/` folder to your S3 bucket
3. Use `error.html` as the custom error document for 404 errors in CloudFront
4. Set `index.html` as the default root object

### Other Static Hosting

The built application can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Technologies Used

- **React 19.2.1**: UI library
- **Vite 7.2.6**: Build tool and dev server
- **React Router 7.10.1**: Client-side routing
- **CSS3**: Styling with modern features

## License

MIT
