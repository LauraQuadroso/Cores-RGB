function mudacor() {
   
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;

   
    document.getElementById('red-value').value = red;
    document.getElementById('green-value').value = green;
    document.getElementById('blue-value').value = blue;

   
    const quadrado = document.querySelector('.quadrado');
    quadrado.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}


window.onload = () => {
    mudacor();
};
