function datta1(X)
{
    if (X==0)
    document.getElementById("datta0").style.display='block';
else
    document.getElementById("datta0").style.display='none';
return;
}


function bushra1(X){
    if (X==0)
    document.getElementById("bushra0").style.display='block';
else
document.getElementById("bushra0").style.display='none';
return;
}



function sahil1(X){
    if (X==0)
    document.getElementById("sahil0").style.display='block'; 
    else
    document.getElementById("sahil0").style.display='none';
    return;
}

function rutuja1(X){
    if (X==0)
    document.getElementById("rutuja0").style.display='block';
    else
    document.getElementById("rutuja0").style.display='none';
    return;
}

function rutik1(X){
if (X==0)
document.getElementById("rutik0").style.display='block';
else
document.getElementById("rutik0").style.display='none';
return;
}
function pooja1(X){
    if (X==0)
    document.getElementById("pooja0").style.display='block';
    else
    document.getElementById("pooja0").style.display='none';
return;

}
function aditya1(X){
    if (X==0)
    document.getElementById("aditya0").style.display='block';
    else
    document.getElementById("aditya0").style.display='none';
return;

}


function kanchan1(X){
    if (X==0)
    document.getElementById("kanchan0").style.display='block';
    else
    document.getElementById("kanchan0").style.display='none';
return;

}








const btn = document.getElementById('btn');

// Retrieve the theme preference from localStorage or default to 'light'
let isReversed = localStorage.getItem('theme') === 'dark';

// Function to update the theme based on the current state
function updateTheme() {
  if (isReversed) {
    // Reversed state: black background, white text
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

    const nav = document.getElementById('ftco-nav');
    if (nav) {
      nav.style.backgroundColor = 'white';
      nav.style.color = 'black';
    }

    const footer = document.getElementById('footer');
    if (footer) {
      footer.style.backgroundColor = 'white';
      footer.style.color = 'black';
    }
  } else {
    // Original state: white background, black text
    document.body.style.backgroundColor = 'white';  
    document.body.style.color = 'black';

    const nav = document.getElementById('nav');
    if (nav) {
      nav.style.backgroundColor = 'black';
      nav.style.color = 'white';
    }

    const footer = document.getElementById('footer');
    if (footer) {
      footer.style.backgroundColor = 'black';
      footer.style.color = 'white';
    }
  }
}

// Initial theme setup
updateTheme();

// Event listener for button click
btn.addEventListener('click', function onClick(event) {
  // Toggle the reversed state
  isReversed = !isReversed;

  // Update the theme in localStorage
  localStorage.setItem('theme', isReversed ? 'dark' : 'light');

  // Update the theme
  updateTheme();
});
