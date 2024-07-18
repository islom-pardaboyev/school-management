let logOut = document.querySelector("#logOut").addEventListener('click', () => {
    let confirmLogOut = confirm("do you want to log out")
    if (confirmLogOut) {
        localStorage.clear()
        setTimeout(() => {
            window.localStorage.clear()
            location.pathname = '../index.html'
        }, 500)
    }
})

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

let teachersArray = JSON.parse(window.localStorage.getItem("teachers")) || []

function renderTeachers(arr, list) {
    list.innerHTML = null
    arr.forEach(teacher => {
        let elTR = document.createElement("tr")
        elTR.className = "bg-white border-b even:bg-[#F5FAFF]"
        elTR.innerHTML = `
         <th scope="row" class="font-medium ">
                <div class="flex items-center gap-2">
                    <img class="rounded ml-4 my-auto" width="24" height="24"
                        src=${teacher.imgUrl} alt="">
                    <p>${teacher.fullName}</p>
                </div>
            </th>
            <td class="px-6 py-4 text-black">
                <p>${subjects[teacher.subjectsSelect - 1].name}</p>
            </td>
            <td class="px-6 py-4 text-black">
                <p>${classes[teacher.classclasses
                    - 1].name}</p>
            </td>
            <td class="px-6 py-4">
                ${teacher.email}
            </td>
            <td class="px-6 py-4">
                ${genders[teacher.gender - 1].name}
            </td>
            <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                    <p class="text-white rounded-md p-2 cursor-pointer bg-green-600">Update</p>
                    <p class="text-white rounded-md p-2 cursor-pointer bg-red-600">Delete</p>
                </div>
            </td>
    `
    list.append(elTR)
    });
}

renderTeachers(teachersArray, document.querySelector("#table_con"))
