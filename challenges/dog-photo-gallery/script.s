const liElement = document.querySelector("li");
const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", getImage);

function getImage(){
  liElement.innerHTML = "";
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
     .then((image) => {
      const imageElement = document.createElement("img");
      imageElement.src = image.message;
      liElement.appendChild(imageElement);
    })
    .catch((error) => console.warn(error));
}