const shoesFormBtn = document.getElementById("shoes-btn");

const getShoesObject = () => {
  const shoesTitle = document.getElementById("shoes-title").value;
  const shoesPrice = document.getElementById("shoes-price").value;
  const shoesImg = document.getElementById("shoes-image");
  const shoesDescription = document.getElementById("shoes-description").value;
  const shoesLocation = document.getElementById("shoes-location").value;
  const shoesId = document.getElementById("shoes-location").value;

  const validateInputForm = (
    shoesTitle,
    shoesPrice,
    shoesImg,
    shoesDescription,
    shoesLocation,
    shoesId
  ) => {
    const urlRegex =
      /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

    if (!shoesTitle) {
      throw new Error("Input is empty");
    }

    if (!shoesPrice) {
      throw new Error("Input is empty");
    }

    if (!urlRegex.test(shoesImg)) {
      throw new Error("Error link");
    }

    if (!shoesDescription) {
      throw new Error("Input is empty");
    }

    if (!shoesLocation) {
      throw new Error("Input is empty");
    }

    if (!shoesId) {
      throw new Error("Input is empty");
    }
  };

  validateInputForm(
    shoesTitle,
    shoesPrice,
    shoesImg,
    shoesDescription,
    shoesLocation,
    shoesId
  );

  const shoe = {
    title: shoesTitle,
    price: shoesPrice,
    img: shoesImg,
    description: shoesDescription,
    location: shoesLocation,
    id: shoesId,
  };

  return shoe;
};

const insertShoes = async (shoes) => {
  try {
    const response = await fetch(
      "https://64ecaea3f9b2b70f2bfac871.mockapi.io/product",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shoes),
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

const shoesFormInserted = (data) => {
  const messageWrapper = document.getElementById("response-message");
  if (data) {
    messageWrapper.innerHTML = "Shoes were inserted.";

    setTimeout(() => {
      window.location.replace("./index.html");
    }, 4000);
  } else {
    console.log("err", err);
    messageWrapper.innerHTML = "An error occured, shoes weren't inserted.";
  }
};

shoesFormBtn.addEventListener("click", async () => {
  const shoe = getShoesObject();
  const data = await insertShoes(shoe);
  shoesFormInserted(data);
});
