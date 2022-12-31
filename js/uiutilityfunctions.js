function updateRecipeContainer(data) {
  let generatedRecipes = "";
  data.forEach((element) => {
    generatedRecipes += recipeItemModel(element);
  });

  recipeContainer.innerHTML = generatedRecipes;
}
