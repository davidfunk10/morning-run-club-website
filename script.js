const verses = [
  "Isaiah 40:31 – But those who hope in the Lord will renew their strength...",
  "Philippians 4:13 – I can do all things through Christ who strengthens me.",
  "Hebrews 12:1 – Let us run with endurance the race that is set before us...",
  "Psalm 118:24 – This is the day the Lord has made; let us rejoice and be glad in it.",
];

const verseElement = document.getElementById("bible-verse");
const randomVerse = verses[Math.floor(Math.random() * verses.length)];

verseElement.textContent = randomVerse;

