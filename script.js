const name = document.querySelector('#name')
const password = document.querySelector('#password')
const form = document.querySelector('form')
const errComp = document.querySelector('#error')



form.addEventListener('submit',e=>{
    let messages = []

    if (name.value ===''|| name.value == null){
        messages.push('Name is requires')
    }

    if (password.value.length < 6){
        messages.push('Password length must be greater than 6')
    }

    if (password.value.length > 20){
        messages.push('Password length must be lesser than 20')
    }

    if (password.value === 'password'){
        messages.push('Password cannot be password')
    }


    if (messages.length > 0){
        e.preventDefault()
        errComp.textContent = messages.join(', ')
        
    }

    
})