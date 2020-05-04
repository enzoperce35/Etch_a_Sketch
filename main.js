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

function createDiv(number) {
  if (number < 101) {
        width = 500/number-2;
        height = 500/number-2;
        number = number*number;
const varArray = [];
  for (i=0; i<number; i++) {
    var singleDiv = document.createElement('div');
     varArray.push(singleDiv); 
    varArray.forEach((i) => {
        i.setAttribute('class', 'squares');
        i.setAttribute('style', `width: ${width}px; height: ${height}px`);
        document.getElementById("mainContainer").appendChild(i);  
});
} 
}else {
} 
}
createDiv(16);

  var firstSquares = document.querySelectorAll(".squares");
firstSquares.forEach((i) => {
      i.setAttribute('class', 'firstSquares');
           i.addEventListener('mouseover', (e) =>{
            i.style.backgroundColor = "green";
})
});

  var resetButton = document.getElementById('button');
resetButton.addEventListener('click', function()  {
        document.getElementById("mainContainer").remove();
           answer =  prompt('Please enter grid size', '1-100'); {
                 createMain(answer);
                  createDiv(answer);
};
    
    let blocks = document.querySelectorAll('.squares');
blocks.forEach((i) => {
       i.addEventListener('mouseover', (e) =>{
       i.style.backgroundColor = "green";
})
})
});
  
     