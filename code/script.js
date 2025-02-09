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


let backgroundImages = [
  'url(/images/vecteezy_romantic-couple-silhouette-against-a-starry-sky-and-glowing_53794083.jpeg);',
  'url(/images/lov8.jpg)',
  'url(/images/lovers1.webp)',
  'url(/images/lovers2.webp)',
  'url(/images/lovers\ 01.webp)',
  'url(/images/PS1_37.311_Fnt_DD_T13.jpg);',//self bkg
  'url(/images/vecteezy_ai-generated-pixel-art-game-backgrounds-game-background_42194860.jpg)',
  'url(/images/vecteezy_ai-generated-silhouette-of-men-rowing-reflecting-tranquil_36776641.jpg)'
]
let num = 0;

function changeBackgroundImage() {
setInterval (() =>{
  console.log(num)
  document.body.style.backgroundImage = backgroundImages[num];
  num = (num + 1) % backgroundImages.length
},2000)

}

changeBackgroundImage()



console.log('ha')
