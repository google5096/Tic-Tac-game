const boxes = document.querySelectorAll('.box');
const newBtn = document.querySelector('.new-btn');
const resetBtn = document.querySelector('.reset-btn');
const main = document.querySelector('main');
const winner=document.querySelector('.winner');
const header=document.querySelector('.header');
let turn = true;

const WinnerList = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disableBtn=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const enableBtn=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}

const checkWinner = () => {
    console.log('Click Btn is clicked!');
    WinnerList.forEach(win => {
        const box1 = win[0];
        const box2 = win[1];
        const box3 = win[2];
        // console.log(box1,box2,box3)
        // console.log(boxes[box1].innerHTML,boxes[box2].innerHTML,boxes[box3].innerHTML)
        let pos1=boxes[box1].innerHTML;
        let pos2=boxes[box2].innerHTML;
        let pos3=boxes[box3].innerHTML;

    if(pos1 !='' && pos2!='' && pos3!=''){
        if(pos1===pos2 && pos2===pos3){
            console.log('Winner');
            winner.innerHTML=`<h3> Wow ! Winner is ${pos1}</h3>` 
            winner.classList.remove('hide')
            header.style.height='100vh';
            header.style.width='100vw';
            winner.style.backgroundColor='#ffff'
            header.style.backgroundColor='#3887BE'
            disableBtn();
        }
    }
    });
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn) {
            box.innerHTML = 'X';
            turn = false;
        } else {
            box.innerHTML = 'O';
            turn = true;
        }
        checkWinner();
        box.disabled = true;
        // clickBtn();
    });
});

newBtn.addEventListener('click',()=>{
    winner.classList.add('hide')
    boxes.forEach((box)=>{
        box.innerHTML=''
    })
    enableBtn();
    header.style.height='20vh';
    header.style.width='20vw';
    header.style.backgroundColor='#ffff'
})

resetBtn.addEventListener('click', () => {
    boxes.forEach((box)=>{
        box.innerHTML=''
    })
});

