const progress=document.querySelector(".progress")
const song=document.querySelector(".song")
const icon=document.getElementById("icon")


song.onloadedmetadeta  =function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
// function playsong(){
//      if(icon.classList.contains("fa-play")){
//         song.play();
//        icon.classList.remove("fa-play")
//        icon.classList.add("fa-pause")
// }
// else{
//     song.pause();
//     icon.classList.remove("fa-circle-pause")
//     icon.classList.add("fa-play")}
function playsong(){
if (icon.classList.contains("fa-circle-play")) {
    song.play();
    icon.classList.remove("fa-circle-play");
    icon.classList.add("fa-circle-pause");
   
} else {
    song.pause();
    icon.classList.remove("fa-circle-pause");
    icon.classList.add("fa-circle-play");   

}
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime
    },500)
    progress.onchange=function(){
        song.play();
        song.currentTime=progress.value;
        icon.classList.remove("fa-circle-play");
        icon.classList.add("fa-circle-pause");
    }

}

