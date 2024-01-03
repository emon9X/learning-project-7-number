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
