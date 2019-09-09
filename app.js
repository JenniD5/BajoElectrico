const buttons = document.querySelectorAll('button');

const playnote = event =>{
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    const audio = document.getElementById(audioId);
    console.log(audio);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
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