var jsonData;

function setUp()
{
	document.getElementById('fileinput').addEventListener('change', readFile, false);
}

function readFile(evt) {
    //Retrieve all the files from the FileList object
	var files = evt.target.files; 
	document.getElementById("fileNameTextBox").value = files[0].name;
	if (files) 
	{
		var reader = new FileReader();
		reader.readAsText(files[0]);
		
		reader.onload = function() 
		{
			jsonData = JSON.parse(reader.result);
            //console.log("Name: "+files[0].name);
			//console.log("Size: "+files[0].size+" Bytes");
			parseData();//this function will parse the JSON into a more user friendly format
		}
	}
	else 
    {
	      console.warn("Failed to load files"); 
    }
}

function parseData()
{
    console.dir(jsonData);
}

function download(filename, text) {
    var ele = document.createElement('a');
    ele.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    ele.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        ele.dispatchEvent(event);
    }
    else {
        ele.click();
    }
}

function test()
{
	var temp = "Messages";
	var title = "Hangons"+".txt";
	download(title, temp);
}

window.onload = setUp;
//As seen on http://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file