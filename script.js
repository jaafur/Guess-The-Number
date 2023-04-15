let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let note = document.querySelector('.note')
let note1 = document.querySelector('.note1')
let note2 = document.querySelector('.note2')
let note3 = document.querySelector('.note3')
let triesSpan = document.querySelector('.tries-span')
let valuesSpan = document.querySelector('.values-span')
let inputValue = ''
let tries = 0
let values = 'None'
let random = Math.floor(Math.random()*(100 - 1 + 1)+1)
input.addEventListener('input', ()=>{
   inputValue = input.value
})
btn.addEventListener('click',()=>{
   if (inputValue == '' || inputValue >100) {
    alert('please enter a valid number')
   }else if (inputValue == random) {
    note.innerText = 'Wooo Perfect'
    note1.remove()
    note2.remove()
    note3.remove()
    tries +=1 
    triesSpan.innerHTML = `${tries}`
    if (valuesSpan.innerText == 'None') {
        valuesSpan.innerText = ''
        valuesSpan.innerHTML += `${inputValue} ` 
    }else {
        valuesSpan.innerHTML += `${inputValue} ` 
    }
   }else if (inputValue !== random) {
    tries +=1 
    triesSpan.innerHTML = `${tries}`
    if (tries >2) {
        let tens = random.toString().split('')[0]
        note3.innerHTML = `tens number is ${tens} <i class="fa-solid fa-face-grin-wink face"></i>`
    }
    if (valuesSpan.innerText == 'None') {
        valuesSpan.innerText = ''
        valuesSpan.innerHTML += `${inputValue} ` 
    }else {
        valuesSpan.innerHTML += `${inputValue} ` 
    }
    if (random.toString().length >1) {
        
    note2.innerHTML = `its two digits <i class="fa-solid fa-face-grin-wink face"></i>`
   if (random > 50) {
    if (random % 2 == 0 && (inputValue%2)!==2) {
       
        note.innerHTML = `its an even number <i class="fa-solid fa-face-grin-wink face"></i>`

    }else{
        note.innerHTML = `its an odd number <i class="fa-solid fa-face-grin-wink face"></i>`
    }
    note1.innerHTML = `its bigger than 50 <i class="fa-solid fa-face-grin-wink face"></i>`
   }else{
    if (random % 2 == 0 && (inputValue%2)!==2) {
        
        note.innerHTML = `its an even number <i class="fa-solid fa-face-grin-wink face"></i>`

    }else{
        note.innerHTML = `its an odd number <i class="fa-solid fa-face-grin-wink face"></i>`
    }
    note1.innerHTML = `its smaller or equal  50 <i class="fa-solid fa-face-grin-wink face"></i>`
   }
}else{
    if (random % 2 == 0 && (inputValue%2)!==2) {
        
        note.innerHTML = `its an even number <i class="fa-solid fa-face-grin-wink face"></i>`

    }else{
        note.innerHTML = `its an odd number <i class="fa-solid fa-face-grin-wink face"></i>`
    }
    note2.innerHTML = `its one digits <i class="fa-solid fa-face-grin-wink face"></i>`
}
   }
})
