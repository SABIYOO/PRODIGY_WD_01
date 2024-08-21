function changeColor(color) {
    const box = document.querySelector('.box');
    box.style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', function() {
    const colorItems = document.querySelectorAll('.menu li');
    
    colorItems.forEach(function(item) {
        const color = item.classList;
        item.addEventListener('mouseover', function() {
            changeColor(color);
        });
    });
});



function changeColor(color) {
    const box = document.querySelector('.box');
    box.style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', function() {
    const colorItems = document.querySelectorAll('.menu-container li');
    
    colorItems.forEach(function(item) {
        const color = item.classList;
        item.addEventListener('mouseover', function() {
            changeColor(color);
        });
    });
});


function showSidebar(){
    const sidebar = document.querySelector('.menu-container');
    sidebar.style.display = 'flex'

}
function hideSidebar(){
    const sidebar = document.querySelector('.menu-container');
    sidebar.style.display = 'none'

}
function gren(){
    const green = document.getElementById('green');
    sidebar.style.backgroundColor= 'green'

}