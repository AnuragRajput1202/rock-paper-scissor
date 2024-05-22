let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".btn");
let your_score=document.querySelector("#your-score");
let comp_score=document.querySelector("#comp-score");
let msg=document.querySelector(".msg");

const showScore=(you, comp)=>{
    your_score.innerText=you;
    comp_score.innerText=comp;
}

const showWinner=(winner)=>{
    msg.innerText=winner;
}

const playGame=(user)=>{
    let options=["rock","paper","scissor"];
    let comp=options[Math.floor(Math.random()*3)];
    if(comp=="rock"){
        if(user=="rock"){
            showWinner("It's a Tie");
        }else if(user=="paper"){
            showWinner("Paper beats Rock");
            userScore+=1;
        }else{
            showWinner("Rock beats Scissors");
            compScore+=1;
        }
    }
    else if(comp=="paper"){
        if(user=="paper"){
            showWinner("It's a Tie");
        }else if(user=="scissor"){
            showWinner("Scissors beats Paper");
            userScore+=1;
        }else{
            showWinner("Paper beats Rock");
            compScore+=1;
        }
    }
    else{
        if(user=="scissor"){
            showWinner("It's a Tie");
        }else if(user=="rock"){
            showWinner("Rock beats scissors");
            userScore+=1;
        }else{
            showWinner("Scissors beats Paper");
            compScore+=1;
        }
    }
    showScore(userScore,compScore);
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});