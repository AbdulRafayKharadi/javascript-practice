{
    // 1.Print each value using for…of. 
    // Given: arr = [10, 20, 30];
    let arr = [10, 20, 30];
for( let val of arr)
    {
        console.log(`value: ${val}`);
    }
}
{
    /* 2. Print each character of a string:
    let str = “hello”; */
    let str = "hello";
    for(let letter of str)
        {
            console.log(`alphabet: ${letter}`);
        }
}
{
    /* 3. Count how many elements in an array are greater than 50.
        let arr = [10, 50, 32, 96, 53, 107]; */
        let arr = [10, 50, 32, 96, 53, 107];
        let count = 0;
        for(let val of arr)
            {
                if(val > 50)
                    {
                        count++;
                    }
            }
        console.log(`Values greater than 50 in the array are: ${count}`);
}
{
    /* 4. Find the sum of all numbers in an array using for…of.
    let arr = [10, 50, 32, 96, 53, 107]; */
    let arr = [10, 50, 32, 96, 53, 107];
    let sum = 0;
    for (const val of arr) 
        {
            sum += val;
        }
    console.log(`sum of all numbers of array is: ${sum}`);    
}
