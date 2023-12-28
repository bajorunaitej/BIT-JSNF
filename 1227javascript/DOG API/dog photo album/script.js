const breedSelectElement = document.querySelector('#breedSelect');
const dynamicAlbumElement = document.querySelector('#photoAlbum');

const breedsArray = [];

//1. Gauname visas šunų veisles

//2. Atavizduoti tas pačias veisles selecte per funkciją
//3. Sukurti šuns photo atvaizdavimo f-ją (pagal veislę)
//3.1 Susikurti dinaminį url, tam kad kreiptis į šuns veisles nuotraukas
//3.2 kreipiames į serverį pagala dinaminį url, norint gauti šuns veisles
//3.3 Kai gauname ats. dinamiškai generuoti html kodą. (dinaminis kodas yra genereuojamas pagal gautą nuotraukų masyvą)
//3.4 sugeneruotą kodą atvaizduoti tame elem., kuriama norime, kad atsirastų nuotraukos
//4. Pridėti event listenerį select'ui, kuris keis photo pagal veislę

//1.
fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((response) => parseAllBreeds(response.message)); //2.

function parseAllBreeds(breeds) {
    let dynamicHTML = '';

    for(let breed in breeds) {
        //breed - veislės pavadinimas
        //masyve esančios reikšmės - sub-veislė

        const subBreeds = breeds[breed];
        if(subBreeds.length === 0) {
            dynamicHTML += `<option>${breed}</option>`;
            breedsArray.push(breed);
        }
        else{
            for(let subBreed of subBreeds) {
            dynamicHTML += `<option>${subBreed} ${breed}</option>`;
            breedsArray.push(`${subBreed} ${breed}`);
            }
        }
    }
    parseDogImages(breedsArray[0]);
    breedSelectElement.innerHTML = dynamicHTML;
}

function parseDogImages(breed) {
    let dynamicURL = generateDynamicDogPhotoURL(breed);//3.1
    fetch(dynamicURL) //3.2
    .then((response) => response.json())
    .then((response) => generateDynamicDogPhotos(response.message))//3.3
}



function generateDynamicDogPhotoURL(breed) {
    //3.1
    let finalBreed = breed.split(" ").reverse().join("/");
    return `https://dog.ceo/api/breed/${finalBreed}/images`;
}

function generateDynamicDogPhotos(photosArray) { //3.4
    let dynamicHTML = '';
    for(let photo of photosArray) {
        dynamicHTML += `<div class="col-4 mx-auto">
        <img src="${photo}" 
        style="width: 100%;">
        </div>`
    }
    dynamicAlbumElement.innerHTML = dynamicHTML;
}

//4.
breedSelectElement.addEventListener('change', () => {
    parseDogImages(breedSelectElement.value);
});