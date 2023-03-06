console.log("Welcome to Spotify");

//Initialise the variables
let songIndex = 0; 
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let flexbox = Array.from(document.getElementsByClassName('flexbox'));

let songs = [
    { songName: "Let Me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Untill I Found You", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Mera Jo Safar Hai", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Hide And Seek", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "No Love", filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
    { songName: "Srivalli", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Kesariya", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Har Har Shambhu", filePath: "song/8.mp3", coverPath: "covers/8.jpg"},
]

 flexbox.forEach((element, i)=>{
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 })
// audioElement.play();

// Handle Play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

$('#sound-slidersound-slider').on("slidestop", function(){  
    var volume = document.getElementById('sound-slidersound-slider').value;  
    console.log(volume);  
    player.volume = volume;  
      
});  
