//---------Type Coercion: Implicit Conversion------
//---------String Coercion--------
/*
String + (Number+Null+Undefined+Boolean) => String
*/
let phoneNo;
const name = "mohib";
const age = 21;
const adult = true;
const gf = null;

const details = name + age + adult + phoneNo + gf;
console.log(details, typeof details);

/*
number + String                   => String

Number + (Null+Undefined+Boolean) => Number
Number - String                   => Number  value=NaN

*/

//Number + String
z = 21 + `21`;
console.log(z, typeof z);

z = 21 + `null`;
console.log(z, typeof z);

z = 21 + `true`;
console.log(z, typeof z);

z = 21 + `undefined`;
console.log(z, typeof z);

//Number + other
z = 21 + 21;
console.log(z, typeof z);

z = 21 + null;
console.log(z, typeof z);

z = 21 + true;
console.log(z, typeof z);

z = 21 + undefined;
console.log(z, typeof z);

//other then adding:- substracting string
z = 21 - `mohib`
console.log(z, typeof z)

z = 21-`21`;
console.log(z, typeof z)

z = 21-`true`;
console.log(z, typeof z)

z = 21-`null`;
console.log(z, typeof z)

z = 21-`undefined`;
console.log(z, typeof z)

//Number - other
z = 21 - 21;
console.log(z, typeof z);

z = 21 - null;
console.log(z, typeof z);

z = 21 - true;
console.log(z, typeof z);

z = 21 - undefined;
console.log(z, typeof z);

//other Methods
res=3.141592;
console.log(res.toExponential(3))
console.log(res.toFixed(4))
console.log(res.toPrecision(5))