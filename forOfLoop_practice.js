{
    /* 1.Print each value using for…of. 
    Given: arr = [10, 20, 30]; */
    let arr = [10, 20, 30];
for( const val of arr)
    {
        console.log(`value: ${val}`);
    }
}
{
    /* 2. Print each character of a string:
    let str = “hello”; */
    let str = "hello";
    for(const letter of str)
        {
            console.log(`alphabet: ${letter}`);
        }
}
{
    /* 3. Count how many elements in an array are greater than 50.
        let arr = [10, 50, 32, 96, 53, 107]; */
        let arr = [10, 50, 32, 96, 53, 107];
        let count = 0;
        for(const val of arr)
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
{
    /* 5. Convert all elements of an array to uppercase and print them.
    let arr = [a, b, c, d, e]; */
    let arr = ["a", "b", "c", "d", "e"];
    for (const ch of arr) 
        {
            console.log(ch.toUpperCase());
        }
}
{
    // 6. Print only strings from a mixed array: [1, “hi”, true, “JS”, 5]
    let arr = [1, 'hi', true, 'JS', 5];
    for (const str of arr) 
        {
            if(typeof str === "string")
            {
                console.log(str);
            }
        }
}
{
    /* 7. Count how many vowels are in a string.
    let str = "javascript"; */
    let str = "javascript";
    let count = 0;
    for (const ch of str) 
        {
            if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u")
                {
                    count++;
                }
        }
    console.log(`Vowels in a word ${str} are: ${count}`);    
}
{
    /* 8. Print all values of an array except null and undefined.
    let arr = [10, 50, 32, undefined, 53, 107, ,20, null]; */
    let arr = [10, 50,"X", 32, undefined,"a", 53, 107, ,20, null];
    for (const val of arr) 
        {
            if (val != null)
                {
                    console.log(`element: ${val}`);
                }
        }
}

