{
    let x = 3.14
    console.log(x);
}

{
    let x = 123e5
    console.log(x)
    let y = 123e-5
    console.log(y)
}

{
    let x = 0.1 + 0.2;
    console.log(x)
    let y = 0.4 + 0.1
    console.log(y)
}
{
    {
        let x = 10;
        let y = 20;
        let z = "The result is: " + x + y;
        console.log(z)
    }
}
{
    let x = 100 / "Apple";
    console.log(x)
    console.log(isNaN(x));
}
{
    let x = NaN;
    let y = 5;
    let z = x + y;
    console.log(z);
}
{
    let x = NaN;
    let y = "5";
    let z = x + y;
    console.log(z);
}
console.log(typeof NaN)

{
    let x = Infinity - Infinity;
    console.log(x)
}
{
    let x = 2 / 0;
    let y = -2 / 0;
    console.log(x, y)
}
console.log(typeof Infinity);

{
    let x = 0xFF;
    console.log(x)
}

{
    let x = 1234567890123456789012345n;
    let y = BigInt(1234567890123456789012345)
    console.log(typeof x)
    console.log(typeof y)
}

{
    let x = 9007199254740995n;
    let y = 9007199254740995n;
    let z = x * y;
    console.log(z)
}
{
    let x = 5n;
    // let y = x / 2;
    // console.log(y);
}
{
    let x = 5n;
    let y = Number(x) / 2;
    console.log(y);
}
{
    let x = Number.MAX_SAFE_INTEGER;
    let y = Number.MIN_SAFE_INTEGER;
    console.log(x, y)
}
{
    let x = Number.isSafeInteger(10);
    //                           9007199254740991
    let y = Number.isSafeInteger(9345678901234569);
    let z = Number.isInteger(9345678901234569);
    console.log(x, y, z)
}
// --------------------------------------------------------------------------------
// number methods 
/*Method	    Description
toString()	    Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	    Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
ValueOf()	    Returns a number as a number*/


//toString method
{
    let x = 123;
    console.log(x.toString());
    console.log((123).toString());
    console.log((100 + 23).toString());
}

//toExponential method
//exponential or scientific representation of number 
//The toExponential() method returns a string
// The parameter is optional. If you don't specify it, JavaScript will not round the number.
//The parameter specifies the number of decimal digits after decimal point.
{
    let x = 123;
    console.log(x.toExponential(2)); // 1.23x10^2 = 1.23e+2
    console.log(x.toExponential(3)); // 1.230x10^2 = 1.230e+2
}
{
    let num = 123456789;
    let exponential = num.toExponential(); // This converts the number to exponential notation
    console.log(exponential); // Output will be "1.23456789e+8"

}

//toFixed(digits after decimal point)
//toFixed() returns a string
{
    let num = 9.389;
    console.log(num.toFixed(1));
    console.log(num.toFixed(2));
    console.log(num.toFixed(4));
}

//toPrecision(length of digits)
{
    let num = 123.456789;
    console.log(num.toPrecision(2));
    console.log(num.toPrecision(3));
    console.log(num.toPrecision(4));
    console.log(num.toPrecision(5));
}

//valueOf method
//The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
{
    let x = 123;
    console.log(x.valueOf());
    console.log((123).valueOf());
    console.log((100 + 23).valueOf());
}

// ------------------------------------------------------------------------------------
/*Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert a variable to a number:

Method	        Description
Number()	    Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	    Parses its argument and returns a whole number

The methods above are not number methods. They are global JavaScript methods.
*/

//Number(variable)
{
    console.log(Number(true));
    console.log(Number(false));
    console.log(Number("10"));
    console.log(Number("  10"));
    console.log(Number("10  "));
    console.log(Number(" 10  "));
    console.log(Number("10.33"));
    console.log(Number("10,33"));
    console.log(Number("10 33"));
    console.log(Number("John"));
    console.log(typeof (Number('   10   ')))
}

//parseInt() 
{
    console.log(parseInt("-10"));
    console.log(parseInt("-10.33"));
    console.log(parseInt("10"));
    console.log(parseInt("10.33"));
    console.log(parseInt("10 20 30"));
    console.log(parseInt("10 years"));
    console.log(parseInt("years 10"));
}

//parseFloat()
{
    console.log(parseFloat("10"));
    console.log(parseFloat("10.33"));
    console.log(parseFloat("10 20 30"));
    console.log(parseFloat("10 years"));
    console.log(parseFloat("years 10"));
}
// --------------------------------------------------
//Number Object Methods
/**

Number.isInteger()	    Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	    Converts a string to a number
Number.parseInt()	    Converts a string to a whole number

 */
/*
The Number methods Number.parseInt() and Number.parseFloat()

are the same as the

Global methods parseInt() and parseFloat().

The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).
*/

// Number.parseFloat method 
{
    console.log(Number.parseFloat("10"));
    console.log(Number.parseFloat("10.33"));
    console.log(Number.parseFloat("10 20 30"));
    console.log(Number.parseFloat("10 years"));
    console.log(Number.parseFloat("years 10"));
}

//Number.parseInt method

{
    console.log(Number.parseInt("-10"));
    console.log(Number.parseInt("-10.33"));
    console.log(Number.parseInt("10"));
    console.log(Number.parseInt("10.33"));
    console.log(Number.parseInt("10 20 30"));
    console.log(Number.parseInt("10 years"));
    console.log(Number.parseInt("years 10"));
}