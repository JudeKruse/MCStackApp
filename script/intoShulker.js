document.addEventListener("DOMContentLoaded", function() {
  const textFeild = document.getElementById("txtField");
  textFeild.addEventListener("input", function() {
    const value = textFeild.value;
    let shulkerDec = value / 1728;
    let shulkerBox = Math.floor(shulkerDec);//7
    let slotDec = shulkerDec - shulkerBox;
    let slot = slotDec * 1728;
    let itemDec = slot / 64;
    let item = Math.floor(itemDec);
    let sfItem = itemDec - item;
    let fItem = Math.floor(sfItem * 64);
    let result;
    let easterEgg;
    if (value < 999999999999999999999999) {
      result = shulkerBox + " Shulker Boxes " + item + " Slots " + fItem + " Items"
    } else {
      result = "Too Big Number";
      document.getElementById("easterEgg").textContent = "";
      let a = alert("What are you on?")
    }
    if (value > 99999) {
      easterEgg = "you are a hardcore youtuber, arent you?"
      document.getElementById("easter").textContent = easterEgg;
    } else {
      document.getElementById("easter").textContent = "";
    }
    if (value > 9999999999999) {
      document.getElementById("easterEgg").textContent = "Ohhhh... I get it now, You are planning to grind off Camera? well, good luck."
    } else {
      document.getElementById("easterEgg").textContent = ""
    }
    document.getElementById("rslt").textContent = result;
  });
});