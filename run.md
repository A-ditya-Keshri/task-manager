# Deployment Guide

This guide covers the complete process to deploy the Task Manager App.
**Backend** will be deployed on **Render** (Free Tier).
**Frontend** will be deployed on **Netlify** (Free Tier).

## Prerequisites
- GitHub Account
- Render Account (Sign up at [render.com](https://render.com))
- Netlify Account (Sign up at [netlify.com](https://netlify.com))
- Git installed locally

---

## Part 1: Prepare & Push to GitHub

1. **Verify Project Structure**:
   Your project should look like this:
   ```
   / (Root)
   ├── backend/
   │   ├── manage.py
   │   ├── requirements.txt
   │   ├── Procfile
   │   └── ...
   ├── frontend/
   │   ├── package.json
   │   ├── vite.config.js
   │   └── ...
   └── run.md
   ```

2. **Push to GitHub**:
   Open a terminal in the root folder (`d:\OLD LAPTOP\Assingment`) and run:
   ```powershell
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

---

## Part 2: Deploy Backend (Render)

1. **Create Web Service**:
   - Go to [dashboard.render.com](https://dashboard.render.com).
   - Click **New +** -> **Web Service**.
   - Select **Build and deploy from a Git repository**.
   - Connect your GitHub repository (`task-manager`).

2. **Configure Settings**:
   - **Name**: `task-manager-backend` (or similar)
   - **Region**: Closest to you (e.g., Singapore)
   - **Root Directory**: `backend` (Important!)
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt && python manage.py migrate`
   - **Start Command**: `gunicorn taskmanager.wsgi`
   - **Instance Type**: Free

3. **Deploy**:
   - Click **Create Web Service**.
   - Wait for the build to finish.
   - Once live, copy the URL (e.g., `https://task-manager-backend.onrender.com`).
   - **Save this URL**. You need it for the Frontend.

---

## Part 3: Deploy Frontend (Netlify)

1. **Update API URL in Frontend**:
   - In your local project, open `frontend/src/api.js`.
   - Replace the `baseURL` with your **Render Backend URL**:
     ```javascript
     const api = axios.create({
       baseURL: 'https://task-manager-backend.onrender.com/api/', // Use YOUR Render URL
     });
     ```
   - Save and Push:
     ```powershell
     git add frontend/src/api.js
     git commit -m "Update API URL for production"
     git push origin main
     ```

2. **Create New Site on Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com).
   - Click **Add new site** -> **Import from Git**.
   - Choose **GitHub** and select your repository.

3. **Configure Build Settings**:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

4. **Deploy**:
   - Click **Deploy Site**.
   - Netlify will build your site. Once done, you will get a live URL (e.g., `https://your-site.netlify.app`).

---

## Part 4: Final Verification

1. Open your Netlify URL.
2. The app should load.
3. Try adding a task. It should persist (saved to the backend).
   *(Note: On Render's free tier, the SQLite database is ephemeral. Data will reset if the server restarts. For persistent data, you would need a PostgreSQL database, but that is outside the scope of this simple assignment).*

---

## Bonus: How to Run Locally Again

If you want to run locally after deployment:
1. Change `frontend/src/api.js` back to `http://localhost:8000/api/`.
2. Start Backend: `python backend/manage.py runserver` (in `backend/` folder).
3. Start Frontend: `npm run dev` (in `frontend/` folder).
