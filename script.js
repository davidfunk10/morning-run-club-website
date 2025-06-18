
const DEBUG_MODE = false; // Set to false to disable logs

// Full array of motivational Bible verses (you can expand this further)
const verses = [
  "Isaiah 40:31 – But those who hope in the Lord will renew their strength.",
  "Philippians 4:13 – I can do all things through Christ who strengthens me.",
  "Hebrews 12:1 – Let us run with endurance the race that is set before us.",
  "Psalm 118:24 – This is the day the Lord has made; let us rejoice and be glad in it.",
  "1 Corinthians 9:24 – Run in such a way as to get the prize.",
  "Joshua 1:9 – Be strong and courageous. Do not be afraid.",
  "Psalm 23:4 – Even though I walk through the valley... I will fear no evil.",
  "Proverbs 3:5 – Trust in the Lord with all your heart.",
  "Romans 8:28 – In all things God works for the good of those who love Him.",
  "Galatians 6:9 – Let us not grow weary of doing good.",
  "Ephesians 6:10 – Be strong in the Lord and in His mighty power.",
  "2 Timothy 4:7 – I have fought the good fight, I have finished the race, I have kept the faith.",
  "Psalm 46:1 – God is our refuge and strength, an ever-present help in trouble.",
  "Matthew 6:33 – Seek first the kingdom of God and His righteousness.",
  "Romans 12:2 – Be transformed by the renewing of your mind.",
  "Colossians 3:23 – Whatever you do, work at it with all your heart, as working for the Lord.",
  "John 14:27 – Peace I leave with you; my peace I give you.",
  "Psalm 37:4 – Delight yourself in the Lord, and He will give you the desires of your heart.",
  "Isaiah 41:10 – Do not fear, for I am with you.",
  "Matthew 11:28 – Come to me, all who are weary, and I will give you rest.",
  "James 1:2 – Consider it pure joy whenever you face trials of many kinds.",
  "Micah 6:8 – What does the Lord require of you? To act justly, love mercy, and walk humbly.",
  "1 Peter 5:7 – Cast all your anxiety on Him because He cares for you.",
  "Deuteronomy 31:6 – Be strong and courageous. He will never leave you.",
  "Proverbs 16:3 – Commit to the Lord whatever you do, and your plans will succeed.",
  "2 Corinthians 5:7 – We walk by faith, not by sight.",
  "Matthew 5:14 – You are the light of the world. A city on a hill cannot be hidden.",
  "Lamentations 3:22–23 – His mercies are new every morning.",
  "1 Thessalonians 5:16–18 – Rejoice always, pray continually, give thanks in all circumstances.",
  "Psalm 119:105 – Your word is a lamp for my feet, a light on my path.",
  "Romans 15:13 – May the God of hope fill you with all joy and peace as you trust in Him.",
  "Mark 12:30 – Love the Lord your God with all your heart, soul, mind, and strength.",
  "Ecclesiastes 3:1 – There is a time for everything, and a season for every activity under heaven.",
  "Psalm 19:14 – May the words of my mouth and the meditation of my heart be pleasing in Your sight.",
  "Isaiah 26:3 – You will keep in perfect peace those whose minds are steadfast.",
  "Jeremiah 29:11 – For I know the plans I have for you, declares the Lord.",
  "Ephesians 2:10 – For we are God’s handiwork, created in Christ Jesus to do good works.",
  "1 John 4:19 – We love because He first loved us.",
  "Psalm 91:1 – Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.",
  "Romans 5:8 – But God demonstrates His love for us in this: while we were still sinners, Christ died for us.",
  "John 16:33 – In this world you will have trouble. But take heart! I have overcome the world.",
  "Matthew 28:20 – I am with you always, to the very end of the age.",
  "Psalm 34:18 – The Lord is close to the brokenhearted.",
  "Proverbs 27:17 – As iron sharpens iron, so one person sharpens another.",
  "Galatians 5:22–23 – The fruit of the Spirit is love, joy, peace, patience...",
  "John 15:5 – I am the vine; you are the branches.",
  "2 Chronicles 15:7 – Be strong and do not give up, for your work will be rewarded.",
  "Psalm 100:4 – Enter His gates with thanksgiving and His courts with praise.",
  "1 Samuel 16:7 – The Lord looks at the heart.",
  "Romans 1:16 – For I am not ashamed of the gospel.",
  "Psalm 16:8 – I keep my eyes always on the Lord. With Him at my right hand, I will not be shaken.",
  "Matthew 7:7 – Ask and it will be given to you; seek and you will find.",
  "Psalm 121:1–2 – I lift up my eyes to the mountains—where does my help come from?"
];


// Helper function to get the week number of the year
function getWeekNumber(date) {
  const firstDay = new Date(date.getFullYear(), 0, 1);
  if (DEBUG_MODE) console.log("First day of year:", firstDay);

  const pastDays = Math.floor((date - firstDay) / (24 * 60 * 60 * 1000));
  if (DEBUG_MODE) console.log("Days since Jan 1:", pastDays);

  const dayOffset = firstDay.getDay();
  if (DEBUG_MODE) console.log("Day of week Jan 1:", dayOffset);

  const weekNumber = Math.ceil((pastDays + dayOffset + 1) / 7);
  if (DEBUG_MODE) console.log("Calculated week number:", weekNumber);

    return weekNumber;
}


// Get this week's verse
const weekNumber = getWeekNumber(new Date());
const verseIndex = weekNumber % verses.length;

const verseElement = document.getElementById("bible-verse");
verseElement.textContent = verses[verseIndex];

