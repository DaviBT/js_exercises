// shallow copy -> não pega itens aninhados
const htmlCourse = {
    course: "HTML",
    students: [{ name: "Rodrigo", email: "rodrigo@email.com" }],
}
const jsCourse = {
... htmlCourse,
course: "Javascript",
}
    
    // Vai modificar o htmlCourse também students é um referência e não uma cópia.
    // jsCourse. students.push({ name: "João", email: "joao@email.com" })