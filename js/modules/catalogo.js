const catalogo = () => {
  const cardPrincipal = document.getElementById("card_principal");
  const cardPrincipal2 = document.getElementById("card_principal-2");
  const cardPrincipal3 = document.getElementById("card_principal-3");
  const cardPrincipal4 = document.getElementById("card_principal-4");
  const cardPrincipal5 = document.getElementById("card_principal-5");
  const cardPrincipal6 = document.getElementById("card_principal-6");
  const cardViewImg = document.querySelectorAll(".card-view__img");
  const cardViewImg2 = document.querySelectorAll(".card-view-item2__img");
  const cardViewImg3 = document.querySelectorAll(".card-view-item3__img");
  const cardViewImg4 = document.querySelectorAll(".card-view-item4__img");
  const cardViewImg5 = document.querySelectorAll(".card-view-item5__img");
  const cardViewImg6 = document.querySelectorAll(".card-view-item6__img");

  if (cardPrincipal.id === "card_principal") {
    cardViewImg.forEach((element) => {
      element.addEventListener("click", function () {
        const active = document.querySelector(".card-view__img--active");
        active.classList.remove("card-view__img--active");
        this.classList.add("card-view__img--active");
        cardPrincipal.src = this.src;
      });
    });
  }

  if (cardPrincipal2.id === "card_principal-2") {
    cardViewImg2.forEach((element) => {
        element.addEventListener("click", function () {
        const active = document.querySelector(".card-view-item2__img--active");
        active.classList.remove("card-view-item2__img--active");
        this.classList.add("card-view-item2__img--active");
        cardPrincipal2.src = this.src;
      });
    });
  }

  if (cardPrincipal3.id === "card_principal-3") {
    cardViewImg3.forEach((element) => {
      element.addEventListener("click", function () {
        const active = document.querySelector(".card-view-item3__img--active");
        active.classList.remove("card-view-item3__img--active");
        this.classList.add("card-view-item3__img--active");
        cardPrincipal3.src = this.src;
      });
    });
  }

  if (cardPrincipal4.id === "card_principal-4") {
    cardViewImg4.forEach((element) => {
      element.addEventListener("click", function () {
        const active = document.querySelector(".card-view-item4__img--active");
        active.classList.remove("card-view-item4__img--active");
        this.classList.add("card-view-item4__img--active");
        cardPrincipal4.src = this.src;
      });
    });
  }

  if (cardPrincipal5.id === "card_principal-5") {
    cardViewImg5.forEach((element) => {
      element.addEventListener("click", function () {
        const active = document.querySelector(".card-view-item5__img--active");
        active.classList.remove("card-view-item5__img--active");
        this.classList.add("card-view-item5__img--active");
        cardPrincipal5.src = this.src;
      });
    });
  }

  if (cardPrincipal6.id === "card_principal-6") {
    cardViewImg6.forEach((element) => {
      element.addEventListener("click", function () {
        const active = document.querySelector(".card-view-item6__img--active");
        active.classList.remove("card-view-item6__img--active");
        this.classList.add("card-view-item6__img--active");
        cardPrincipal6.src = this.src;
      });
    });
  }

};

export default catalogo;
