const firstRow = document.querySelector('.first-row');
const secondRow = document.querySelector('.second-row');
const thirdRow = document.querySelector('.third-row');

async function getPhotos(){
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();
  const firstPhoto = photos[4500];
  console.log(firstPhoto);

  const imgElement = document.createElement('img');
  imgElement.src = firstPhoto.url;
  thirdRow.appendChild(imgElement);

  firstRow.textContent = firstPhoto.id;
  secondRow.innerHTML = firstPhoto.title;
  //thirdRow.innerHTML = firstPhoto.url;
}
getPhotos();