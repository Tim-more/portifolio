var imaArray=[  
    'bootstrap.png',
    'c.png',
    'css.png' ,
    'js.jpeg',
    'node.png',
    'html.png'
     
];

var curIndex=0;
var imgDuration = 5000;
 var text = document.getElementById("text");

function imageSlider(){

    document.getElementById("tim").src=imaArray[curIndex];
    curIndex++
     if(curIndex==imaArray.length){
        curIndex=0;
     }
     switch(imaArray[curIndex]){
        case 'bootstrap.png':
            text.innerHTML='I use html in web development'
            break;
        case 'c.png':
            text.innerHTML='get the best pre-made styling with bootstrap '
            break;
        case 'css.png':
            text.innerHTML='I develop stand alone systems with c++  '
            break;
        case 'js.jpeg':
            text.innerHTML='get the best custom made styling with css'
            break;
        case 'node.png':
            text.innerHTML='give your webiste fucntionality with javascript '
            break;
        case 'html.png':
             text.innerHTML='get your webiste a server '
             break;
             
         
            
        default:

            
     }
     setTimeout("imageSlider()" ,imgDuration);

};

imageSlider();
// about nme
// JavaScript
const aboutLink = document.getElementById("about"); // Get the "About Me" link element
const meHeading = document.getElementById("me"); // Get the "About Me" h1 element

aboutLink.addEventListener("mouseover", () => {
    meHeading.style.display = "block"; // Show the "About Me" h1 on mouseover
});

aboutLink.addEventListener("mouseout", () => {
    meHeading.style.display = "none"; // Hide the "About Me" h1 on mouseout
});


