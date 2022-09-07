// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons = document.getElementsByClassName("like-glyph");

Array.from(likeButtons).forEach(function(heart){
  heart.addEventListener('click', ()=>{
    if (heart.textContent == EMPTY_HEART){
      heart.classList.add("activated-heart")
      heart.textContent = FULL_HEART;
    }
    else if (heart.textContent == FULL_HEART){
      heart.classList.remove("activated-heart")
      heart.textContent = EMPTY_HEART;
    }
})
});

// for (heart in likeButtons){
//   console.log(heart)
  
  // })



// addEventListener('click', function(){
//   console.log("clicked like")
// });

// function emptyHeartClick(){
// };

// function fullHeartClick(){
// };

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
