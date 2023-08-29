const shoesWrapper = document.getElementById("shoes");

const buildShoesCard = (shoe) => {
  const wrapper = document.createElement("a");
  wrapper.setAttribute("class", "shoes-card-wrapper");
  wrapper.href = "./product.html?shoeId=" + shoe.id;

  const title = document.createElement("h1");
  title.innerHTML = shoe.title;

  const price = document.createElement("h3");
  price.innerHTML = shoe.price;

  const image = document.createElement("img");
  image.setAttribute("class", "shoes-image");
  image.src = shoe.img;

  wrapper.append(image);
  wrapper.append(price);
  wrapper.append(title);

  return wrapper;
};

const getAllShoes = async () => {
  const response = await fetch(
    "https://64ecaea3f9b2b70f2bfac871.mockapi.io/product"
  );

  const shoes = await response.json();

  shoes
    .sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    })
    .forEach((shoe) => {
      const card = buildShoesCard(shoe);
      shoesWrapper.append(card);
    });
};

getAllShoes();
