adminButtons.forEach((elm, ind) => {
  //click actions for all admin buttons
  elm.addEventListener("click", (e) => {
    adminButtons.forEach((elm, ind) => {
      elm.classList.remove("active");
    });
    let target = e.target;
    target.classList.add("active");

    getData(target.textContent);
    console.log(target.textContent);
    contextInfo.database = target.textContent;
  });
});

//global click event handler
document.body.addEventListener("click", (e) => {
  let target = e.target;
  let targetClass = target.className;
  callContextMenu(false, e.clientX, e.clientY);

  //update page init
  if (targetClass.includes("menu_item-update")) {
    renderUpdatePage(contextData[+contextInfo.lastindex]);
  }

  //add page init
  if (targetClass.includes("menu_item-add")) {
    renderUpdatePage(contextData[0], "add");
  }

  //delete page init
  if (targetClass.includes("menu_item-delete")) {
    console.log("called");

    deleteData(contextInfo.database + "/" + contextInfo.lastFieldID);
  }

  //update button handler
  if (targetClass.includes("edit-update")) {
    let targetParent = target.closest(".edit-cont");
    let contextInput = targetParent.querySelector("input").value;
    let contextInputLabel = targetParent
      .querySelector("label")
      .textContent.split(":")[0]
      .trim();

    console.log(contextInput, model);
    if (contextInputLabel.toLowerCase().includes("tags"))
      contextInput = contextInput.split(",").map((elm) => elm.trim());

    model[contextInputLabel] = contextInput;

    updateData(contextInfo.database + "/" + contextInfo.lastFieldID, model);
  }

  //add button handler
  if (targetClass.includes("edit-add")) {
    let targetParent = target.closest(".edit-window");

    let contextInput = targetParent.querySelectorAll("input");

    contextInput.forEach((elm, ind) => {
      let contextInputLabel = targetParent
        .querySelectorAll("label")
        [ind].textContent.split(":")[0]
        .trim();

      let value = elm.value;

      if (contextInputLabel.toLowerCase().includes("tags"))
        value = elm.value.split(",").map((elm) => elm.trim());

      model[contextInputLabel] = value;
    });

    model.creationDate = new Date().getTime();

    console.log(contextInput, model);

    updloadData(contextInfo.database + "/", model);
  }

  //closes update page
  if (targetClass.includes("edit-window")) {
    callUpdatePage(false);
  }
});

//contextmenu click handler
document.body.addEventListener("contextmenu", (e) => {
  let target = e.target;
  let targetClass = target.className;

  //sets the context data for delete/update menu
  if (targetClass.includes("table-desc")) {
    let index = target.dataset.index;
    let fieldID = target.dataset.id;
    contextInfo.lastFieldID = fieldID;
    contextInfo.lastindex = index;

    callContextMenu(true, e.clientX, e.clientY, "mod");
    e.preventDefault();
  }

  //sets the context table for adding data
  if (targetClass.includes("table-head")) {
    callContextMenu(true, e.clientX, e.clientY, "add");
    e.preventDefault();
  }
});
