
let q=Math.floor((Math.random()*3));
let refer=["stone","paper","scissors"];
let compChoice=refer[q];
// console.log("Computer choice is",compChoice);

let us=0;
let cs=0;
let yes=document.querySelectorAll(".choice");
yes.forEach((button)=>{
    button.addEventListener("click",()=>{
        let userChoice=button.name;
        for(let i of yes){
            i.disabled=true;
        }
        if(compChoice=="stone" && userChoice=="stone"){
            document.querySelector(".vs").innerText="Computer chose stone";
            document.querySelector(".choose").innerText="Draw!";
            document.querySelector(".user").innerText=us;
            document.querySelector(".comp").innerText=cs;
        }
        else if(compChoice=="stone" && userChoice=="paper"){us++;
            document.querySelector(".vs").innerText="Computer chose stone";
            document.querySelector(".choose").innerText="You win!";
            document.querySelector(".user").innerText=us;
            document.querySelector(".comp").innerText=cs;
        }
        else if(compChoice=="stone" && userChoice=="scissors"){cs++;
            document.querySelector(".vs").innerText="Computer chose stone";
            document.querySelector(".choose").innerText="You lose!";
            document.querySelector(".user").innerText=us;
            document.querySelector(".comp").innerText=cs;
        }
        else if(compChoice=="paper" && userChoice=="stone"){cs++;
            document.querySelector(".vs").innerText="Computer chose paper";
            document.querySelector(".choose").innerText="You lose!";
            document.querySelector(".user").innerText=us;
            document.querySelector(".comp").innerText=cs;
        }
        else if(compChoice=="paper" && userChoice=="paper"){
            document.querySelector(".vs").innerText="Computer chose paper";
            document.querySelector(".choose").innerText="Draw!";
            document.querySelector(".user").innerText=us;
            document.querySelector(".comp").innerText=cs;
        }
        else if(compChoice=="paper" && userChoice=="scissors"){us++;
            document.querySelector(".vs").innerText="Computer chose paper";
            document.querySelector(".choose").innerText="You win!";
            document.querySelector(".user").innerText=us;
            document.querySelector(".comp").innerText=cs;
        }
        else if(compChoice=="scissors" && userChoice=="stone"){us++;
            document.querySelector(".vs").innerText="Computer chose scissors";
            document.querySelector(".choose").innerText="You win!";
            document.querySelector(".user").innerText=us;
            document.querySelector(".comp").innerText=cs;
        }
        else if(compChoice=="scissors" && userChoice=="paper"){cs++;
            document.querySelector(".vs").innerText="Computer chose scissors";
            document.querySelector(".choose").innerText="You lose!";
            document.querySelector(".user").innerText=us;
            document.querySelector(".comp").innerText=cs;
        }
        else if(compChoice=="scissors" && userChoice=="scissors"){
            document.querySelector(".vs").innerText="Computer chose scissors";
            document.querySelector(".choose").innerText="Draw!";
            document.querySelector(".user").innerText=us;
            document.querySelector(".comp").innerText=cs;
        }
    })
})

let reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
    
    document.querySelector(".vs").innerText="You v/s Computer";
    document.querySelector(".choose").innerText="Choose any one option";
    for(let i of yes){
        i.disabled=false;
    }
})