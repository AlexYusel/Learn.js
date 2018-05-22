var salaries = {
    user1: 200,
    user2: 500,
    user3: 800,
    user4: 1100
};

var sum = 0;

function result1()
{
    if (Object.keys(salaries).length === 0)
    {
        console.log(0);
    }
    else
    {
        for (var value in salaries)
        {
            sum = sum + salaries[value]
        }
        console.log(sum);
    }
}