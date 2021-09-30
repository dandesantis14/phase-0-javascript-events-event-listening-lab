function clickAlert() {
    alert('teehee!');
}
function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', clickAlert);
}