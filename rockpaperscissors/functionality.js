let userScore =0;
let computerrScore=0;
const userScore_span = document.getElementById("userscore");
const computerScore_span=document.getElementById("compscore");
const scoreBoard_div=document.querySelector(".score-card");
const display_div=document.querySelector(".display");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
    const choices =['r','p','s'];
        return  choices[Math.floor(Math.random()*3)];  //returns a random number between
}
function convertToWord(letter){
    if(letter==="r")return "Rock";
    else if(letter=="p")return "Paper";
    return "Scissors";
}
function win(userchoice,computerchoice){
    userScore++;
    const userchoice_div=document.getElementById(userchoice);
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerrScore;
    const smallUseWord ="User".fontsize(3).sub();
    const smallCompWord ="Computer".fontsize(3).sub();
    display_div.innerHTML=`${convertToWord(userchoice)}${smallUseWord} beats ${convertToWord(computerchoice)}${smallCompWord}. You win! 🔥 `
    document.getElementById(userchoice).classList.add("green_glow");
    setTimeout(()=>{userchoice_div.classList.remove("green_glow")},500);
}
function looses(userchoice,computerchoice){
    computerrScore++;
    const userchoice_div=document.getElementById(userchoice);
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerrScore;
    const smallUseWord ="User".fontsize(3).sub();
    const smallCompWord ="Computer".fontsize(3).sub();
    display_div.innerHTML=`${convertToWord(userchoice)}${smallUseWord} loses to ${convertToWord(computerchoice)}${smallCompWord}. You lost! 😞 `
    document.getElementById(userchoice).classList.add("red_glow");
    setTimeout(()=>{userchoice_div.classList.remove("red_glow")},500);
}
function draws(userchoice,computerchoice){
    const userchoice_div=document.getElementById(userchoice);
    const smallUseWord ="User".fontsize(3).sub();
    const smallCompWord ="Computer".fontsize(3).sub();
    display_div.innerHTML=`${convertToWord(userchoice)}${smallUseWord} equals ${convertToWord(computerchoice)}${smallCompWord}. Its a tie! 🤨 `
    document.getElementById(userchoice).classList.add("gray_glow");
    setTimeout(()=>{userchoice_div.classList.remove("gray_glow")},500);
}
function game(userchoice)
{
    const computerchoice = getCompChoice();
    switch(userchoice+computerchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            looses(userchoice,computerchoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draws(userchoice,computerchoice);
            break;
    }
}
 function main(){
    rock_div.addEventListener('click',()=>game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"))
 }
 main()