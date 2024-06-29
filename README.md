# recipe-sharing-platform
This is a recipe sharing platform where users can discover, share, and manage recipes.

## Prerequisites

Before running this project, ensure you have the following installed:

- Python 3
- Node.js (for npm)

## Getting Started

### Backend Setup

1. Create a virtual environment:
   ```
   python -m venv env
   ```
Activate the virtual environment:

- On Windows:
```
env\Scripts\activate
```
- On macOS/Linux:
```
source env/bin/activate
```
Install Python dependencies:
```
pip3 install -r requirements.txt
```
Initialize the database:
Create a database named recipe_db (ensure MySQL is running):
sql
```
CREATE DATABASE recipe_db;
```
Run the backend server:
```
python3 app.py
```
Frontend Setup
Install npm dependencies:
```
npm install
```
Start the frontend development server:
```
npm start
```
Usage
Access the frontend at http://localhost:3000 in your browser.
Interact with the recipe sharing platform to view, create, and manage recipes.
