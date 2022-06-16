const text1 = document.querySelector('h2')
const text2 = document.querySelector('h3')


/* 
var player = text1.animate([
  {transform: 'translate(1000px, 0px)'},
  {transform: 'translate(0px, 0px)'}
], 500);
player.addEventListener('finish', function() {
  target.style.transform = 'translate(0px, 0px)';
});
 */

frames(text1, text2);

function frames (text1, text2) {
    const animations = text1.animate([

        {transform: 'translate(1000px, 0px)'},
        {transform: 'translate(0px, 0px)'} ,

    ], {
        easing: "ease",
        iterations: 1,
        duration: 800,
    },50);


        text2.animate([

        {transform: 'translate(-1000px, 0px)'},
        {transform: 'translate(0px, 0px)'} ,

    ], {

        easing: "ease",
        iterations: 1,
        duration: 1500,
        fill: 'forwards',
        
    },50);

    return animations.finished;
}
