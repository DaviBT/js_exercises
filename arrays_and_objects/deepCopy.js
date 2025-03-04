// Deep Copy (cópia profunda)
const htmlCourse = {
    course: "HTML",
    students: [{ name: "Rodrigo", email: "rodrigo@email.com" }],
}


const jsCourse = {
    ... htmlCourse,
    course: "Javascript",
    students: [ ... htmlCourse.students, { name: "João", email: "joao@email.com" } ],
}

    console. log(htmlCourse, jsCourse)