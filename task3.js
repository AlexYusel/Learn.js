var petsAllowedInHogwarts = [
    "Owl",
    "Toad",
    "Hippogriff",
    "Rat",
    "Cat"
];

function result3()
{
    for (var i = 0; i < petsAllowedInHogwarts.length; i++)
    {
        if (petsAllowedInHogwarts[i] === "Hippogriff")
            var notAllowed = petsAllowedInHogwarts.splice(i, 1);
    }
    console.log("Pets ALLOWED in Hogwarts: " + petsAllowedInHogwarts + ";   NOT ALLOWED: " + notAllowed);
}



/*function result3()
{
    for (var i = 0; i < petsAllowedInHogwarts.length; i++)
    {
        if (petsAllowedInHogwarts[i] == "Hippogriff")
            delete petsAllowedInHogwarts[i];
    }
    console.log(petsAllowedInHogwarts);
}*/