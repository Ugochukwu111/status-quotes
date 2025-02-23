const loveQuotes = [
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "The best thing to hold onto in life is each other.",
  "Love is composed of a single soul inhabiting two bodies.",
  "You are my sun, my moon, and all my stars.",
  "To love and be loved is to feel the sun from both sides.",
  "I would rather spend one lifetime with you than face all the ages of this world alone.",
  "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
  "If I had a flower for every time I thought of you, I could walk through my garden forever.",
  "Grow old with me! The best is yet to be.",
  "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
  "Whatever our souls are made of, his and mine are the same.",
  "I look at you and see the rest of my life in front of my eyes.",
  "A successful marriage requires falling in love many times, always with the same person.",
  "Love is not about how many days, months, or years you have been together. It’s all about how much you love each other every single day.",
  "Being deeply loved by someone gives you strength while loving someone deeply gives you courage.",
  "I am yours, don’t give myself back to me.",
  "A hundred hearts would be too few to carry all my love for you.",
  "To the world you may be one person, but to one person you are the world.",
  "True love stories never have endings.",
  "Every love story is beautiful, but ours is my favorite."
];

const authors = [
  "Dr. Seuss",
  "Audrey Hepburn",
  "Aristotle",
  "E.E. Cummings",
  "David Viscott",
  "J.R.R. Tolkien",
  "Antoine de Saint-Exupéry",
  "Alfred Lord Tennyson",
  "Robert Browning",
  "Leo Christopher",
  "Emily Brontë",
  "Unknown",
  "Mignon McLaughlin",
  "Unknown",
  "Lao Tzu",
  "Rumi",
  "Unknown",
  "Dr. Seuss",
  "Richard Bach",
  "Unknown"
];

let playIcon = document.querySelector('.play-icon');
let quoteEl = document.querySelector('.quote-el');
let writterEl = document.querySelector('.writter')

let quotenum = 0 //this nuber determins the nest quote as is used as an array index

// reuseable function to lose and open my music folder
function MusicFolder(update){
  let showMusicFolder = document.querySelector('.song-container')
  showMusicFolder.style.transform = update ;
}

function showMusicFile(){
 MusicFolder('translateY(0%)' )
}

function closeMusicFolder(){
  MusicFolder('translateY(100%)' )
}

//below, Asign "myinterval" to set interval because i what to get the unique number so i can pause it
let myinterval = setInterval (nextQuote,2000);

let isquoute = true // this means that quote is changing every n second
function quotesToggle(){
  if (isquoute){
     clearInterval(myinterval)
     playIcon.style.fill = 'red'  //this pauses the interval
     isquoute = false ;
    }
  else {
    playIcon.style.fill = 'green'
    myinterval = setInterval (nextQuote,2000)
    isquoute = true;
   }
}

//onclick  moves to next line of quote
function nextQuote() {
  quoteEl.textContent = loveQuotes[quotenum];
  writterEl.textContent = authors [quotenum];
quotenum = (quotenum + 1) % loveQuotes.length;
}






// interative functions
let audio = new Audio("Lana Del Rey - I've got my eyes on you (Say Yes To Heaven) (Lyrics) [rjd1mVoC6do].mp3");
let audioIsPlaying = false;

function playAudio() {
   let musicIcon = document.querySelector('.music-icon');
  if (!audioIsPlaying){
    audio.play()
    .then(() => console.log("Music is playing"))
    .catch(error => alert("Playback error:" +  error.message));
    musicIcon.style.fill = 'green';
    audioIsPlaying = true
  }else{
    audio.pause();
    audioIsPlaying = false;
    musicIcon.style.fill = 'red'
  }
   
}

audio.addEventListener("pause", () => audioIsPlaying = false);//this make sure the music is paused if the user pases manually or leave the site making the music in async