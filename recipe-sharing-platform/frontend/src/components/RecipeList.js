import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('http://localhost:5000/api/recipes');
      setRecipes(response.data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <main>
        <h2>Recipes</h2>
        <ul style={{listStyleType: 'none', padding: 10 }}>
          {recipes.map((recipe) => (
            <li key={recipe.id} style={{ border: '1px solid black', margin: '10px 0', padding: '5px' }}>
              <p><strong>Title:</strong> {recipe.title}</p>
              <p><strong>Description:</strong> {recipe.description}</p>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default RecipeList;
