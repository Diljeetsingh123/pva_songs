
const songs=[
    {
        id:1,
        songname:`vanilla <br><div class="subtitle">diljit dosanjh</div>`,
        poster:"https://pagalworld.com.se/siteuploads/thumb/sft14/6627_4.jpg"
    },
    {
        id:2,
        songname:`The last ride <br><div class="subtitle">sidhu moosewala</div>`,
        poster:"https://pagalworld.com.se/siteuploads/thumb/sft12/5943_4.jpg"
    },
    {
        id:3,
        songname:`Lemonade <br><div class="subtitle">diljit dosanjh</div>`,
        poster:"https://pagalworld.com.se/siteuploads/thumb/sft14/6627_4.jpg"
    },
    {
        id:4,
        songname:`unfaired<br><div class="subtitle">jordan sandhu</div>`,
        poster:"https://cover.mr-jatt.im/thumb/502173/Unafraid-1.jpg"
    },
    {
        id:5,
        songname:`Untouchable<br><div class="subtitle">Tegi pannu</div>`,
        poster:"https://pagalnew.com/coverimages/Untouchable-Tegi-Pannu-500-500.jpg"
    },
]
//Array.from(document.getElementsByClassName("songitem")).forEach((e,i)=>{
    //e.getElementsByTagName('img')[0].src=songs[i].poster;
    //e.getElementsByTagName('h5')[0].innerHTML=songs[i].songname;});
    //play
let masterplay=document.getElementById("masterplay");
let play1=document.getElementById("1");
let play2=document.getElementById("2");
let play3=document.getElementById("3");
let play4=document.getElementById("4");
let play5=document.getElementById("5");
let play6=document.getElementById("6");
let play7=document.getElementById("7");
let play8=document.getElementById("8");
let play9=document.getElementById("9");
let play10=document.getElementById("10");
let play11=document.getElementById("11");
let play12=document.getElementById("12");
let play13=document.getElementById("13");
//bottom play
let bottomoplay=document.getElementById('posterbottom');
let bottomtitle=document.getElementById("title");
let bottomsubtitle=document.getElementsByClassName("subtitlebottom");
//playist songs

