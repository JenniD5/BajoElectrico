const buttons = document.querySelectorAll('button');
const div=document.querySelector('div');

buttons.forEach(
    button =>
    {
        button.style.left = `${button.dataset.posx}px`;
        button.style.top = `${button.dataset.posy}px`;
    }
);

const playnote = event =>{
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    const audio = document.getElementById(audioId);
    const stringBass = document.querySelector(`div[data-note="${note}"]`);
    console.log(audio);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    stringBass.classList.toggle('animateString');  
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
);

const keyNoteDown = event =>{
    const key = event.key;
    console.log(key);
    const button = document.querySelector(`button[data-key="${key}"]`)
    if(button) button.click(); 
}

document.addEventListener('keydown', keyNoteDown);

const animation = event=>{
    const div = event.target;    
    const divId = document.getElementById(divId);
    console.log(divId);
    div.pause();
    div.currentTime= 0;
    div.play();    
}