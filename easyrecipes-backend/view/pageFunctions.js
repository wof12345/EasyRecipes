function generateRenderpage(data) {
  console.log(data);

  renderPage.innerHTML = superTableGenerator(data);
}

//calls contextmenu
function callContextMenu(command, x, y, context) {
  if (context === "add")
    contextMenu.innerHTML = `<button class="menu_item menu_item-add">add</button>`;
  else if (context === "mod")
    contextMenu.innerHTML = `<button class="menu_item menu_item-delete">delete</button>
    <button class="menu_item menu_item-update">update</button>`;
  if (command) {
    contextMenu.style = `opacity: 1;pointer-events: all; top:${y}px; left:${x}px;`;
  } else
    contextMenu.style = `opacity: 0;pointer-events: none;top:${y}px; left:${x}px;`;
}

//renders updation page
function renderUpdatePage(contextItem, command) {
  let generatedPage = "";
  let dataModel = {};
  model = {};
  // console.log("te", contextItem);

  Object.entries(contextItem).map(([key, val] = entry) => {
    let conditionParam = key.toLowerCase();
    if (
      conditionParam !== "__v" &&
      conditionParam !== "_id" &&
      !conditionParam !== "date" &&
      !conditionParam.includes("likes") &&
      !conditionParam.includes("views") &&
      !conditionParam.includes("cart") &&
      !conditionParam.includes("history") &&
      !conditionParam.includes("clicked")
    ) {
      generatedPage += `<div class="edit-cont">
        <label class="edit" for="edit">${key} :</label>
        <input
          type="text"
          name="edit"
          id="edit-${key}"
          ${command === "add" ? `placeholder=${key}` : `value=${val}`}
        />
        ${
          command === "add" ? "" : `<button class="edit-update">update</button>`
        }
      </div>
    </div>`;
      dataModel[key] = "";
    } else if (
      (conditionParam.includes("likes") || conditionParam.includes("views")) &&
      command === "add"
    ) {
      dataModel[key] = 0;
    }
  });

  if (command === "add") {
    generatedPage += `<button class="edit-add">add</button>`;
  }

  editWindow.editCont.innerHTML = generatedPage;
  console.log("datamodel:", dataModel);

  if (command === "add") model = dataModel;
  callUpdatePage(true);
}

//views update page
function callUpdatePage(command) {
  if (command) editWindow.editCont.style = "display:flex";
  else editWindow.editCont.style = "";
}
