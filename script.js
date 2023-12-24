var timer = 60;
var score = 0;
hitrn = 0;

// event bubbleler = jis par click karoge wo element par event rease hoga, or event listener na milne par event element ke perent par listeener dundega waha pe bhi na milne par event perent ke perent ke perent par listener dhunde ga...

function makeBubble(){
    var clutter = "";

    for(var i=1; i<=160; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbotm").innerHTML = clutter;
}
makeBubble();

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#Timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbotm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}
runTimer();

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function listnerFunc(){
document.querySelector("#pbotm")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
}
listnerFunc();