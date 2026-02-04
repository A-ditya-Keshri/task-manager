# Project Compilation & Deployment Guide

## 1. How to Run Locally

### Prerequisites
- Python 3.10+ installed
- Node.js installed

### Step 1: Backend Setup (Django)
1. Open a terminal in the project root: `d:\OLD LAPTOP\Assingment`.
2. Create and activate virtual environment:
   ```powershell
   python -m venv venv
   .\venv\Scripts\activate
   ```
3. Install dependencies:
   ```powershell
   pip install -r backend/requirements.txt
   ```
4. Run migrations:
   ```powershell
   python backend/manage.py migrate
   ```
5. Start the Server:
   ```powershell
   python backend/manage.py runserver
   ```
   *Backend runs at `http://127.0.0.1:8000`*

### Step 2: Frontend Setup (React)
1. Open a **new** terminal.
2. Go to frontend directory:
   ```powershell
   cd frontend
   ```
3. Install dependencies:
   ```powershell
   npm install
   ```
4. Run the Dev Server:
   ```powershell
   npm run dev
   ```
   *Frontend runs at `http://localhost:5173`*

---

## 2. How to Upload to GitHub

1. **Initialize Git**:
   Open a terminal in the root folder (`d:\OLD LAPTOP\Assingment`) and run:
   ```powershell
   git init
   ```

2. **Add Files**:
   ```powershell
   git add .
   ```

3. **Commit**:
   ```powershell
   git commit -m "Initial commit of Task Manager App"
   ```

4. **Link to GitHub**:
   - Go to [GitHub.com](https://github.com) and create a **new repository** (empty).
   - Copy the URL (e.g., `https://github.com/yourusername/task-manager.git`).
   - Run:
     ```powershell
     git branch -M main
     git remote add origin <PASTE_YOUR_REPO_URL_HERE>
     git push -u origin main
     ```

---

## 3. How to Deploy to Netlify (Frontend)

**Note**: Netlify is primarily for Frontend. Your Django Backend must be hosted separately (e.g., on Render, Railway, or PythonAnywhere) for the deployed app to work fully. For this assignment submission, you can deploy the frontend to Netlify and point it to your local backend (if checking locally) or just demonstrate the UI.

### Method A: Drag & Drop (Easiest)
1. In your `frontend` terminal, run:
   ```powershell
   npm run build
   ```
   This creates a `dist` folder inside `frontend`.
2. Go to [app.netlify.com](https://app.netlify.com/drop).
3. Drag and drop the `frontend/dist` folder into the Netlify page.
4. Your site will be live instantly!

### Method B: Connect to GitHub (Recommended)
1. Push your code to GitHub (see Section 2).
2. Log in to Netlify and click **"Add new site"** > **"Import from Git"**.
3. Select **GitHub** and choose your repository.
4. **Build Settings**:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### Important Note on Backend
Since the backend is separate, after deploying the frontend, it will try to hit `http://localhost:8000` (because of `api.js`). 
- **For a full deployment**, you must deploy the Django backend to a service like **Render** or **PythonAnywhere**.
- Once the backend is deployed (e.g., `https://my-django-app.onrender.com`), update `frontend/src/api.js` with the new URL, commit, and push. Netlify will update automatically.

---

## 4. How to Run Again (After Initial Setup)

If you have already set up the project and closed your terminals, follow these steps to restart the application:

### Step 1: Start Backend (Django)
1. Open a terminal in the project root: `d:\OLD LAPTOP\Assingment`.
2. Activate the virtual environment:
   ```powershell
   .\venv\Scripts\activate
   ```
3. Start the Server:
   ```powershell
   python backend/manage.py runserver
   ```

### Step 2: Start Frontend (React)
1. Open a **new** terminal.
2. Go to frontend directory:
   ```powershell
   cd frontend
   ```
3. Run the Dev Server:
   ```powershell
   npm run dev
   ```

Now visit `http://localhost:5173` to see your app!
