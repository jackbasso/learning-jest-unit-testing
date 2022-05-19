// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


let oneEuroIs =  {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen=(dollar)=>{
    let eur = dollar * oneEuroIs.USD
    let yen = eur * oneEuroIs.JPY
    return parseFloat(yen.toFixed(2))  
}
console.log(fromDollarToYen(1))

const fromEuroToDollar=(euro)=>{
    return euro * oneEuroIs.USD
}
console.log(fromEuroToDollar(1))

const fromYenToPound=(yen)=>{
    let eur = yen * oneEuroIs.JPY
    let gbp = eur * oneEuroIs.GBP
    return parseFloat(gbp.toFixed(2))
console.log(fromYenToPound(1))
}
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,
    fromDollarToYen, 
    fromEuroToDollar,
    fromYenToPound 
};

