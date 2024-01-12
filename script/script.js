document.addEventListener("DOMContentLoaded", function() {
  const textField = document.getElementById("myTextField");




  textField.addEventListener("input", function() {
    const value = textField.value;
    const ch = document.getElementById("myCheckbox");

    let uncheck;
    if (ch.checked) {
      uncheck = 16
    } else {
      uncheck = 64
    }

    if (value > 100000) {
      document.getElementById("hry").textContent = "you are a hardcore youtuber, arent you?";
    } else {
      document.getElementById("hry").textContent = "";
    }


    let stackDec = value / uncheck;
    let number = Math.floor(stackDec);
    let remain = stackDec - number;
    remain = remain * uncheck;
    let result;

    if (value >= uncheck) {
      result = number + " stack " + remain + " items";
    } else {
      result = value + " items";
    }

    document.getElementById("output").textContent = result;
  });
});