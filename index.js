let is = true;
const f = () => (!is ? (is = true) : (is = false));

console.log(f());
console.log(f());
console.log(f());

class Card {
  createCard(data) {
    const { title, description, image, price } = data;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <h1 class="card__title">${title}</h1>
    <img
      src=${image}
      alt=${title}
      srcset=""
      class="card__image"
    />
    <p class="card__description">${description}</p>
    <span class="card__price">${price} ₽</span>
    `;
    return card;
  }
}

class CardList {
  constructor(card, container, select, data) {
    this.select = select;
    this.card = card;
    this.container = container;
    this.data = data;

    this.select.addEventListener("change", this.sort.bind(this));
  }

  render() {
    for (let item of this.data) {
      container.insertAdjacentElement("beforeend", card.createCard(item));
    }
  }

  clearCarrdList() {
    // while (this.container.firstChild) {
    //   this.container.removeChild(this.container.firstChild);
    // }
    this.container.innerHTML = "";
  }

  sort() {
    let value = this.select.value;
    if (value === "up") {
      this.data.sort((a, b) => {
        return a.price - b.price;
      });
      this.clearCarrdList();
      this.render();
    }

    if (value === "down") {
      this.data.sort((a, b) => {
        return b.price - a.price;
      });
      this.clearCarrdList();
      this.render();
    }
  }
}

const select = document.querySelector(".select");
const container = document.querySelector(".card-list");
const card = new Card();
const cardList = new CardList(card, container, select, DATA);

cardList.render();
