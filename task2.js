var users = [
    {
        name: "user1",
        numberOfProperties: 4,
        salary: 200,
        personality: "classified"
    },

    {
        name: "user2",
        numberOfProperties: 2
    },

    {
        name: "user3",
        numberOfProperties: 3,
        salary: 800
    },

    {
        name: "user4",
        numberOfProperties: 5,
        salary: 1100,
        personality: "classified",
        age: "classified"
    }
];

function compare(a, b)
{
    return Object.keys(b).length - Object.keys(a).length;
}

function result2()
{
    console.log(users.sort(compare));
}