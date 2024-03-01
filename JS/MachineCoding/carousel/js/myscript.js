let currentSelectedImageIndx = 0;
const imageUrls = [
    "https://external-preview.redd.it/GuaqcyUmY7VsyQKcvJgAu9yd2_vh7F_GVjQDSD7REqI.png?width=108&crop=smart&auto=webp&s=e8ddcd79bbef901e8863d19a348790958f0a1f06",
    "https://preview.redd.it/n7d5z6j4amlc1.png?width=216&crop=smart&auto=webp&s=7aa5d13f3c21a2c99c5f8c88d666cb27625632c9",
    "https://preview.redd.it/jlgiy9fqzmjc1.png?width=216&crop=smart&auto=webp&s=e2f3390e2a8034dabf16a31768b555516437ee8c",
    "https://preview.redd.it/pdzzntnvtjlc1.png?width=216&crop=smart&auto=webp&s=4c538cfd504189d1584e392a3e82c0762be86666",
];
const totalImages = imageUrls.length;

let element = document.createElement('img');
element.width = 200
element.height = 100
element.src = imageUrls[currentSelectedImageIndx];

document.getElementsByClassName("caraousel")[0].appendChild(element);
updatePage();

function updatePage() {
    let updatedText = `Showing ${currentSelectedImageIndx + 1} of ${totalImages}`;
    let ref = document.getElementsByClassName("image_details")[0];
    if (ref.childNodes.length >= 1) {
        ref.innerText = updatedText
    } else {
        txt = document.createTextNode(updatedText);
        ref.appendChild(txt);
    }
}

function updateImageUrl() {
    document.getElementsByClassName("caraousel")[0].children[0].src = imageUrls[currentSelectedImageIndx];
}

function updateImageandPage(){
    updateImageUrl();
    updatePage();
}


document.getElementById('next').addEventListener('click', function handleClick() {
    currentSelectedImageIndx = currentSelectedImageIndx + 1
    if (!(currentSelectedImageIndx < totalImages)) {
        currentSelectedImageIndx = 0;
    }
    updateImageandPage();
})


document.getElementById('previous').addEventListener('click', function handleClick() {
    currentSelectedImageIndx = currentSelectedImageIndx - 1
    if (currentSelectedImageIndx < 0) {
        currentSelectedImageIndx = totalImages - 1;
    }
    updateImageandPage();
})