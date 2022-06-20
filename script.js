/*script.js*/

function keyInfo(event) {
    const bigDiv = document.querySelector('.big');
    const smallDiv = document.querySelector('.small');
    bigDiv.textContent = event.keyCode;
    smallDiv.textContent = event.key;
    if(event.keyCode == 32) {
        smallDiv.textContent = 'Spacebar';
    }
    console.log(event);
}

window.addEventListener('keydown', keyInfo);