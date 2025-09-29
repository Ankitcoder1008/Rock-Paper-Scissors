let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx=Math.floor(Math.random()*3);//0,1,2(0-2)ki range me number deag
    return options[ranIdx];
}
const drawGame = () =>{
    msg.innerText="DRAW";
    msg.style.backgroundColor="#081b31";
    flashMsg();
}
const showWinner= (userWin)=>{
    if(userWin){
        userScore++;
        //console.log(userScore);
        userScorePara.innerText=userScore;
        msg.innerText="You win";
        msg.style.backgroundColor="green";
        
    }else{
        compScore++;
        //console.log(compScore);
        msg.innerText="You loose"
        msg.style.backgroundColor="red";
        compScorePara.innerText=compScore;
    }
    flashMsg();
}
const playGame = (userChoice) =>{
    console.log(`User choice is ${userChoice}`);
    //generate computer choice and match them with userChoice
    const compChoice=gencompChoice();
    console.log("Computer choice is ",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            //rock me draw hoga to we check for paper and scissors
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            //compChoice possible only rock and scissors
            userWin = compChoice === "scissors" ? false:true;
        }else{
            //compChoice rock, paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
        
    });
});

const flashMsg = () => {
    msg.classList.remove("flash");
    void msg.offsetWidth; // Trick to restart animation
    msg.classList.add("flash");
};