import React from 'react';

export default function Edit(props) {
  const recipeBox = props.recipeBox;
  const selectedRecipe = props.selectedRecipe;
  let title = recipeBox.title[selectedRecipe];
  let ingredients = recipeBox.ingredients[selectedRecipe];
  let directions = recipeBox.directions[selectedRecipe];

  const handleChange = e => {
    return (title = e);
  };

  if (!props.showEdit) {
    return null;
  }

  console.log(ingredients);

  return (
    <div>
      <form action="#!">
        <label htmlFor="Title">
          Title:{' '}
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange.bind(this)}
          />
        </label>
      </form>
    </div>
  );
}
