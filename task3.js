var petsAllowedInHogwarts = [
	"Owl",
	"Toad",
	"Hippogriff",
	"Rat",
	"Cat"
];

var notAllowed = 0;

function result3()
{
	for (var i = 0; i < petsAllowedInHogwarts.length; i++)
	{
		if (petsAllowedInHogwarts[i] === "Hippogriff")
		{
			notAllowed = petsAllowedInHogwarts.splice(i, 1);
		}
	}
	console.log("Pets ALLOWED in Hogwarts: " + petsAllowedInHogwarts + ";   NOT ALLOWED: " + notAllowed);
}