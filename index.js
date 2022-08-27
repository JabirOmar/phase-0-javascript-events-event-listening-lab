const input = document.getElementById('input')

function addingEventListener() {
    const input = document.getElementById('input')
    input.addEventListener('click', clickAlart)
    function clickAlart(){
        alert('I was clicked!')
    }
}
addingEventListener()
