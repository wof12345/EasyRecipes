async function getData(context, containerQuery, search) {
  fetch(`http://localhost:3000/${context}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      contextData = data.data.items;

      if (search) {
        searchResult = contextData;
        populateResult();
      } else if (context.includes("recipes"))
        if (containerQuery) updateRecipeContainer(contextData);
        else renderRecipePage(contextData);
    })
    .catch((err) => {
      throw err;
    });
}

async function updateData(context, data) {
  fetch(`http://localhost:3000/${context}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      getData(contextInfo.database);
    })
    .catch((err) => {
      throw err;
    });
}

async function uploadData(context, data) {
  fetch(`http://localhost:3000/${context}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      throw err;
    });
}

async function deleteData(context) {
  fetch(`http://localhost:3000/${context}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      getData(contextInfo.database);
    })
    .catch((err) => {
      throw err;
    });
}
