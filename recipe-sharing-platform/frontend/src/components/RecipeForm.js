import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [userId, setUserId] = useState(1); // Change this based on logged-in user

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/recipes', {
        title,
        description,
        ingredients,
        instructions,
        user_id: userId
      });
      alert(response.data.message);
    } catch (error) {
      alert('Recipe submission failed!');
    }
  };

  return (
    <div>
      <h2>Add a New Recipe</h2>
      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '95%', padding: '10px', margin: '10px' }}
        />
      </div>
      <div style={{ margin: '10px 0' }}>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '95%', padding: '10px', margin: '10px' }}
        />
      </div>
      <div style={{ margin: '10px 0' }}>
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          style={{ width: '95%', padding: '10px', margin: '10px' }}
        />
      </div>
      <div style={{ margin: '10px 0' }}>
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          style={{ width: '95%', padding: '10px', margin: '10px' }}
        />
      </div>
      <div style={{ margin: '10px 0' }}>
        <button onClick={handleSubmit} style={{ padding: '10px 20px' }}>Submit</button>
      </div>
    </div>
  );
}

export default RecipeForm;
