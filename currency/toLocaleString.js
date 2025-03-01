let amount = 12.5;

console.log(amount.toLocaleString(
    "pt-BR", {
        style: "currency",
        currency: 'BRL'
    }
))
// R$ 12,50


console.log(amount.toLocaleString(
    "en", {
        style: "currency",
        currency: "USD"
    }
))
// $12.50