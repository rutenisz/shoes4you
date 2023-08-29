const SHOES_URL = "https://64ecaea3f9b2b70f2bfac871.mockapi.io/product/";

const deleteBtn = document.getElementById("delete-btn");

const url = new URL(window.location.href); // leidzia issitruakti parametrus is url
const shoeId = url.searchParams.get("shoesId");

const addShoesToScreen = (shoes) => {
  const title = document.getElementById("title");
  title.innerHTML = shoes.title;

  const description = document.getElementById("description");
  description.innerHTML = shoes.description;

  const price = document.getElementById("price");
  price.innerHTML = shoes.price;

  const location = document.getElementById("location");
  location.innerHTML = shoes.location;

  const id = document.getElementById("id");
  id.innerHTML = shoes.id;

  const img = document.getElementById("shoes-image");
  img.src = shoes.img;
};

const getShoes = async () => {
  try {
    const response = await fetch(SHOES_URL + shoeId);
    const shoes = await response.json();
    return shoes;
  } catch (err) {
    return false;
  }
};

const deleteShoes = async () => {
  try {
    const response = await fetch(SHOES_URL + shoeId, {
      method: "DELETE",
    });

    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

const shoesDeleted = (data) => {
  const infoMessage = document.getElementById("info-msg");
  if (data) {
    infoMessage.innerHTML = "Shoes were deleted.";

    setTimeout(() => {
      window.location.replace("./index.html");
    }, 4000);
  } else {
    infoMessage.innerHTML = "An error occured, shoes weren't deleted.";
  }
};

const onClickDeleteBtn = async () => {
  try {
    const response = await deleteShoes();
    shoesDeleted(response);
  } catch (err) {
    console.log(err);
  }
};

deleteBtn.addEventListener("click", onClickDeleteBtn);

const displayShoes = async () => {
  const shoe = await getShoes();
  shoe && addShoesToScreen(shoe);
};

displayShoes();
