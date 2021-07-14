function plus(x){

    console.log(arguments[0]);
    return  x+1;
};

console.log(plus(5,6,7));
const plus1 = (x) => {
    console.log(arguments);
    console.log(this);
    return x+1;
};

// console.log('plus1 : '+plus1(5));
const plus2 = (x,y) => x+y;

let sum = plus2(34,4);
console.log(sum);

function square(x){
    return x * x;
}

console.log(square(plus2(5,4)));

function TaxCalculationFunctions (){
    taxRate = 2.0;

     taxRate = ()=>{
        this.taxRate;
    }
    return {
        calculateTax(principal, tax) {

            return principal+tax;
        },
        printTaxInfo(taxId){
            console.log("Printed Tax Info")
        }
    }

}

const taxCalculator = TaxCalculationFunctions();
taxCalculator.printTaxInfo("fdf");


setInterval(()=> {
    console.log(' time now is '+ new Date());
},1000);
//Arrow functions - Lambda functions