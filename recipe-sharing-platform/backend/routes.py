from flask import Blueprint, request, jsonify
from models import db, User, Recipe

api = Blueprint('api', __name__)

@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    new_user = User(username=data['username'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username'], password=data['password']).first()
    if user:
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@api.route('/recipes', methods=['GET', 'POST'])
def recipes():
    if request.method == 'POST':
        data = request.get_json()
        new_recipe = Recipe(
            title=data['title'],
            description=data['description'],
            ingredients=data['ingredients'],
            instructions=data['instructions'],
            user_id=data['user_id']
        )
        db.session.add(new_recipe)
        db.session.commit()
        return jsonify({"message": "Recipe added successfully"}), 201

    recipes = Recipe.query.all()
    result = []
    for recipe in recipes:
        recipe_data = {
            "id": recipe.id,
            "title": recipe.title,
            "description": recipe.description,
            "ingredients": recipe.ingredients,
            "instructions": recipe.instructions,
            "user_id": recipe.user_id
        }
        result.append(recipe_data)
    return jsonify(result), 200
