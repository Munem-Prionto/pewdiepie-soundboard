const btns = document.querySelectorAll('.btn');

const soundBoard = document.querySelector('.soundboard');
window.addEventListener('keydown' , e=> {
     
        console.log(e.keyCode)

        var t = document.querySelector(`[data-key="${e.keyCode}"]`);
        if(!t) return;
        t.parentElement.classList.add('playing');
        console.log(t.getAttribute('data-audio'))
        audio.src = `sounds/${t.getAttribute('data-audio')}.mp3`;
        audio.play();
})
audio = new Audio();

soundBoard.addEventListener('click' , e=> {
    //random for floorgang
   
  
    if(e.target.parentElement.classList.contains('btn-name')) {
        console.log(e.target.parentElement);
        e.target.parentElement.parentElement.classList.add('playing')

        audio.src = `sounds/${e.target.parentElement.getAttribute('data-audio')}.mp3`;
        audio.play();

    }   
    else if(e.target.classList.contains('btn-name')) {

        e.target.parentElement.classList.add('playing')
        
        if(e.target.classList.contains('fg')){
            var srcArray = ['sounds/floorGang-1.mp3' , 'sounds/floorGang-2.mp3'];

            audio.src = `${srcArray[Math.floor(Math.random() * 2)]}`;
            audio.play();
            
        }else {
            audio.src = `sounds/${e.target.getAttribute('data-audio')}.mp3`;
            audio.play();
        }
         
    /*   WITHOUT FLOOR GANG   
        audio.src = `sounds/${e.target.getAttribute('data-audio')}.mp3`;
        audio.play(); */
    }
  
});

// animation
function removeT(e) {
    if(e.propertyName !== 'transform') return;
    console.log(this)
    this.classList.remove('playing')
    /* this.children[0].classList.remove('playing') */

}
btns.forEach(btn => {
    btn.addEventListener('transitionend', removeT)
})
