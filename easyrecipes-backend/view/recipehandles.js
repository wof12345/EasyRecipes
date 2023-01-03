let editUpdateAddAtrributeCollectionQuery = function (key, val, command) {
  console.log(val);

  return `<div class="edit-cont">
  <label class="edit" for="edit">attributeName :</label>
  <div class="collection">
    <input type="text" name="edit" id="edit-${key}" ${
    command === "add" ? `placeholder=""` : `value=${val}`
  }/>
  </div>
</div>

<div class="edit-cont">
  <label class="edit" for="edit">attributeValue :</label>
  <div class="collection">
    <input type="text" name="edit" id="edit-${key}" ${
    command === "add" ? `placeholder=""` : `value=${val}`
  }/>
  </div>
</div>`;
};

let editUpdateAddIngredientCollectionQuery = function (key, val, command) {
  console.log(val);

  return `<div class="edit-cont">
  <label class="edit" for="edit">ingredientID :</label>
  <div class="collection">
    <input type="text" name="edit" id="edit-${key}" ${
    command === "add" ? `placeholder=""` : `value=${val}`
  }/>
  </div>
</div>

<div class="edit-cont">
  <label class="edit" for="edit">ingredientName :</label>
  <div class="collection">
    <input type="text" name="edit" id="edit-${key}" ${
    command === "add" ? `placeholder=""` : `value=${val}`
  }/>
  </div>
</div>

<div class="edit-cont">
  <label class="edit" for="edit">quantity :</label>
  <div class="collection">
    <input type="text" name="edit" id="edit-${key}" ${
    command === "add" ? `placeholder=""` : `value=${val}`
  }/>
  </div>
</div>

<div class="edit-cont">
  <label class="edit" for="edit">price :</label>
  <div class="collection">
    <input type="text" name="edit" id="edit-${key}" ${
    command === "add" ? `placeholder=""` : `value=${val}`
  }/>
  </div>
</div>`;
};

let editUpdateAddTagCollectionQuery = function (key, val, command) {
  console.log(val);

  return `<div class="edit-cont">
  <label class="edit" for="edit">tag :</label>
  <div class="collection">
    <input type="text" name="edit" id="edit-${key}" ${
    command === "add" ? `placeholder=""` : `value=${val}`
  }/>
  </div>
</div>`;
};

function recipeHandle(field) {
  let genHtml = "";
  console.log(model);

  genHtml += `<h1>${field}</h1>`;
  if (field === "attributeInfo") {
    genHtml += editUpdateAddAtrributeCollectionQuery("", "", "add");
  } else if (field === "ingredients") {
    genHtml += editUpdateAddIngredientCollectionQuery("", "", "add");
  } else if (field === "recipeTags") {
    genHtml += editUpdateAddTagCollectionQuery("", "", "add");
  }
  genHtml += `<button
  class="add-update" data-field="${field}"> add </button>`;
  editWindow.recipeHandleWindow.innerHTML = genHtml;
}
