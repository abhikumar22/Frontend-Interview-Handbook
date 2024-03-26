import { useRef } from "react";

const App = () => {

    const listRef = useRef({});
    // console.log("*** list",list);

    const createDiv = () => {
        const context = document.createElement('div');
        context.style.height = "100px";
        context.style.width = "100px";
        context.style.backgroundColor = "rgba(0,0,0,0)";
        context.style.position = "fixed"
        context.style.top = "0"
        context.style.right = "0"
        // context.style.flex =1
        context.id = "toast_body";

        document.body.appendChild(context);
    }

    const createEle = (color,currText) => {
        let name = Date.now();
        const context = document.createElement('div');
        context.style.height = "100px";
        context.style.width = "100px";
        context.style.backgroundColor = color;
        context.style.padding = "10px"
        context.style.margin = "10px"
        context.innerHTML = currText
        context.onclick = function() {
            closeToast();
        }


        context.id = name;
        const closeToast = () =>{
            document.getElementById(name).outerHTML = "";
        }
        context.onmouseenter = function () {
            clearTimeout(listRef.current[name].timeRef);
            let diff = Math.abs((Date.now() - listRef.current[name].id) - 4000)
            listRef.current[name].diff = diff
        }
        context.onmouseleave = function () {
            let timeOut = listRef.current[name].diff;
            listRef.current[name].timeRef = setTimeout(() => {
                document.getElementById(name).outerHTML = "";
            }, timeOut)
        }

        document.getElementById('toast_body').appendChild(context);
        let temp = {
            id: name,
            timeRef: null
        };
        temp.timeRef = setTimeout(() => {
            closeToast()
        }, 4000)
        listRef.current[name] = { ...listRef.current, ...temp }

    }

    const toasti = function () {
        createDiv();

        toasti.error = function (txt) {
            // console.log("*****",txt);
            createEle('red',txt);
        }
        toasti.info = function (txt) {
            // console.log("*****",txt);
            createEle('blue',txt);
        }
        toasti.success = function (txt) {
            // console.log("*****",txt);

            createEle('green',txt);
        }
        return toasti
    }
    return { toast: toasti() }
    // return null

}

export default App;