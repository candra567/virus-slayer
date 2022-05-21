/**
 * inisialisasi variabel dalam dom html
 */
let modalStartGame=document.querySelector('.modal-start-game');
let username=document.querySelector('#username');
let btnStartGame=document.querySelector('.btn-start-game');
let counterTimeText=document.querySelector('.counter-time-text');
let modalGameWin=document.querySelector('.modal-game-win');
let winName=document.querySelector('.win-name');
let winScore=document.querySelector('.win-score');
let winTime=document.querySelector('.win-time');
let winFail=document.querySelector('.win-fail');
let modalGameOver=document.querySelector('.modal-game-over');
let overName=document.querySelector('.over-name');
let overScore=document.querySelector('.over-score');
let overTime=document.querySelector('.over-time');
let overFail=document.querySelector('.over-fail');
window.onload=()=>{modalStartGame.style.display="block"}
// content
let timeText=document.querySelector('.time-text');
let nameText=document.querySelector('.name-text');
let scoreText=document.querySelector('.score-text');
let failText=document.querySelector('.fail-text');
let btnPlayGame=document.querySelector('.btn-play-game');
// block
let blockD=document.querySelector('#blockD');
let blockF=document.querySelector('#blockF');
let blockJ=document.querySelector('#blockJ');
let blockK=document.querySelector('#blockK');
let keyD=document.querySelector('.keyD');
let keyF=document.querySelector('.keyF');
let keyJ=document.querySelector('.keyJ');
let keyK=document.querySelector('.keyK');
/**
 * global variable game
 */
let score=0;
let fail=0;
let time=3;
let menit=3;
let detik=59;
let intervalA,intervalB,intervalC,intervalD;
/**
 * canvas configuration
 */
function Canvas(canvas,xPost,yPost,img)
{
    this.canvas=canvas;
    this.ctx=canvas.getContext('2d');
    this.xPost=xPost;
    this.yPost=yPost;
    this.img=img;
    this.ctxH=canvas.height/5;
    this.yDanger=this.canvas.height-80;
    /**
     * draw canvas
     */
    this.drawCanvas=function(){
        let image=new Image();
        image.src=img;
        this.ctx.save();
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.fillStyle="rgba(190,0,0,0.5)";
        this.ctx.fillRect(0,this.yDanger,this.canvas.width,80)
        image.onload=()=>{
            this.ctx.drawImage(image,this.xPost,this.yPost,this.canvas.width,this.ctxH);
        }
        this.ctx.restore();
        this.yPost++;
        // jika virus mengenail pembatas
        if (this.yPost==this.canvas.height-this.ctxH) {
            this.yPost=-30;
            fail+=1;
        }
    }
    this.renderCanvas=function(){
        return setInterval(() => {
            this.drawCanvas();
        }, 100);
    }
    // aksi users
    this.actionUsers=function(){
        if (this.yPost>this.yDanger) {
           score+=5;
           this.yPost=-30;
        }
    }
}
let canvasD=new Canvas(blockD,0,0,'img/virus.png');
let canvasF=new Canvas(blockF,0,-20,'img/virus-g93561ac1b_1920.png');
let canvasJ=new Canvas(blockJ,0,-30,'img/virus-g93561ac1b_1920.png');
let canvasK=new Canvas(blockK,0,0,'img/virus.png');
username.addEventListener('keydown',function(){
    if (this.value!="") {
        btnStartGame.removeAttribute('disabled');
    } else {
        btnStartGame.setAttribute('disabled','')
    }
});
btnStartGame.addEventListener('click',function(){
    modalStartGame.style.display="none";
    nameText.innerHTML="NAME \t"+username.value;
    document.querySelector('.counter-time').style.display="block";
    setInterval(() => {
        if (time<=0) {
            document.querySelector('.counter-time').style.display="none";
        }
        counterTimeText.innerHTML=time--;
    }, 1000);
})
// kalau users memulai game
btnPlayGame.addEventListener('click',function(){
    if (this.textContent=="PLAY NOW") {
        this.textContent="PAUSE";
        intervalA=canvasD.renderCanvas();
        intervalB=canvasF.renderCanvas();
        intervalC=canvasJ.renderCanvas();
        intervalD=canvasK.renderCanvas();
        // keyboard handler
        keyD.addEventListener('click',function(){
            canvasD.actionUsers();
        });
        keyF.addEventListener('click',function(){
            canvasF.actionUsers();
        });
        keyJ.addEventListener('click',function(){
            canvasJ.actionUsers();
        });
        keyK.addEventListener('click',function(){
            canvasK.actionUsers();
        });
        // 
        window.addEventListener('keydown',effectKeyboard);
        window.addEventListener('keyup',upeffectKeyboard);
     intervalTime=setInterval(() => {
            timeText.innerHTML="Time \t"+menit+"\t"+detik;
            detik--;
            if (detik==00) {
                menit--
                detik=59
            }
        }, 1000);
    } else {
        this.textContent="PLAY NOW";
        cleanInterval();
    }
});
// clear interval
function cleanInterval(){
    clearInterval(intervalA);
    clearInterval(intervalB);
    clearInterval(intervalC);
    clearInterval(intervalD);
    clearInterval(intervalTime)
    return;
}
function effectKeyboard(event){
    if (event.key=="d"||event.key=="D") {
        keyD.style.transform="scale(0.8)";
        canvasD.actionUsers();
    }
    else if(event.key=="f"||event.key=="F"){
        keyF.style.transform="scale(0.8)";
        canvasF.actionUsers();
    }
    else if(event.key=="j"||event.key=="J"){
        keyJ.style.transform="scale(0.8)";
        canvasJ.actionUsers();
    }
    else if(event.key=="k"||event.key=="K"){
        keyK.style.transform="scale(0.8)";
        canvasK.actionUsers();
    }
}
function upeffectKeyboard(event){
    if (event.key=="d"||event.key=="D") {
        keyD.style.transform="scale(1)"
    }
    else if(event.key=="f"||event.key=="F"){
        keyF.style.transform="scale(1)"
    }
    else if(event.key=="j"||event.key=="J"){
        keyJ.style.transform="scale(1)"
    }
    else if(event.key=="k"||event.key=="K"){
        keyK.style.transform="scale(1)"
    }
}

/**
 * score configuartion
 */
setInterval(() => {
    scoreText.textContent="SCORE \t"+score+"%";
    failText.textContent="FAIL \t"+fail;
    //kalau game over
    if (fail>=4) {
        modalGameOver.style.display='block';
        overScore.innerHTML="Score "+score;
        overFail.innerHTML="FAIL"+fail;
        overName.innerHTML="NAME \t"+username.value;
        overTime.innerHTML="TIME "+menit+"."+detik;
        cleanInterval()
    }
    else if(score>=100){
        modalGameWin.style.display="block";
        winFail.innerHTML="FAIL ="+fail;
        winScore.innerHTML="SCORE"+score;
        winName.innerHTML="NAAME \t"+username.value;
        winTime.innerHTML="TIME "+menit+"."+detik;
        cleanInterval();
    }
}, 100);