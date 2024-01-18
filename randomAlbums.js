const allItems = document.querySelector('#allItems');

let allPhotos;

async function getPhotos(){
	const selectedValue = document.querySelector('#photos-select').value;

	allItems.innerHTML = '';

  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();
  allPhotos = photos;
 
	const photoNumbers = parseInt(selectedValue);

for(let i = 0; i < photoNumbers; i++){
  const el = generateItem(allPhotos[i]);
  allItems.appendChild(el);
 }
}

getPhotos();

		const selectPhotos = document.querySelector('#photos-select');
    selectPhotos.addEventListener('change', getPhotos);

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