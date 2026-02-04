# Deployment Guide

## Step 1: Push Fixes to GitHub

You have already fixed the `requirements.txt` and `Procfile`. Now you need to send these changes to GitHub so Render can see them.

Open your terminal in `d:\OLD LAPTOP\Assingment` and run:

```powershell
git add .
git commit -m "Fix deployment config"
git push origin main
```

## Step 2: Deploy Backend (Render)

1. Go to [dashboard.render.com](https://dashboard.render.com).
2. If you already created the Web Service:
   - Click on `task-manager-backend`.
   - Click **Manual Deploy** -> **Deploy latest commit**.
3. If you haven't created it yet:
   - Click **New +** -> **Web Service**.
   - Connect your `task-manager` repo.
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt && python manage.py migrate`
   - **Start Command**: `gunicorn taskmanager.wsgi`
   - Click **Create Web Service**.

Wait for the deploy to finish. It should say "Live".

## Step 3: Connect Frontend to Backend

1. Copy your Render Backend URL (e.g., `https://task-manager-backend-xyz.onrender.com`).
2. Update `frontend/src/api.js` in your local project:
   ```javascript
   const api = axios.create({
       baseURL: 'https://YOUR-RENDER-URL.onrender.com/api/',
   });
   ```
3. Push this change:
   ```powershell
   git add frontend/src/api.js
   git commit -m "Point frontend to production API"
   git push origin main
   ```

## Step 4: Deploy Frontend (Netlify)

1. Go to [app.netlify.com](https://app.netlify.com).
2. **Add new site** -> **Import from Git** -> **GitHub**.
3. Select your `task-manager` repo.
4. Settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.
