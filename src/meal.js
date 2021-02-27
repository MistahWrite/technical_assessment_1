function nameMenuItem(menuItem) {
  return "Delicious " + menuItem;
}

function createMenuItem(menuItemName, menuItemPrice, menuItemType) {
  var menuItem = {
    name: menuItemName,
    price: menuItemPrice,
    type: menuItemType
  };

  return menuItem;
}

function addIngredients(menuIngredient, menuIngredients) {
  var isUnique = true;

  for (var i = 0; i < menuIngredients.length; i++) {
    if (menuIngredients[i] === menuIngredient) {
      isUnique = false;
    }
  }

  if (isUnique == true) {
    menuIngredients.push(menuIngredient);
  }
}

function formatPrice(menuItemPrice) {
  return "$" + menuItemPrice;
}
function decreasePrice (menuItemPrice) {
  return menuItemPrice * 0.90;
}
function createRecipe (menuItemTitle, menuItemIngredients, menuItemType) {
  let recipe = {
    title: menuItemTitle,
    ingredients: menuItemIngredients,
    type: menuItemType
  };

  return recipe;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


