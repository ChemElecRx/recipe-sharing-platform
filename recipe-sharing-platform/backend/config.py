import os

class Config:
    MYSQL_USERNAME = 'root'
    MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD')
    SQLALCHEMY_DATABASE_URI = f'mysql+pymysql://{MYSQL_USERNAME}:{MYSQL_PASSWORD}@localhost/recipe_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.urandom(24)
