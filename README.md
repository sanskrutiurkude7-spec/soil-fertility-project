# SoilCare – Community Soil Fertility Management System
## Setup (2 terminals)
1. MongoDB must be running (local) or put your Atlas string in `backend/.env` → `MONGO_URI=`
2. Backend:  `cd backend && npm install && npm run seed && npm run dev`  → http://localhost:5000
3. Frontend: `cd frontend && npm install && npm run dev`  → http://localhost:5173
## Logins
- Admin: admin@soilcare.com / Admin@123  (CHANGE THIS PASSWORD AFTER FIRST LOGIN)
- Demo farmer: farmer@soilcare.com / Farmer@123
## Notes
All recommendations are advisory; verify fertilizer doses with a local agricultural expert.
Future scope (not implemented): AI soil analysis, IoT sensors, weather integration, mobile app, multilingual support.
