function hideErrorMessage() {
  document.getElementById("item-error").setAttribute("class", "hidden");
  document.getElementById("shipping-error").setAttribute("class", "hidden");
  document.getElementById("payment-error").setAttribute("class", "hidden");
}

function neckLace(price) {
  return price = 120.99;
}

function bracelet(price) {
  return price = 100.99;
}

function earRings(price) {
  return price = 50.99;
}

window.addEventListener("load", function() {
  const form = document.querySelector("#items");
  const form2 = document.querySelector("#shipping");
  const form3 = document.querySelector("#payment");
  let jewelry;
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    hideErrorMessage();
   jewelry = document.querySelector('input[name="jewelry"]:checked').value;

    if (jewelry === "120.99") {
      document.querySelector("span#price").innerText = neckLace(price);
    } else if (jewelry === "100.99") {
      document.querySelector("span#price").innerText = bracelet(price);
    } else if (jewelry === "50.99") {
      document.querySelector("span#price").innerText = earRings(price);
    }
  });

  form.addEventListener("submit", function() {
    document.getElementById("shipping").removeAttribute("class")
  });

  form2.addEventListener("submit", function(event) {
    event.preventDefault();
    hideErrorMessage();
    const name = document.querySelector("input#fname").value;
    const address = document.querySelector("input#caddress").value;
    const email = document.querySelector("input#cemail").value;
    const city = document.querySelector("input#city").value;
    const state = document.querySelector("select#state").value;
    const zip = document.querySelector("input#zip").value;

    if (name && address && email && city && state && zip) {
      document.getElementById("payment").removeAttribute("class");
    } else {
      document.getElementById("shipping-error").removeAttribute("class");
    }
  });

  form3.addEventListener("submit", function(event) {
    event.preventDefault();
    hideErrorMessage();
    const cname = document.querySelector("input#cname").value;
    const ccnum = document.querySelector("input#ccnum").value;
    const expMonth = document.querySelector("input#expmonth").value;
    const expYear = document.querySelector("input#expyear").value;
    const cvv = document.querySelector("input#cvv").value;
    let beforeDiscount = parseInt(jewelry);
    let afterDiscount = beforeDiscount;
    if (cname && ccnum && expMonth && expYear && cvv) {
      document.getElementById("recipe").removeAttribute("class");
    } else {
      document.getElementById("payment-error").removeAttribute("class");
    }

    if (beforeDiscount >= neckLace(price)) {
      afterDiscount = beforeDiscount * 0.25; 
    } else if (beforeDiscount >= bracelet(price)) {
      afterDiscount = beforeDiscount * 0.25;
    } else if (beforeDiscount >= earRings(price)) {
      afterDiscount = beforeDiscount * 0.25;
    }

    document.querySelector("#price-minus-25").innerHTML =
    `with a suprise discount ${afterDiscount} was ${beforeDiscount}`; 
  });
});