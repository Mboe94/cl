document.addEventListener("click", (event) => {
  const clicked = event.target.id || event.target.className;
  if (event.target.innerHTML == "Læs mere...") {
    const containerElement = event.target.closest(".fordele_div");
    if (containerElement) {
      containerElement.style.gridTemplateRows = "1fr";
      event.target.innerHTML = "Læs mindre...";
    }
  } else if (event.target.innerHTML == "Læs mindre...") {
    const containerElement = event.target.closest(".fordele_div");
    if (containerElement) {
      containerElement.style.gridTemplateRows = "0fr";
      event.target.innerHTML = "Læs mere...";
    }
  }
});

document.addEventListener("click", (event) => {
  const clicked = event.target.id || event.target.className;
  if (event.target.innerHTML == "Læs mere...") {
    const containerElement = event.target.closest(".læsmere_container2");
    if (containerElement) {
      containerElement.style.gridTemplateRows = "1fr";
      event.target.innerHTML = "Læs mindre...";
    }
  } else if (event.target.innerHTML == "Læs mindre...") {
    const containerElement = event.target.closest(".læsmere_container2");
    if (containerElement) {
      containerElement.style.gridTemplateRows = "0fr";
      event.target.innerHTML = "Læs mere...";
    }
  }
});

class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="hero_main">
          <header class="main_header">
            <input type="checkbox" id="menu-check" />
            <label class="icons" for="menu-check">
              <i class="bx bx-menu" id="menu-icon"></i>
              <i class="bx bx-x" id="close-icon"></i>
            </label>
            <a href=""><img id="navbar_icon_logo" src="pics/AllWhite.png" alt="" /></a>
            <nav class="navbar">
              <a href="">CORELINES</a>
              <a href="">Produkter</a>
              <a href="">Kontakt</a>
              <a href=""><img id="navbar_cart_logo" src="pics/1cart.png" alt="" /></a>
            </nav>
          </header>
        
          <div class="velkommen_div">
            <h1 id="velkommen_txt">VELKOMMEN TIL CORELINES</h1>
            <h2 id="elevatingthecore_txt">ELEVATING THE CORE</h2>
            <a style="--clr: #2eff7b" class="btn" id="to-shop-btn">SHOPPEN</a>
          </div>
        </div>`;
  }
}

customElements.define("hero-header", Hero);
