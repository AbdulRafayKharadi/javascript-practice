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
{
    // 3. Print numbers from 1 to 5, but ensure loop runs at least once even if starting value is 10.
    let number = 10;
    do
        {
            console.log(`${number}`); // 10
            number++;
        }
    while(number <= 5);
}
{
    // 4. Print numbers from 10 to 1 using do...while.
    let number = 10;
    do
        {
            console.log(`${number}`); // 10 9 8 7 6 5 4 3 2 1
            number--;
        }
    while(number >= 1);
}