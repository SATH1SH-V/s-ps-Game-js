let my = confirm("Shall we play game rock, paper and sissors");
if(my)
{
    let player=prompt("Select your choice:rock,paper,sissors ");
    if(player)
    {
        let playerone=player.trim().toLocaleLowerCase();
        if(playerone==="rock"||
        playerone==="sissors"||
        playerone==="paper")
        {
            let computerchoice=Math.floor(Math.random()*3+1);
            let computer=
            computerchoice===1?"rock":
            computerchoice===2?"paper":"sissors";
            

            let result=
            playerone===computer?"Tie Game"
            :playerone==="rock" && computer==="sissors"?'playerone: rock\ncoputer: sissors\nPlayer Win!'
            :playerone==="rock"&& computer==="paper"?"playerone: rock\ncoputer: paper\nComputer Win!"
            :playerone==="sissors"&& computer==="paper"?"playerone: sissors\ncoputer: paper\nPlayer Win!"
            :playerone==="sissors"&& computer==="rock"?"playerone: sissors\ncoputer: rock\ncomputer Win!"
            :playerone==="paper"&& computer==="sissors"?"playerone: paper\ncoputer: sissors\ncomputer win!"
            :"playerone:paper\ncoputer:rock\nplayer Win!";

            alert(result);
            let playagin=confirm("Play again");
            playagin?location.reload():alert("Ok..Thaks for palaying...");
            

        }
        else{
            alert("You did't Enter valid value");
            
        }
        
    }
    else{
        alert("I think your can change your mind play next time");
    }
}
else{
    alert("ok may be next time");
}