const date = new Date()

console.log(
    date.toLocaleString("pt-BR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
))
// 01/03/2025, 19:22


console.log(
    date.toLocaleString("eng", {
        dateStyle: "full"
    })
)
// Saturday, March 1, 2025


console.log(
    date.toLocaleString("en", {
        timeStyle: "medium"
    })
)
// 7:26:29 PM


console.log(
    date.toLocaleString("eng", {
        timeStyle: "short"
    })
)
// 7:25 PM