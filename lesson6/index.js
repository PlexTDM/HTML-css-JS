const rangeInput = document.getElementById('rangeInput')
const rangeOutput = document.getElementById('rangeOut')
const pfp = document.getElementById('pfp')

const reader = new FileReader()

rangeInput.addEventListener("change",  ()=>{
    rangeOutput.innerText = rangeInput.value
})
pfpInput.addEventListener("change",  e=>{
    file = pfpInput.files[0]
    url = 
    pfp.src = window.URL.createObjectURL(file)
})

