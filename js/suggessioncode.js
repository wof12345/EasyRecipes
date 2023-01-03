let suggestText = document.querySelector(`.suggested`);
let suggestContainer = document.querySelector(`.cards-suggested`);

if (isLoggedIn) updateSuggessions();

function updateSuggessions() {
  let tagArray = [];
  currentUser.userClickedTags.forEach((element) => {
    tagArray.push({ tag: element.tag });
  });
  let queryObj = { recipeTags: { $elemMatch: { $in: tagArray } } };
  uploadData(`recipesbyobj`, queryObj, true);
}

function populateSuggession() {
  let genHtml = "";
  suggessionItems.forEach((elm) => {
    genHtml += recipeItemModel(elm);
  });
  suggestContainer.innerHTML = genHtml;
}
