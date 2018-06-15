var manufacturer = [
	"apple",
	"samsung",
	"nokia"
//, "nodata"
];
var appleModels = [
	"iPhone 1",
	"iPhone 2",
	"iPhone 13",
	"iPhone 100500 Plus",
	"iPhone X"
];
var samsungModels = [
	"Galaxy 1",
	"Galaxy 2",
	"Galaxy 13",
	"Galaxy 100500 Plus"
];
var nokiaModels = [
	"Nokia 1",
	"Nokia 2",
	"Nokia 13",
	"Nokia 100500 Plus"
];
var nodataModels = [
	"1",
	"2",
	"3"
];

//models dropdown
function cleanDropdown(selectbox)
{
	if (selectbox.options.length > 0)
	{
		selectbox.innerHTML = "";
	}
}

function showModels()
{
	//comment the line below to be able to reproduce the "Specified model doesn't exist in the selected manufacturer" error
	cleanDropdown(document.getElementById("model"));
	
	//get manufacturer value
	var selectedManufacturer = document.getElementById("manufacturer").value;

	if (selectedManufacturer !== "default")
	{
		var modelsArray = selectedManufacturer + "Models";
		var resultArray = window[modelsArray];
		var modelValues = document.getElementById("model");
		var option = document.createElement("option");
		option.text = "Please select";
		option.value = "default";
		modelValues.add(option);

		for (var i = 0; i < resultArray.length; i++)
		{
			var option = document.createElement("option");
			option.text = resultArray[i];
			option.value = resultArray[i];
			modelValues.add(option);
		}
	}
}

function generateReport()
{
	var displayError = document.getElementsByClassName("result")[0];
	displayError.innerHTML = "";
	var selectedManufacturer = document.getElementById("manufacturer").value;
	var selectedModel = document.getElementById("model").value;
	var errorMessage = validation(selectedManufacturer, selectedModel);

	if (errorMessage === "")
	{
		var table = document.createElement('table');
		table.setAttribute("id", "report");
		var row1 = table.insertRow(0);
		var cell1 = row1.insertCell(0);
		cell1.colSpan = 2;
		var cellText1 = document.createTextNode(selectedManufacturer);
		cell1.appendChild(cellText1);
		//display all models
		if (selectedModel === "default")
		{
			var modelsArray = selectedManufacturer + "Models";
			var resultArray = window[modelsArray];
			var rowNumber = 1;

			for (var i = 0; i < resultArray.length; i++)
			{
				addModelAndAvailability(table, resultArray[i]);
				rowNumber++;
			}
		}
		//display selected model
		else
		{
			addModelAndAvailability(table, selectedModel);
		}

		var div = document.getElementById('result');
		document.body.insertBefore(table, div);
	}

	else
	{
		var displayError = document.getElementsByClassName("result")[0];
		displayError.innerHTML = errorMessage;
	}
}

function validation(selectedManufacturer, selectedModel)
{
	var errorMessage = "";
	//remove previous table
	if (document.getElementById('report') !== null)
	{
		document.getElementById('report').remove();
	}

	if (selectedManufacturer === "default")
	{
		var errorMessage = "Please select a manufacturer";
	}
	//manufacturer selected
	else if (manufacturer.indexOf(selectedManufacturer) !== -1)
	{
		if (selectedModel !== "default")
		{
			var modelsArray = selectedManufacturer + "Models";
			var resultArray = window[modelsArray];
			var modelFound = false;

			for (var i = 0; i < resultArray.length; i++)
			{
				if (resultArray[i] === selectedModel)
				{
					modelFound = true;
					break;
				}
			}
			//model not found
			if (modelFound !== true)
			{
				//comment the line #43 to be able to reproduce the error
				var errorMessage = "Specified model doesn't exist in the selected manufacturer";
			}
		}
	}

	else
	{
		var errorMessage = "No data found";
	}
	return errorMessage;
}

function addModelAndAvailability(table, selectedModel)
{
	var row2 = table.insertRow(1);
	var cell2 = row2.insertCell(0);
	var cell3 = row2.insertCell(1);
	var cellText2 = document.createTextNode(selectedModel);
	cell2.appendChild(cellText2);
	var cellText3 = document.createElement('div');
	//model available
	if (selectedModel.length % 2 === 0)
	{
		cellText3.className = 'yes';
		cellText3.innerHTML = "Available";
	}
	//model not available
	else
	{
		cellText3.className = 'no';
		cellText3.innerHTML = "Not Available";
	}
	cell3.appendChild(cellText3);
}