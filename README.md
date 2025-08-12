# Food Delivery App Using React JS

A modern food delivery web application built with React and Vite. This project features a smooth user experience, responsive design, and section-based navigation with smooth scrolling.

## Features
- Browse and filter food menu by category
- Add/remove items to cart
- View cart and proceed to checkout
- Section navigation with smooth scrolling
- Responsive design for mobile and desktop
- Login popup (UI only)
- Built with React, Vite, and React Router

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation
1. Clone the repository:
	 ```sh
	 git clone https://github.com/DhanukaRathnayaka/Food-Delivery-App-Using-React-JS.git
	 cd Food-Delivery-App-Using-React-JS/frontend
	 ```
2. Install dependencies:
	 ```sh
	 npm install
	 ```

### Running Locally
Start the development server:
```sh
npm run dev
```
Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

### Build for Production
```sh
npm run build
```

### Deploy
This project is configured for deployment with GitHub Pages and Vercel.
- To deploy to GitHub Pages:
	```sh
	npm run deploy
	```
- For Vercel, connect your repo and follow Vercel's deployment instructions.

## Project Structure
```
frontend/
	├── public/           # Static assets
	├── src/
	│   ├── assets/       # Images and static JS data
	│   ├── components/   # React components
	│   ├── context/      # React context for state management
	│   ├── pages/        # Page components (Home, Cart, PlaceOrder)
	│   ├── App.jsx       # Main app component
	│   ├── main.jsx      # Entry point
	│   └── index.css     # Global styles
	├── package.json
	├── vite.config.js
	└── README.md
```

## License
This project is open source and available under the [MIT License](LICENSE).

---

**Author:** Dhanuka Rathnayaka
