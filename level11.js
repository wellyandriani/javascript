//level 11
console.log("LEVEL 11");

var Q = ("20")
var S = ("15")

if (Q==10)
{
    nResult = Q % S;
    console.log("Result:", nResult)
}
else if (Q < 10)
{
    nResult = Q * S;
    console.log("Result:", nResult)
}
else if (Q > 10)
{
    nResult = Q && S;
    console.log("Result:", nResult)
}
else if (Q < S)
{
    nResult = Q || S;
    console.log("Result:", nResult)
}
else if (Q > S)
{
    nResult = Q + S;
    console.log("Result:", nResult)
}
else if (Q == S)
{
    nResult = Q - S;
    console.log("Result:", nResult)
}
else{
    console.log("Good Luck");
}