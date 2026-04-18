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
{
    // 5. Calculate sum from 1 to 10 using do...while.
    let number = 1;
    let sum = 0;
    do
        {
            sum += number;
            number++;
        }
    while(number <= 10);
    console.log(`Sum of numbers from 1 to 10: ${sum}`); // Sum of numbers from 1 to 10: 55
}
{
     // 6. Print multiplication table of 7 using do...while.
    let number = 1;
    do 
        {
            console.log(`7 * ${number} = ${7 * number}`); // will print 7 * 1 = 7 till 7 * 10 = 70
            number++;
        } 
    while (number <= 10);
}
{
    // 7. Count numbers divisible by 3 between 1-30.
    let number = 3;
    let totalMultiples = 0;
    do
        {
            totalMultiples ++;
            number += 3;
        }
    while(number <= 30);
    console.log(`Numbers that are Divisible by 3 between 1 to 30: ${totalMultiples}`); // Numbers that are Divisible by 3 between 1 to 30: 10
}
{
    // 8. Print numbers starting from 15, but stop when number becomes 20 👉 (observe first execution carefully)
    let number = 15;
    do
        {
            console.log(`${number}`); // 15 16 17 18 19
            number++;
        }
    while(number < 20);
}