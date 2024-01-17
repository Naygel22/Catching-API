const firstColumn = document.querySelector('.first-column');
const secondColumn = document.querySelector('.second-column');
const thirdColumn = document.querySelector('.third-column');

async function getPhotos(){
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();
  /* const firstPhoto = photos[4500];
  console.log(firstPhoto); */
  
  const photosArray = photos.slice(0,5);
  console.log(photosArray);

for(let i = 0; i < photosArray.length; i++){
  const imgElement = document.createElement('img');
  imgElement.src = photosArray[i].url;
  thirdColumn.appendChild(imgElement);

  firstColumn.textContent += photosArray[i].id;
  secondColumn.innerHTML += photosArray[i].title;
 }


  
  //thirdRow.innerHTML = firstPhoto.url;
}
getPhotos();