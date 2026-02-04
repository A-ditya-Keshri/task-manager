# Task Manager App

A simple, mobile-friendly Task Manager web application built with React (Vite) and Django.

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React (Icons), Axios.
- **Backend**: Python 3.11+, Django 5+, Django REST Framework.
- **Database**: SQLite (default for Django).

## Setup Instructions

### Prerequisites
- Node.js (v16+) and npm
- Python (v3.10+)

### 1. Backend Setup

1. Navigate to the root directory.
2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
3. Activate the virtual environment:
   - Windows: `.\venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`
4. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
   *(If requirements.txt is missing during first run, install manually: `pip install django djangorestframework django-cors-headers`)*
5. Navigate to the backend folder:
   ```bash
   cd backend
   ```
6. Run migrations:
   ```bash
   python manage.py migrate
   ```
7. Start the server:
   ```bash
   python manage.py runserver
   ```
   The API will be available at `http://localhost:8000/api/`.

### 2. Frontend Setup

1. Open a new terminal.
2. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`.

## Assumptions
- The application is running locally for evaluation.
- SQLite is used for simplicity; for production, PostgreSQL would be preferred.
- CORS is configured to allow all origins (`CORS_ALLOW_ALL_ORIGINS = True`) for easier local development.

## Features
- Add a new task
- View list of tasks (sorted by completion status and date)
- Toggle completion status
- Delete tasks
- Mobile-responsive design
