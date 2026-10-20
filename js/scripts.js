function neckLace(price) {
  return price
}

function bracelet(price) {
  return price
}

function earRings(price) {
  return price
}

window.addEventListener("load", function() {
  const form = document.querySelector("#items");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const jewelry = parseInt(document.querySelector('input[name="jewelry"]:checked').value);

    if (jewelry === "120.99") {
      document.querySelector("span#price").innerText = neckLace;
    } else if (jewelry === "100.99") {
      document.querySelector("span#price").innerText = bracelet;
    } else if (jewelry === "50.99") {
      document.querySelector("span#price").innerText = earRings;
    }
  });

  const form2 = document.querySelector("#shipping");
  form.addEventListener("submit", function() {
    document.getElementById("shipping").removeAttribute("class")
  });

  form2.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.querySelector("input#name").value;
    const address = document.querySelector("input#address").value;
    const email = document.querySelector("input#email").value;
    const city = document.querySelector("input#city").value;
    const state = document.querySelector("select#state").value;
    const zip = document.querySelector("input#zip").value;
  });

  const form3 = document.querySelector("#payment");
  form2.addEventListener("submit", function() {
    document.getElementById("payment").removeAttribute("class");
  });

  
});