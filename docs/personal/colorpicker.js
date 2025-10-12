    const colorPicker = document.getElementById('colorPicker');
    const resetButton = document.getElementById('resetButton');

    const savedColor = localStorage.getItem('tertiaryColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--tertiary', savedColor);
        colorPicker.value = savedColor;
    }

    colorPicker.addEventListener('input', (event) => {
        const color = event.target.value;
        document.documentElement.style.setProperty('--tertiary', color);
        localStorage.setItem('tertiaryColor', color);
    });

    resetButton.addEventListener('click', () => {
        const defaultColor = '#fff';
        document.documentElement.style.setProperty('--tertiary', defaultColor);
        colorPicker.value = defaultColor;
        localStorage.removeItem('tertiaryColor');
    });
