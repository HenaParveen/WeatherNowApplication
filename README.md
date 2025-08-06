🌦️ Advanced React Weather App
A production-ready weather application built with React and OpenWeatherMap API, featuring a responsive UI, multiple saved locations, dark mode, hourly & daily forecasts, health insights (UV Index, Air Quality, Pollen Count), severe weather alerts, interactive radar maps, and custom notifications.

🌦️ Advanced React Weather App
A production-ready weather application built with React and OpenWeatherMap API, featuring a responsive UI, multiple saved locations, dark mode, hourly & daily forecasts, health insights (UV Index, Air Quality, Pollen Count), severe weather alerts, interactive radar maps, and custom notifications.

🚀 Features
🌍 Multiple Saved Locations – Quickly switch between saved cities.

⏰ Hourly & Daily Forecasts – View detailed 10-day weather predictions.

⚠️ Severe Weather Alerts – Get notifications for storms, temperature extremes, or strong winds.

🧴 Health Info – Displays UV Index, Air Quality, and Pollen Count for safety.

🌀 Interactive Radar Maps – Shows precipitation, cloud cover, wind, and pressure overlays.

🚨 Custom Alerts – Set personal weather alerts (e.g., temperature thresholds, rain start).

🌙 Dark Mode – Seamlessly switch between light and dark themes.

📱 Fully Responsive – Optimized for desktop, tablet, and mobile screens.

🛠️ Tech Stack
Frontend: React (Hooks, Functional Components)

State Management: React Context / Redux (optional)

HTTP Client: Axios

Styling: Plain CSS with CSS variables for theming

Maps: Embedded radar maps

API: OpenWeatherMap API

📦 Installation
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/HenaParveen/WeatherNowApplication.git
cd WeatherNowApplication
2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Create .env file
Add your OpenWeatherMap API key:

env
Copy
Edit
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
4️⃣ Start the development server
bash
Copy
Edit
npm start
📂 Project Structure
css
Copy
Edit
src/
├── components/
│ ├── WeatherCard.jsx
│ ├── ForecastCard.jsx
│ ├── HourlyForecast.jsx
│ ├── LocationManager.jsx
│ ├── AlertsPanel.jsx
│ ├── HealthInfo.jsx
│ ├── RadarMap.jsx
│ └── ThemeToggle.jsx
├── services/
│ └── weatherService.js
├── styles/
│ ├── variables.css
│ ├── App.css
│ ├── WeatherCard.css
│ ├── ForecastCard.css
│ ├── HourlyForecast.css
│ ├── LocationManager.css
│ ├── AlertsPanel.css
│ ├── HealthInfo.css
│ └── RadarMap.css
├── App.jsx
└── index.js
🌙 Dark Mode
Implemented using CSS variables and a ThemeToggle component.

Persists user preference via localStorage.

⚠️ Error Handling
Handles invalid city names, network errors, and API limits.

Displays user-friendly messages instead of breaking the UI.

🚀 Deployment
Build the project for production:

bash
Copy
Edit
npm run build
Deploy using:

Vercel: Drag-and-drop build/ folder

Netlify: Connect GitHub repository

GitHub Pages: npm run deploy (after setup)

🔑 API Usage
This project uses:

Current Weather Data

5-Day / 3-Hour Forecast

Air Pollution API

Weather Alerts

UV Index & Health Data

👉 Sign up at OpenWeatherMap for a free API key.

🎨 Screenshots
Feature Light Mode Dark Mode
Home Screen
Hourly Forecast

🤝 Contributing
Feel free to submit PRs for:

Additional weather APIs

Improved animations

Localization (multi-language support)

📜 License
This project is licensed under the MIT License.
