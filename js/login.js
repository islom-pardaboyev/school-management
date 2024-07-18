document.querySelector("form").addEventListener('submit', evt => {
    evt.preventDefault()
    const isSignUp = JSON.parse(window.localStorage.getItem("isSignUp"))
    if(isSignUp) {
        if(evt.target.login.value == isSignUp.login && evt.target.password.value == isSignUp.password){
            setTimeout(() => {
             location.pathname = './html/dashboard.html'   
            }, 500)
        }else{
            alert('Invalid credentials. Please try again.')
        }
    }else{
        if(evt.target.login.value == "islom" && evt.target.password.value == "123"){
            setTimeout(() => {
             location.pathname = './html/dashboard.html'   
            }, 500)
        }
    }
})
