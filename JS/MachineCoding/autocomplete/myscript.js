const baseUrl = `https://api.postalpincode.in/pincode`;

document.getElementById("searchInput").addEventListener('input', debounce(function (e) {
    myValue = e.target.value;
    fetchData(myValue);
}));

function debounce(func, timeout = 500){
    console.log("hello")
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }


fetchData = async (searchText) => {
    console.log("hello")
    const searchUrl = `${baseUrl}/${searchText}`;
    const response = await fetch(searchUrl);
    const apiData = await response.json();
    console.log(apiData[0].PostOffice);
    renderData(apiData[0].PostOffice);
}

renderData = (data) => {
    if (data && data.length > 0) {
        document.getElementById("autocomplete_container").innerHTML = '';
        data.map((currData, indx) => {
            var graph = document.createElement("div");
            graph.id = `product_${currData.indx}`;
            graph.innerHTML = currData.Name;
            document.getElementById("autocomplete_container").appendChild(graph);
        })
    }
}

const result = [

]