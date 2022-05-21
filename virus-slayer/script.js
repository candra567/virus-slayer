let score=0;
let fail=0;
let scoretext=document.querySelector('.text-score');
let failtext=document.querySelector('.text-fail');
let texttime=document.querySelector('.text-time');
let menit=3;
let detik=59;
let btnplay=document.querySelector('#btn-play');
let btnstartgame=document.querySelector('.btn-start-game');
let username=document.querySelector('#username');
let counttime=document.querySelector('.counttime h1');
let time=3;
username.addEventListener('keydown',function(){
    if (this.value!="") {
        btnstartgame.removeAttribute('disabled');
        return;
    }
    btnstartgame.setAttribute('disabled','');

})
btnstartgame.addEventListener('click',function(event){
    event.preventDefault();
    modalstartgame.style.display="none";
    document.querySelector('.counttime').style.display='block';
    setInterval(() => {
        time--;
        counttime.textContent=time;
        if (time<0) {
            document.querySelector('.counttime').style.display='none';
        }
    }, 1000);
})

// modal game
let modalstartgame=document.querySelector('.modal-start-game');
modalstartgame.style.display="block";
function Canvas(canvas,xPost,yPost,img)
{
    this.canvas=canvas;
    this.xPost=xPost;
    this.yPost=yPost;
    this.ctx=canvas.getContext('2d');
    this.ctxH=canvas.height/5;
    this.img=img;
    this.yDanger=this.canvas.height-70;
    this.drawCanvas=function(){
        let image=new Image();
        image.src=this.img;
        this.ctx.save();
        this.ctx.clearRect(0,0,canvas.width,canvas.height);
        this.ctx.fillStyle='rgba(200,0,0,0.7)';
        this.ctx.fillRect(0,this.yDanger,this.canvas.width,70)
        image.onload=()=>{
            this.ctx.drawImage(image,this.xPost,this.yPost,this.canvas.width,this.ctxH);
        }
        this.ctx.restore();
        this.yPost++;
        // kalau virus mengenei pembatas
        if (this.yPost==this.canvas.height-this.ctxH) {
            this.yPost=0-Math.ceil(Math.random()*30);
            fail+=1;
        }
    
    }
    this.renderCanvas=function(){
        return setInterval(() => {
            this.drawCanvas();
        }, 100);
     }
    //  action users
    this.actionUsers=function(){
        if (this.yPost>this.yDanger) {
            this.yPost=-40;
            score+=5
        }
    }
    
}
let blockA=new Canvas(document.querySelector('#blockA'),0,0,'img/virus.png');
let blockB=new Canvas(document.querySelector('#blockB'),0,0,'img/virus-g93561ac1b_1920.png');
let blockC=new Canvas(document.querySelector('#blockC'),0,0,'img/virus.png');
let blockD=new Canvas(document.querySelector('#blockD'),0,0,'img/coronavirus-gaedba68d4_1280.png');
let intervalA,intervalB,intervalC,intervalD,intervalTime;
// jalankan game
btnplay.addEventListener('click',function(){
    if (this.textContent=="PLAY") {
        intervalA=blockA.renderCanvas();
    intervalB=blockB.renderCanvas();
    intervalC=blockC.renderCanvas();
    intervalD=blockD.renderCanvas();
    this.textContent="PAUSE";
            // key down handeler
        window.addEventListener('keydown',function(event){
            if (event.key=="d"||event.key=="D") {
                blockA.actionUsers();
                keyA.style.transform="scale(0.8)"
            }
        else if (event.key=="f"||event.key=="F") {
            blockB.actionUsers();
            keyB.style.transform="scale(0.8)"
        }
        else if (event.key=="j"||event.key=="K") {
            blockC.actionUsers();
            keyC.style.transform="scale(0.8)"
        }
        else if (event.key=="k"||event.key=="K") {
            blockD.actionUsers();
            keyD.style.transform="scale(0.8)"
        }
        })
        window.addEventListener('keyup',function(event){
        if (event.key=="d"||event.key=="D") {
            blockA.actionUsers();
            keyA.style.transform="scale(1)"
        }
        else if (event.key=="f"||event.key=="F") {
            blockB.actionUsers();
            keyB.style.transform="scale(1)"
        }
        else if (event.key=="j"||event.key=="K") {
            blockC.actionUsers();
            keyC.style.transform="scale(1)"
        }
        else if (event.key=="k"||event.key=="K") {
            blockD.actionUsers();
            keyD.style.transform="scale(1)"
        }
        })
    // time
    setInterval(() => {
        detik--;
        if (detik == 00) {
            detik=59;
            menit--;
        }
        else if(menit == 0 && detik==01){
           document.querySelector('.modal-game-over').style.display='block';
        }
        texttime.innerHTML="TIME "+menit+"."+detik;
    }, 1000);
    }
    else{
        clearInterval(intervalA);
        clearInterval(intervalB);
        clearInterval(intervalC);
        clearInterval(intervalD);
        this.textContent="PLAY"
    }
    
})
let keyA=document.querySelector('.keyA');
let keyB=document.querySelector('.keyB');
let keyC=document.querySelector('.keyC');
let keyD=document.querySelector('.keyD');

keyA.addEventListener('click',function(){
    blockA.actionUsers()
});
keyB.addEventListener('click',function(){
    blockB.actionUsers();
})
keyC.addEventListener('click',function(){
    blockC.actionUsers();
})
keyD.addEventListener('click',function(){
    blockD.actionUsers();
})


// pengatran score
setInterval(() => {
    scoretext.textContent="SCORE "+score+"%";
    failtext.textContent="FAIL "+fail+"";
    if (fail==5) {
        document.querySelector('.modal-game-over').style.display='block'
    }
    else if (score>=100){
        document.querySelector('.modal-game-win').style.display='block'
    }
}, 100);
// config
let overname=document.querySelector('.name3')
let winname=document.querySelector('.name2')
let contentname=document.querySelector('.name1')
overname.textContent="Name"+username.value;
winname.textContent="Name"+username.value;
contentname.textContent="Name"+username.value;