play1.onclick=function(){
    if (mysongs.paused||mysongs.currentTime<=0) {
        mysongs.play();
        play1.classList.replace( "fa-circle-play",'fa-circle-pause');
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        bottomoplay.src="https://pagalworld.com.se/siteuploads/thumb/sft14/6627_4.jpg";
        bottomtitle.style.color='white'
        bottomtitle.textContent=" vanilla";
       
       
        
    } else {
        mysongs.pause();
        play1.classList.replace( 'fa-circle-pause',"fa-circle-play");
        //bottom stop play
        masterplay.classList.replace("fa-pause",'fa-play');
        
    }
}
play2.onclick=function(){
    if (mysongs2.paused||mysongs2.currentTime<=0) {
        mysongs2.play();
        play2.classList.replace( "fa-circle-play",'fa-circle-pause');
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        bottomoplay.src="https://pagalworld.com.se/siteuploads/thumb/sft12/5943_4.jpg"
        bottomtitle.textContent="The Last Ride"
        bottomtitle.style.color='white'
        bottomsubtitle.textContent="sidhu moosewala"
        
    } else {
        mysongs2.pause();
        play2.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play3.onclick=function(){
    if (mysongs3.paused||mysongs3.currentTime<=0) {
        mysongs3.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play3.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://pagalworld.com.se/siteuploads/thumb/sft14/6627_4.jpg";
        bottomtitle.textContent="Lemonade";
        bottomsubtitle.textContent="diljit dosanjh";
    } else {
        mysongs3.pause();
        play3.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play4.onclick=function(){
    if (mysongs4.paused||mysongs4.currentTime<=0) {
        mysongs4.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play4.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://pagalworld.com.se/siteuploads/thumb/sft14/6627_4.jpg";
        bottomtitle.textContent="unfaired";
        bottomsubtitle.textContent="jordan sandhu";
        
    } else {
        mysongs4.pause();
        play4.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play5.onclick=function(){
    if (mysongs5.paused||mysongs5.currentTime<=0) {
        mysongs5.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play5.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://pagalnew.com/coverimages/Untouchable-Tegi-Pannu-500-500.jpg";
        bottomtitle.textContent="Untouchable";
        bottomsubtitle.textContent="Tegi pannu";
        
    } else {
        mysongs5.pause();
        play5.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play6.onclick=function(){
    if (mysongs6.paused||mysongs6.currentTime<=0) {
        mysongs6.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play6.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://lq.djjohal.com/covers/727998/OG.jpg";
        bottomtitle.textContent="Nah They Can't";
        bottomsubtitle.textContent="prem dhillion";
        
    } else {
        mysongs6.pause();
        play6.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play7.onclick=function(){
    if (mysongs7.paused||mysongs7.currentTime<=0) {
        mysongs7.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play7.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://lq.djjohal.com/covers/727998/OG.jpg";
        bottomtitle.textContent="26 Blvd";
        bottomsubtitle.textContent="prem dhillion";
        
    } else {
        mysongs7.pause();
        play7.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play8.onclick=function(){
    if (mysongs8.paused||mysongs8.currentTime<=0) {
        mysongs8.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play8.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://cover.mr-jatt.im/thumb/501428/Chauffeur-1649878158.jpg";
        bottomtitle.textContent="Chauffeur";
        bottomsubtitle.textContent="diljit dosanjh";
        
    } else {
        mysongs8.pause();
        play8.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play9.onclick=function(){
    if (mysongs9.paused||mysongs9.currentTime<=0) {
        mysongs9.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play9.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://lq.djjohal.com/covers/727998/OG.jpg";
        bottomtitle.textContent="Never Again";
        bottomsubtitle.textContent="prem dhillion";
    } else {
        mysongs9.pause();
        play9.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play10.onclick=function(){
    if (mysongs10.paused||mysongs10.currentTime<=0) {
        mysongs10.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play10.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://cover.djjohal.pro/music/thumb/491704/Sick-Vibe-.jpg";
        bottomtitle.textContent="Sick Vibe";
        bottomsubtitle.textContent="romey mann";
    } else {
        mysongs10.pause();
        play10.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play11.onclick=function(){
    if (mysongs11.paused||mysongs11.currentTime<=0) {
        mysongs11.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play11.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://cover.mr-jatt.im/thumb/482067/Special-Edition-1.jpg";
        bottomtitle.textContent="Special Edition";
        bottomsubtitle.textContent="Special Edition";
        
    } else {
        mysongs11.pause();
        play11.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play12.onclick=function(){
    if (mysongs12.paused||mysongs12.currentTime<=0) {
        mysongs12.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play12.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://djbaap.net/wp-content/media/covers/99.jpg";
        bottomtitle.textContent="sin";
        bottomsubtitle.textContent="sidhu moosewala";
        
    } else {
        mysongs12.pause();
        play12.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}
play13.onclick=function(){
    if (mysongs13.paused||mysongs13.currentTime<=0) {
        mysongs13.play();
        //bottom start play
        masterplay.classList.replace('fa-play', "fa-pause",);
        play13.classList.replace( "fa-circle-play",'fa-circle-pause');
        bottomoplay.src="https://cover.mr-jatt.im/thumb/501195/Shadow-1.jpg";
        bottomtitle.textContent="Shadow";
        bottomsubtitle.textContent="jassa dhillon";
        
    } else {
        mysongs13.pause();
        play13.classList.replace( 'fa-circle-pause',"fa-circle-play");
         //bottom stop play
         masterplay.classList.replace("fa-pause",'fa-play');
    }
}

// bottom time
let currentTime=document.getElementById('currenttime');
let currentTimeEnd=document.getElementById('currenttimeend');
//pointer go
var seek=document.getElementById('seek');
var bar2=document.getElementById("bar2");
var dot=document.getElementsByClassName('dot');
mysongs.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs.currentTime;
    let msic_dur=mysongs.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
   
})
mysongs2.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs2.currentTime;
    let msic_dur=mysongs2.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
 
})
mysongs3.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs3.currentTime;
    let msic_dur=mysongs3.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
   
})
mysongs4.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs4.currentTime;
    let msic_dur=mysongs4.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
})
mysongs5.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs5.currentTime;
    let msic_dur=mysongs5.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
})
mysongs6.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs6.currentTime;
    let msic_dur=mysongs6.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
})
mysongs7.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs7.currentTime;
    let msic_dur=mysongs7.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
})
mysongs8.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs8.currentTime;
    let msic_dur=mysongs8.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
})
mysongs9.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs9.currentTime;
    let msic_dur=mysongs9.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
})
mysongs10.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs10.currentTime;
    let msic_dur=mysongs10.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
})
mysongs11.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs11.currentTime;
    let msic_dur=mysongs11.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
})
mysongs12.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs12.currentTime;
    let msic_dur=mysongs12.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
})
mysongs13.addEventListener('timeupdate',()=>{
    let msic_cur=mysongs13.currentTime;
    let msic_dur=mysongs13.duration;
    
    let min1=Math.floor(msic_dur/60);
    let sec1=Math.floor(msic_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentTimeEnd.innerText=`${min1}:${sec1}`;
    let min2=Math.floor(msic_cur / 60);
    let sec2=Math.floor(msic_cur%60);
    if(sec2<10){
        sec2=`0${sec2}`}
    currentTime.innerText=`${min2}:${sec2}`;
    let pro=parseInt((msic_cur/msic_dur)*100);
    seek.value=pro;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
})


