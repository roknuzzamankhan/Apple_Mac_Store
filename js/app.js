//==================== Global Variable ====================//
const totalPrice = getId("total_price");
const totalPriceInt = getIdInt("total_price");
const finalPrice = getId("final_price");
const finalPriceFloat = getIdFloat("final_price");

//==================== Function for Get Id ====================//
function getId (idName) {
  const id = document.getElementById(idName);
  return id;
}

//==================== Function for Get Id convert to Int ====================//
function getIdInt (idNameInt) {
  const id = document.getElementById(idNameInt);
  const idInt = parseInt(id.innerText);
  return idInt;
}

//==================== Function for Get id convert to Float ====================//
function getIdFloat (idNameFloat) {
  const id = document.getElementById(idNameFloat);
  const idFloat = parseFloat(id.innerText);
  return idFloat;
}

//==================== Function for Extra Memory ====================//
function getExtraMemory(selectMemory, price) {
  switch (selectMemory) {
    case "8gb":
      getId("memory_8gb").classList = "selected";
      getId("memory_16gb").removeAttribute("class");
      getId("memory_cost").innerText = parseInt(price);
      break;
    case "16gb":
      getId("memory_16gb").classList = "selected";
      getId("memory_8gb").removeAttribute("class");
      getId("memory_cost").innerText = parseInt(price);
      break;
  }
  return parseInt(getId("memory_cost").innerText);
}

//==================== Function for Extra Storage ====================//
function getExtraStorage(selectStorage, price) {
  switch (selectStorage) {
    case "256gb":
      getId("storage_256gb").classList = "selected";
      getId("storage_512gb").removeAttribute("class");
      getId("storage_1tb").removeAttribute("class");
      getId("storage_cost").innerText = parseInt(price);
      break;
    case "512gb":
      getId("storage_512gb").classList = "selected";
      getId("storage_256gb").removeAttribute("class");
      getId("storage_1tb").removeAttribute("class");
      getId("storage_cost").innerText = parseInt(price);
      break;
    case "1tb":
      getId("storage_1tb").classList = "selected";
      getId("storage_256gb").removeAttribute("class");
      getId("storage_512gb").removeAttribute("class");
      getId("storage_cost").innerText = parseInt(price);
      break;
  }
  return parseInt(getId("storage_cost").innerText);
}

//==================== Function for Delivery charge ====================//
function getDeliveryCost(selectDelivery, price) {
  switch (selectDelivery) {
    case "freeDelivery":
      getId("free_delivery").classList = "selected";
      getId("charged_delivery").removeAttribute("class");
      getId("delivery_cost").innerText = parseInt(price);
      break;
    case "chargedDelivery":
      getId("charged_delivery").classList = "selected";
      getId("free_delivery").removeAttribute("class");
      getId("delivery_cost").innerText = parseInt(price);
      break;
  }
  return parseInt(getId("delivery_cost").innerText);
}



//==================== Function for total Price add and Final Price add ====================//
function getTotalAndFinalPrice() {
  totalPrice.innerText = totalPriceInt + getExtraMemory() + getExtraStorage() + getDeliveryCost();
  finalPrice.innerText = totalPrice.innerText;
}



//==================== For memory section buttons ====================//
document.getElementById("memory_8gb").addEventListener("click", function () {
  getExtraMemory("8gb", 0);
  getTotalAndFinalPrice();
});

document.getElementById("memory_16gb").addEventListener("click", function () {
  getExtraMemory("16gb", 180);
  getTotalAndFinalPrice();
});



//==================== For storage section buttons ====================//
document.getElementById("storage_256gb").addEventListener("click", function () {
  getExtraStorage("256gb", 0);
  getTotalAndFinalPrice();
});

document.getElementById("storage_512gb").addEventListener("click", function () {
  getExtraStorage("512gb", 100);
  getTotalAndFinalPrice();
});

document.getElementById("storage_1tb").addEventListener("click", function () {
  getExtraStorage("1tb", 180);
  getTotalAndFinalPrice();
});



//==================== For delivery section buttons ====================//
document.getElementById("free_delivery").addEventListener("click", function () {
  getDeliveryCost("freeDelivery", 0);
  getTotalAndFinalPrice();
});

document.getElementById("charged_delivery").addEventListener("click", function () {
  getDeliveryCost("chargedDelivery", 20);
  getTotalAndFinalPrice();
});


//==================== For apply promo code ====================//
document.getElementById("promo_code_button").addEventListener("click", function () {
  if (getId("promo_code_field").value == "rumman") {
    finalPrice.innerText = (parseFloat(finalPrice.innerText)) - (parseFloat(finalPrice.innerText)* 20) / 100;
    getId("promo_code_field").value = ""; 
    getId("promo_code_field").setAttribute("disabled", true);
  }
  else {
    finalPrice.innerText = finalPrice.innerText;
  }
});
