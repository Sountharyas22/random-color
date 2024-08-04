function generateRandomColor() {
    // Generate random values for red, green, and blue
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Create the color string 
    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    // Select the color box element
    const colorBox = document.getElementById('colorBox');

    // Set the background color of the color box to the random color
    colorBox.style.backgroundColor = randomColor;

    // Optionally, change the border color to match the background color
    colorBox.style.borderColor = randomColor;
}
