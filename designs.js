
const submit = document.getElementById('submit');
const color = document.querySelector('#colorPicker').value;
const width = localStorage.getItem('width');
const height = localStorage.getItem('height');
const pixelCanvas = document.querySelector('#pixelCanvas');

for (i = 1; i <= height; i++ ) {
    const tr = document.createElement('TR');
    for (f = 1; f <= width; f++ ) {
        const td = document.createElement('TD');
        td.addEventListener('click', function () {
        event.target.style.backgroundColor
        = document.querySelector('#colorPicker').value
        });
        tr.appendChild(td)
    };
    pixelCanvas.appendChild(tr);
};

const storage = submit.addEventListener('click', function () {
    localStorage.setItem('width', document.querySelector('#inputWidth').value);
    localStorage.setItem('height', document.querySelector('#inputHeight').value);
});
