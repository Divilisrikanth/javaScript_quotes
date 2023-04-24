let quotes=
 [
    
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
       "The way to get started is to quit talking and begin doing.",
        "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
       "Don't judge each day by the harvest you reap but by the seeds that you plant.-Robert Louis Stevenson",
       "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
       "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
       "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller",
       "It is during our darkest moments that we must focus to see the light. -Aristotle",
       "Whoever is happy will make others happy too. -Anne Frank",
       "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson"
 ]
    let author=
    [
        "Eleanor Roosevelt",
        "Benjamin Franklin",
        "Helen Keller",
        "Aristotle",
        "-Anne Frank",
        "Ralph Waldo Emerson"
 ] 
 let hex =[
   "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F", 
];
function randomColor(){
    let color ="#";
    for (let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

function degrees(){
    let angle = Math.floor(Math.random()+361);
    return angle + "deg";
}
  function newQuote(){
  
   let random =Math.floor(Math.random()*(quotes.length));
   let randomnumber =Math.floor(Math.random()*(author.length));
    document.getElementById("quotedisplay").innerHTML=quotes[random];
    document.getElementById("authordisplay").innerHTML=author[randomnumber];
    let angle =degrees();
    let c1 =randomColor();
    let c2 =randomColor();
    let c3 =randomColor();
    let c4 =randomColor();
    let bgman="linear-gradient("+angle+" ,"+c1 +" ,"+ c2 + " ,"+ c3 +" ,"+ c4 +")";
    console.log(angle);
    body.style.backgroundImage=bgman;
 } 
 //let dispayingquotes = document.getElementById("quotedisplay").innerHTML=quotes[random];
 //let authorname = document.getElementById("authordisplay").innerHTML=author[random];


