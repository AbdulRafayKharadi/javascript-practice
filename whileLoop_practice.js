{
    // 1. Print numbers from 1 to 10 using a while loop. 
    let number = 1;
    while ( number <= 10 )
        {
            console.log(number); // 1 2 3 4 5 6 7 8 9 10
            number++;
    } 
}
{
    // 2. Print numbers from 10 to 1 (reverse).
    let number = 10;
    while(number >= 1)
        {
            console.log(number); // 10 9 8 7 6 5 4 3 2 1
            number--;
        }
}
{
    // 3. Print all even numbers from 1 to 20.
    let evenNumber = 2;
    while (evenNumber <= 20)
        {
            console.log(evenNumber); // 2 4 6 8 10 12 14 16 18 20
            evenNumber += 2;
        }
}
{
    // 4. Print all odd numbers from 1 to 15.
    let oddNumber = 1;
    while(oddNumber <= 15)
        {
            console.log(oddNumber); // 1 3 5 7 9 11 13 15
            oddNumber += 2;
        }
}
{
    // 5. Find the sum of numbers from 1 to 10.
    let number = 1;
    let sum = 0;
    while(number <= 10)
        { 
            sum += number; 
            number++;
        }
    console.log(sum); // 55
}
{
    // 6. Print multiplication table of 5 (5 × 1 → 5 × 10).
    let number = 1;
    let multiple = 5;
    while(number <= 10 )
        {
            console.log(`${5} * ${number} = ${multiple} `); // will print 5 * 1 = 5 till 5 * 10 = 50
            number++;
            multiple +=5;
        }
}
{
    // 7. Count how many numbers between 1–50 are divisible by 5.
    let number = 5;
    let totalMultiples = 0;
    while (number <= 50)
        {
            totalMultiples++;
            number += 5;
        }
    console.log(`Total Numbers Divisible by 5 are: ${totalMultiples}`); // 10
}
{
    // 8. Print numbers from 1 to 20, but stop when number = 13.
    let number = 1;
    while(number <= 20)
        {
            if(number === 13)
                {
                    break;
                }
            console.log(`${number}`); // 1 2 3 4 5 6 7 8 9 10 11 12 13
            number++;
        }

}
{
    // 9. Print numbers from 1 to 10, but skip 5.
    let number = 1;
    while( number <= 10)
        {
            if(number !== 5)
                {
                    console.log(`number: ${number}`); // 1 2 3 4 6 7 8 9 10
                }
            number++;        
        }
}