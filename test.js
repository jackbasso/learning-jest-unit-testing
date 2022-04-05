// import the function sum from the app.js file
//const {sum, fromDollarToYen} = require('./app.js') SI QUIERO TRAER FUNCIONES ESPECIFICAS y solo las llamo directo abajo
const app = require('./app.js'); //aquí me traigo el objeto completo abajo debo utilizar app.nombrefuncion


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One dollar should be xx yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(3.5)

    const expected = (3.5 * 1.2)*(127.9); 
    
     expect(fromDollarToYen(3.5)).toBe(537.18); 
});
test("One yen should be xx pound", function(){
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(3.5)

    const expected = (3.5 * 127.90)*0.8; 

     expect(fromYenToPound(3.5)).toBe(358.12); 
});