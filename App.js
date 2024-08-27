let boxes = document.querySelectorAll(".box");
let rebtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let btn = document.querySelector("#new-btn");
let turnO = true;
const winpattern = [
    [0,3,6], 
    [0,4,8], 
    [0,1,2], 
    [1,4,7],
    [2,5,8], 
    [2,4,6], 
    [3,4,5], 
    [6,7,8]  
];
let count =0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color ="black";
            turnO = false;
            count ++;
        }
        else{
            box.innerText="X";
            box.style.color ="#548687";
            turnO = true;
            count ++;
        }
        
        box.disabled =true;
       
        checkWinner();
       if(count ==9){
        checkDraw();
       }
    });
});
const resetGame = ()=>{
    turnO = true;
    enabledBox();
    msgcontainer.classList.add("hide");
    count =0;
}
const enabledBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disabledBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner)=>{
    msg.innerText = `"Congratulations, ${winner}! 🎉🏆 You’re the champion! 🙌
    🎊 Great job—ready to defend your title in the next game? 😄" `;
    msgcontainer.classList.remove("hide");
    disabledBox();
}
const showMessage = ()=>{
    msg.innerText = `"It's a tie! 😄 Let’s play again and see who wins this round! 🎉"  Press the button below "New Game"`;
    msgcontainer.classList.remove("hide");
    disabledBox();
}
const checkDraw = ()=>{
    for(let pattern of winpattern){
        let postVal1 = boxes[pattern[0]].innerText;
        let postVal2 = boxes[pattern[1]].innerText;
        let postVal3 = boxes[pattern[2]].innerText;
       if(postVal1 != "" && postVal2 != "" && postVal3 != ""){
        
         if(postVal1 !== postVal2 && postVal2 !== postVal3){
            showMessage();
        }
       }
    }
};

const checkWinner = ()=>{
    for(let pattern of winpattern){
        let postVal1 = boxes[pattern[0]].innerText;
        let postVal2 = boxes[pattern[1]].innerText;
        let postVal3 = boxes[pattern[2]].innerText;
       if(postVal1 != "" && postVal2 != "" && postVal3 != ""){
        if(postVal1 === postVal2 && postVal2 === postVal3){
            showWinner(postVal1);
        }
       }
    }
};
btn.addEventListener("click",resetGame);
rebtn.addEventListener("click",resetGame);