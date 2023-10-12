const rated = [1,2,3,4,5]
const radioContainer = document.getElementById('radio-containers');
const form = document.getElementById('rate-form')
const userSelect = document.getElementById('selected')
const arrayTotal = document.getElementById('total')
const fistStep = document.querySelector('.rating')
const finalStep = document.querySelector('.summary')

const  renderRated = (array) => { //render the rating components
  array.forEach(item => {
    const radioLabel = createRadioLabel(item)
    const radioInput =  createRadioInput(item)

    radioInput.addEventListener('change', handleRate)

    radioContainer.appendChild(radioLabel)
    radioLabel.appendChild(radioInput)
  })
}

const createRadioLabel = (item) =>{ //function which generates a label from its call within the foreach
  const radioLabel = document.createElement('label')
  radioLabel.innerText = item
  radioLabel.className = 'rating-component_circle'
  return radioLabel
}

const createRadioInput = (item) =>{ //function which generates a radio input from its call within the foreach
  const radioInput = document.createElement('input')
  radioInput.type = 'radio'
  radioInput.name = 'rate'
  radioInput.value = item
  return radioInput;
}

const handleRate = (e) =>{ // add the class "selected" to the label once it is selected 
  const labels = radioContainer.getElementsByTagName('label')
  for (let label of labels) {
    label.classList.remove('selected');
  }
  const label = e.target.parentNode;
  label.classList.add('selected');
}

const handleSubmit = (e) =>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target))

  if ( Object.keys(data).length > 0) {
      userSelect.innerText = data.rate
      arrayTotal.innerText = rated.length
      fistStep.style.display = 'none' // hide the main section
      finalStep.style.display = 'flex' //displays the summary section
  }
  
}

window.onload = () =>{
  renderRated(rated)
  form.addEventListener('submit', handleSubmit)

}