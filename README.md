# recipe-sharing-platform
This is a recipe sharing platform where users can discover, share, and manage recipes.

## Prerequisites

Before running this project, ensure you have the following installed:

- Python 3
- Node.js (for npm)

## Getting Started
### Initialize the database:
Create a database named recipe_db (ensure MySQL is running):
```
CREATE DATABASE recipe_db;
```
### Backend Setup

1. Create a virtual environment:
   ```
   python -m venv env
   ```
2. Activate the virtual environment:

- On Windows:
```
env\Scripts\activate
```
- On macOS/Linux:
```
source env/bin/activate
```
3. Install Python dependencies:
```
pip3 install -r requirements.txt
```
Frontend Setup
Install npm dependencies:
```
npm install
```
## Running the Application
Start the frontend development server:
```
npm start
```
Run the backend server:
```
python3 app.py
```
Usage
Access the frontend at http://localhost:3000 in your browser.
Interact with the recipe sharing platform to view, create, and manage recipes.
