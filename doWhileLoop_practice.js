{
    // 1. Print numbers from 1 to 10 using do...while.
    let number = 1;
    do
        {
            console.log(`${number}`); // 1 2 3 4 5 6 7 8 9 10
            number++;
        }
    while(number <= 10);
}
{
    // 2. Ask user for a number and print it once even if it's invalid.
    let number;
    do
    {
           number = Number(prompt("Enter a valid number"));
            console.log(`Your number: ${number}`); // provided number by the user OR NaN
    }
    while(isNaN(number));
}