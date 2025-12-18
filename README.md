
# Crowd Management System

This project is a frontend implementation of the **Crowd Management System dashboard**, developed as part of the **Kloudspot Software Engineer hiring assignment**.  
The UI is built based on the provided **Figma design** and integrated with the given **API endpoints**.


## 🚀 Live Demo
https://crowd-management-system-topaz.vercel.app/


## 🛠 Tech Stack
- React.js
- React Router DOM
- Axios
- Chart Library (Recharts / Chart.js)
- CSS / Tailwind / Bootstrap
- Vercel (Deployment)


## 📌 Features
- Authentication (Login API integrated)
- Dashboard UI as per Figma design
- Average Dwell Time
- Today’s Footfall
- Overall Occupancy (Timeseries Chart)
- Demographics (Pie / Timeseries Chart)
- Entries list with pagination (UI ready)
- Loading states & basic error handling


## 🔐 Authentication
Use the following credentials to login:

Username: test@test.com  
Password: 1234567890


## 🔗 API Integration Notes

### ✅ Login API (Working)
POST /api/auth/login  
Payload was provided in the documentation and works as expected.

### ⚠️ Dashboard APIs
The following APIs were implemented based on assumed payloads, as the exact request body was not mentioned in the documentation:

- POST /api/analytics/dwell
- POST /api/analytics/footfall
- POST /api/analytics/occupancy
- POST /api/analytics/demographics
- POST /api/analytics/entry-exit

Proper loading states, error handling, and flexible code structure have been implemented so payloads can be easily updated when available.

## ⚙️ Local Setup

1. Clone the repository
git clone https://github.com/jainkhushi3/crowd-management-system.git

2. Install dependencies
npm install

3. Run the project
npm run dev
