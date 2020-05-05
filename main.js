var button = document.createElement('button');
  button.textContent = "Reset the Sketchpad";
    button.setAttribute('id', 'button')
      document.body.append(button);

function createMain(number) {
       if(number < 101)
         mainContainer = document.createElement('div');
          mainContainer.setAttribute('id', 'mainContainer');
           document.body.append(mainContainer);     
}
createMain(1);

let varArray = [];

function createDiv(number) {
  number = number*number;
       for (i=0; i<number; i++) {
        var singleDiv = document.createElement('div');
          varArray.push(singleDiv); 
} 
}
createDiv(100);

function sliceVarArray(number) {
  if (number < 101) {
    width = 500/number-2;
    height = 500/number-2;
    number = number*number;
         firstSquares = varArray.slice(0, number);
           firstSquares.forEach( function(i) {
            document.getElementById("mainContainer").appendChild(i);
             i.setAttribute('class', 'squares');
             i.setAttribute('style', `width: ${width}px; height: ${height}px`);
             i.addEventListener('mouseover', (e) =>{
             i.style.backgroundColor = "green";
})
});
}else {
}
}
sliceVarArray(16);

var resetButton = document.getElementById('button');
resetButton.addEventListener('click', function()  {
         document.getElementById("mainContainer").remove();
          answer = prompt('Please enter grid size', '1-100'); {
          createMain(answer);
          sliceVarArray(answer);
};
  let blocks = document.querySelectorAll('.squares');
         blocks.forEach((i) => {
          i.addEventListener('mouseover', (e) =>{
          i.style.backgroundColor = "green";
})
})
});