const buttonElement = document.querySelector(".button");
const ulElement = document.querySelector(".ul");

const getImage = () => {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
     .then((data) => {
      const liElement = document.createElement("li");
      liElement.innerHTML = `<div id='container'>
            <div class='container'>
            <div class='img_div'><img src='${data.img}'/><div>
            
            </div>
            </div>`;
               ulElement.appendChild(liElement);
    })
    .catch((err) => console.warn(err));
};
buttonElement.addEventListener("click", getImage);