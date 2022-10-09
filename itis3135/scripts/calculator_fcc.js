//STUCK HERE To do so, we can add the is-depressed class to the operator key.

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

   
    //log keys to check for errors
    //------------------------------------------
    if (!action) {
        console.log('number key!')
                 }
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')

      }
      
      if (action === 'decimal') {
        console.log('decimal key!')
      }
      
      if (action === 'clear') {
        console.log('clear key!')
      }
      
      if (action === 'calculate') {
        console.log('equal key!')
      }
    //------------------------------------------

//if teh calcuator shows 0 or the last key that was clicked is an operator then wqe change it elsewe append the clicked key to the display number. 

if (!action) {
if (displayedNum === '0' || previousKeyType === 'operator') {
  display.textContent = keyContent

  
} else {
  display.textContent = displayedNum + keyContent
}
}
        //when user hits decilmal key put the period in the middle.
        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
          }

        //if the operator keys are pressed we add teh is-depressed class to that key
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
            ) {
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            }




            //remove the is depressewd class from all the keys via a for each loop
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))


                                }
                                    })