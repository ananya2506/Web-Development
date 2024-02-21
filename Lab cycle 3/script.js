document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newRecipeForm');
    const recipeList = document.getElementById('recipes');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const recipeName = document.getElementById('recipeName').value;
      const ingredients = document.getElementById('ingredients').value;
      const instructions = document.getElementById('instructions').value;
      const photo = document.getElementById('photo').value;
  
      addRecipe(recipeName, ingredients, instructions, photo);
      form.reset();
    });
  
    function addRecipe(name, ingredients, instructions, photo) {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${name}</h3>
        <img src="${photo}" alt="${name}">
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
      `;
      recipeList.prepend(li);
    }
  });
  