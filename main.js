var button = document.createElement('button');
  button.textContent = "Reset the Sketchpad";
    button.setAttribute('id', 'button')
      document.body.append(button);

let varArray = []; 
    function createDiv(number) {
       for (i=0; i<number; i++) { 
         singleDiv = document.createElement('div');                        
           if (number == 1) {
              singleDiv.setAttribute('id', 'mainContainer');
               document.body.append(singleDiv);
            }else {
                  varArray.push(singleDiv);
               }
  }; 
};
createDiv(1);
createDiv(10000);

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
};
sliceVarArray(16);

var resetButton = document.getElementById('button');
resetButton.addEventListener('click', function()  {
         document.getElementById("mainContainer").remove();
          answer = prompt('Please enter grid size', '1-100'); {
          createDiv(1);
          sliceVarArray(answer);
  };
});