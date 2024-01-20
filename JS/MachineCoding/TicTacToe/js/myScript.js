const USER = {
    CROSS: "CROSS",
    CIRCLE: "CIRCLE",
};
let currUser = USER.CIRCLE;
const boxRange = 9;
let res = [...new Array(boxRange).fill("")];
const parentRef = document.getElementById('Wrapper');
const boxRef = document.getElementById('boxWrapper');

const addInitialDiv = () => {
    let newBox = document.createElement('div');
    newBox.className = 'player'
    newBox.innerHTML = `Current Player: ${currUser}`;
    parentRef.appendChild(newBox);
}
function checkMatching(type) {
    const isDiagonal = !!(
        (res[0] === type && res[4] === type && res[8] === type) ||
        (res[2] === type && res[4] === type && res[6] === type)
    );

    const isRow = !!(
        (res[0] === type && res[1] === type && res[2] === type) ||
        (res[3] === type && res[4] === type && res[5] === type) ||
        (res[6] === type && res[7] === type && res[8] === type)
    );

    const isCol = !!(
        (res[0] === type && res[3] === type && res[6] === type) ||
        (res[1] === type && res[4] === type && res[7] === type) ||
        (res[2] === type && res[5] === type && res[8] === type)
    );
    const isWon = !!(isDiagonal || isRow || isCol);
    if (isWon) {
        alert(`${type} won the match`);
        resetGame();
        return true;
    }
    const isEmpty = res.filter((data) => data != "");
    if (!isWon && isEmpty.length === 9) {
        alert("match Draw");
        resetGame();
    }
};
function resetGame() {
    currUser = USER.CIRCLE;
    res = [...new Array(boxRange).fill("")];
    res.map((ele,indx)=>{
        boxRef.children[indx].innerHTML = '';
    })

}
function toggleUser() {
    if (currUser === USER.CIRCLE) {
        currUser = USER.CROSS;
    } else {
        currUser = USER.CIRCLE;
    }
    updateCurrPlayer(currUser);
}

function handleClick(data) {
    const keyId = data.target.id;
    if(res[keyId]!==''){
        return;
    }
    boxRef.children[keyId].innerHTML = currUser === USER.CIRCLE ? "O" : "X";
    res[keyId] = currUser;
    let checkk = checkMatching(USER.CIRCLE);
    if (!checkk) {
        checkMatching(USER.CROSS);
    }
    toggleUser();
}
function updateCurrPlayer(data) {
    document.getElementsByClassName('player')[0].innerHTML = data;
}

res.map((data, indx) => {
    let newBox = document.createElement('div');
    newBox.id = indx;
    newBox.className = 'box'
    boxRef.appendChild(newBox);
    boxRef.onclick = handleClick;
})
addInitialDiv();