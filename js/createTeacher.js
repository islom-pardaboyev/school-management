// arrays
const subjects = [
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Physics" },
    { id: 3, name: "Chemistry" },
    { id: 4, name: "Biology" },
    { id: 5, name: "History" },
    { id: 6, name: "Geography" },
    { id: 7, name: "English" },
    { id: 8, name: "Computer Science" },
    { id: 9, name: "Economics" },
    { id: 10, name: "Art" },
    { id: 11, name: "Physical Education" },
    { id: 12, name: "Music" },
    { id: 13, name: "Philosophy" },
    { id: 14, name: "Psychology" },
    { id: 15, name: "Sociology" }
];
const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" }
]
const classes = [
    { id: 1, name: "Class 1" },
    { id: 2, name: "Class 2" },
    { id: 3, name: "Class 3" },
    { id: 4, name: "Class 4" },
    { id: 5, name: "Class 5" },
    { id: 6, name: "Class 6" },
    { id: 7, name: "Class 7" },
    { id: 8, name: "Class 8" },
    { id: 9, name: "Class 9" },
    { id: 10, name: "Class 10" },
    { id: 11, name: "Class 11" },
    { id: 12, name: "Class 12" }
]

let logOut = document.querySelector("#logOut").addEventListener('click', () => {
    let confirmLogOut = confirm("do you wanr log out")
    if (confirmLogOut) {
        localStorage.clear()
        setTimeout(() => {
            window.localStorage.clear()
            location.pathname = '../index.html'
        }, 500)
    }
})

let subjectsSelect = document.getElementById("subjectsSelect")
let classesCon = document.getElementById("classes")

let form = document.querySelector("form")

let teachersArray = JSON.parse(window.localStorage.getItem("teachers")) || []

document.querySelector("#chooseIMg").addEventListener('change', evt => {
    document.querySelector("#showImg").src = URL.createObjectURL(evt.target.files[0])
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const teachersData = {
        id: Date.now(),
        fullName: evt.target.fullName.value,
        email: evt.target.email.value,
        subjectsSelect: evt.target.subjectsSelect.value,
        about: evt.target.about.value,
        classclasses: evt.target.class.value,
        gender: evt.target.gender.value,
        age: evt.target.age.value,
        imgUrl: document.querySelector("#showImg").src
    }
    teachersArray.push(teachersData)
    window.localStorage.setItem("teachers", JSON.stringify(teachersArray))
    console.log(teachersData);

    setTimeout(() => {
        location.pathname = './html/dashboard.html'
    }, 300)
})


function renderSubjects(arr, list) {
    arr.forEach(subject => {
        let option = document.createElement("option")
        option.textContent = subject.name
        option.value = subject.id
        list.appendChild(option)
    });

}
renderSubjects(subjects, subjectsSelect)

function renderGenders(arr, list) {
    arr.forEach(gender => {
        let option = document.createElement("option")
        option.textContent = gender.name
        option.value = gender.id
        list.appendChild(option)
    });
}

renderClasses(classes, classesCon)

function renderClasses(arr, list) {
    arr.forEach(cls => {
        let option = document.createElement("option")
        option.textContent = cls.name
        option.value = cls.id
        list.appendChild(option)
    });
}

renderClasses(genders, document.getElementById("genders"))