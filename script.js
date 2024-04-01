
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] =randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

function randomHexColor2() {
    let [r,g,b] =randomRgbColor();

    let hr2 = r.toString(16).padStart(2, '0');
    let hg2 = g.toString(16).padStart(2, '0');
    let hb2 = b.toString(16).padStart(2, '0');

    return "#" + hr2 + hg2 + hb2;
}


function changeColor() {
  let hex = randomHexColor();
  let hex2 = randomHexColor2();

  document.getElementById('firstbtn_1').value = hex;
  document.getElementById('firstbtn_1').innerHTML = hex;
//   document.getElementById('main_bg').style.backgroundColor = `linear-gradient(to right top, ${hex}, #004d7a, #008793, #00bf72, #a8eb12)`;

  document.getElementById('firstbtn_2').value = hex2;
  document.getElementById('firstbtn_2').innerHTML = hex2;
  document.getElementById('main_bg').style.backgroundImage = `linear-gradient(to right top, ${hex}, ${hex2})`;

//   console.log(hex2);
//   console.log(hex);
}

// function changeColor2() {
//     let hex2 = randomHexColor();
//     document.getElementById('firstbtn_2').value = hex2;
//     document.getElementById('firstbtn_2').innerHTML = hex2;
//     document.getElementById('main_bg').style.backgroundColor = `linear-gradient(90deg, , rgba(0,212,255,1) 35%, ${hex2} 100%)`;

    
//     console.log(hex2);
// }

changeColor();
// changeColor2();