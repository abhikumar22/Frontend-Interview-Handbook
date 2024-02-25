{/* <div class="meme">
<div class="name">
    hello
</div>
<img src="https://preview.redd.it/up4qqot4nmkc1.png?width=108&crop=smart&auto=webp&s=34ad90fca293d580718fc05fd4d2e00cd3b4c65a"
    class="img_url" />
</div> */}
const endpoint = "https://meme-api.com/gimme/10";
let isBusy = false;

doApiCall()

// let memesDataList = [];

window.addEventListener('scroll', checkIfEndReached);
function isEndReachedOnpage() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        return true
    }
    return false
}
function checkIfEndReached() {
    const isPageScrollEnd = isEndReachedOnpage();
    if (isPageScrollEnd) {
        doApiCall();
    }
}

async function doApiCall() {
    if(!isBusy){
        isBusy = true;
        let res = await fetch(endpoint);
        res = await res.json();
    
        res.memes.forEach(element => {
    
            let kk = document.createElement('div');
            kk.className = 'name';
            kk.textContent = element.title;
    
            let kkk = document.createElement('img');
            kkk.className = 'img_url';
            kkk.src = element.preview[0];
    
            let k = document.createElement('div');
            k.className = 'meme';
            k.appendChild(kk);
            k.appendChild(kkk);
    
            document.getElementsByClassName('Meme_Wrapper')[0].appendChild(k);
    
        });
        isBusy = false;
    }
}