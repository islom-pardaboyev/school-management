document.querySelector("form").addEventListener('submit', evt => {
    evt.preventDefault()
    const userData = {
        login: evt.target.login.value.toLowerCase().trim(),
        password: evt.target.password.value.toLowerCase().trim()
    }
    window.localStorage.setItem("isSignUp", JSON.stringify(userData))
    console.log(userData);
    setTimeout(() => {
        location.pathname = './html/login.html'
    }, 300)
})