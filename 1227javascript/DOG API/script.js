const dynamicSelect = document.getElementById('breeds');
const imageContainer = document.getElementById('dogImage');
const breedName = document.getElementById('breedName');

const breedImages = {};

function fetchBreedImage() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        const breeds = data.message;

        //Fetch nuotrauka su veisle
        for(let breed in breeds) {
            if(breeds.hasOwnProperty(breed)) {
                fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                .then(respone => respone.json())
                .then(imageData => {
                    const imageSrc = imageData.message;
                    breedImages[breed] = imageSrc;
                })
            }
        }
    })
};
fetchBreedImage();

function displayBreedImage(breed) {
    const imageSrc = breedImages[breed];
    if(imageSrc) {
        imageContainer.src = imageSrc;
        breedName.textContent = breed;
    }
}

dynamicSelect.addEventListener('change', function() {
    const selectBreed = dynamicSelect.value;
    displayBreedImage(selectBreed);
});

fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then(data => {
        const breeds = data.message;

        for(let breed in breeds) {
            if(breeds.hasOwnProperty(breed)) {
                const optionElement = document.createElement('option');
                optionElement.value = breed;
                optionElement.text = breed;
                dynamicSelect.appendChild(optionElement);
            }
        }
    });
