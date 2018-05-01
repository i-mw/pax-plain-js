const sizePicker = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
let color = colorPicker.value;

//makeGrid function creates the canvas
function makeGrid(height, width) {
  table.innerHTML = '';
  for(let i=0; i<height; i++){
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for(let x=0; x<width; x++){
      const td = document.createElement('td');
      table.lastElementChild.appendChild(td);
    }
  }
}

//event listener for form submit
sizePicker.addEventListener('submit', function(eve){
  eve.preventDefault();
  const height = inputHeight.value;
  const width = inputWidth.value;
  makeGrid(height, width);
});

//event listener for color change
colorPicker.addEventListener('change', function(){
  color = colorPicker.value;
});

//event lisener for table cells click and coloring
table.addEventListener('click', function(eve){
  if(eve.target.nodeName === 'TD'){
    eve.target.style.backgroundColor = color;
  }
});
