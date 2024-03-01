const data = [
    {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }
];
let currentSelected = null;
const containerRef = document.getElementsByClassName('container')[0];
data.forEach((currData, indx) => {
    const { name, description } = currData;
    let accodianRef = document.createElement("div");
    accodianRef.className = 'accodian';
    accodianRef.id = indx;


    let nameRef = document.createElement("div");
    nameRef.className = 'name';
    nameRef.innerText = name;

    let descRef = document.createElement("div");
    descRef.className = 'desc';
    descRef.innerText = description;


    accodianRef.appendChild(nameRef);
    accodianRef.appendChild(descRef);


    containerRef.appendChild(accodianRef)
    accodianRef.addEventListener("click", () => {
        if (currentSelected === indx) {
            document.getElementsByClassName('container')[0].children[currentSelected].children[1].style.display = 'none'
            currentSelected = null;
            return;
        }
        if (currentSelected != null) {
            document.getElementsByClassName('container')[0].children[currentSelected].children[1].style.display = 'none'
        }
        currentSelected = indx;
        document.getElementsByClassName('container')[0].children[currentSelected].children[1].style.display = 'block'
    })
});


