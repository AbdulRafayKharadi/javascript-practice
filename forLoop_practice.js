{
    // 1. Print numbers from 0 to 9 using a for loop.
    for(let i = 0; i < 10; i++)
        {
            console.log(i); // 0 1 2 3 4 5 6 7 8 9
        }
}
{
    // 2. Print numbers from 2 to 20, increasing by 2 each time.
    for(let i = 2; i <= 20; i += 2)
        {
            console.log(`Multiple of 2: ${i}`); // 2 4 6 8 10 12 14 16 18 20
        }
}
{
    // 3. Print numbers from 50 down to 40.
    for(let i = 50; i >= 40; i--)
        {
            console.log(`i ${i}`); // 50 49 48 47 46 45 44 43 42 41 40
        }
}
{
    // 4. Print numbers between 1–30 divisible by both 2 and 3
    for(let i = 1; i <= 30; i++)
    {   
        if(((i%2) === 0) && ((i%3) === 0))
        {
            console.log(i); // 6 12 18 24 30
        }
    }
}
{
    // 5. Print squares of numbers from 1 to 10.
    for( let i = 1; i <= 10; i++)
        {
            console.log(`square of ${i} is: ${i*i}`); // 1 4 9 16 25 36 49 64 81 100
        }
}
{
    // 6. Print cubes of numbers from 1 to 5.
    for( let i = 1; i <= 5; i++ )
        {
            console.log(`cube of ${i} is: ${i*i*i}`); // 1 8 27 64 125
        }
}
{
    // 7. Count numbers between 1–100 divisible by 7.
    let number = 0;
    for( let i = 7; i <= 100 ; i += 7 )
        {
            number++;
        }
    console.log(`Total numbers divisible by 7 between 1 to 100 are: ${number}`); // Total numbers divisible by 7 between 1 to 100 are: 14
}
{
    // 8. Print numbers from 1 to 20, replace multiples of 3 with “Fizz”.
    for( let i = 1; i <= 20; i++ )
        {
            if((i%3) === 0)
                {
                    console.log(`Fizz`);
                }
            else
                {
                    console.log(`${i}`)
                }
        }
}
{
    /* 9. Fix the bug:
        for(let i = 1; i <= 5; i–)
            {
                console.log(i);
            } */
    for( let i = 1; i <= 5; i++ )
        {
            console.log(i);
        }
}
{
    /* 10. Print pattern:
        *
        **
        ***
        ****
        *****  */
    for( let i = 1; i <= 5; i++ )
        {
            let row = "";
            for(j = 1; j <= i; j++)
                {
                    row += "*";
                }
            console.log(row);
        }
}