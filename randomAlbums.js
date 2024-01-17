const allItems = document.querySelector('#allItems');

let allPhotos;

async function getPhotos(){
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();
  allPhotos = photos;
  /* const firstPhoto = photos[4500];
  console.log(firstPhoto); */
  
  const photosArray = photos.slice(0,5);
  console.log(photosArray);

for(let i = 0; i < photosArray.length; i++){
  const el1 = generateItem(photosArray[i]);
  allItems.appendChild(el1);
 }
}
getPhotos();


function generateItem(element) {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');

  const col1 = document.createElement('div');
  col1.classList.add('col1');

  const col2 = document.createElement('div');
  col2.classList.add('col2');

  const img = document.createElement('img');
  img.src = element.url;

  const title = document.createElement('div');
  title.textContent = element.title;
  
  col1.appendChild(img);
  col2.appendChild(title);
  
  gridContainer.appendChild(col1);
  gridContainer.appendChild(col2);

console.log(element);
  return gridContainer;
}