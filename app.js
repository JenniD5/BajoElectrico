// Hola (Paula)

const button = document.querySelectorAll('button');

const playnote = event =>{
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    //console.log(audioId)
    const audio = document.getElementById(audioId);
    console.log(audio);
    audio.pause();
    audio.currentTime= 0;
    audio.play(); 
}
