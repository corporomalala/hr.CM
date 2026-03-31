/*** DATA ***/
var tempText = "", tempClassName = "";
var vPageRecords, vPageStatusPoints;

var vSlug = document.querySelector("main").getAttribute("attr-slug");

var tagContainer4records = document.querySelector(".js-records"),
	tagMain = document.querySelector("main");
/*** END DATA ***/

/*** SETUP ***/
getRecords();
getStatusPoints();
/*** SETUP ***/

/*** EVENT LISTENERS ***/
/*** END EVENT LISTENERS ***/

/*** FUNCTIONS ***/
async function getRecords() {
	JSfetch("records");

//	tagContainer4records.scrollTop = tagContainer4records.scrollHeight;
}
async function getStatusPoints() { JSfetch("status"); }

function doNav(theTag) {
	tempClassName = theTag.classList;
	
	tagMain.classList.remove("is-dashboard");
	tagMain.classList.remove("is-catalog");
	tagMain.classList.remove("is-payslips");
	
	if(tempClassName.contains("is-dashboard")) { theTag.classList.add("is-dashboard"); tagMain.classList.add("is-dashboard"); }
	else if(tempClassName.contains("is-catalog")) { theTag.classList.add("is-catalog"); tagMain.classList.add("is-catalog"); }
	else if(tempClassName.contains("is-payslips")) { theTag.classList.add("is-payslips"); tagMain.classList.add("is-payslips"); }
}
/*** END FUNCTIONS ***/

/*** TOOLS ***/
function JSfetch(theVar) {
	fetch("/json/" + vSlug + ".json")
		.then(response => response.json())
		.then(data => {
			if(theVar == "status") {
				vPageStatusPoints = data.status;
				
				tempText = "";
				var newTag4statusPoints = document.createElement("div");
				for(var iLevel in vPageStatusPoints) {
//					alert(iLevel);
				}
			}
			
			if(theVar == "records") {
				vPageRecords = data.records;
				
				tempText = "";
				var newTag4records = document.createElement("div");
				for(var iDate in vPageRecords) {
					var iContent = vPageRecords[iDate];

					if(iContent[1] == "green") { tempText = "&check;"; }
					if(iContent[1] == "blue") { tempText = "&larr;"; }
					if(iContent[1] == "red") { tempText = "&cross;"; }
					if(iContent[1] == "gray") { tempText = "&uarr;"; }

					newTag4records.innerHTML += "<div class='records-list-item is-"+iContent[1]+"'><div class='records-list-content'><span>"+iContent[0]+"</span><span>"+iDate+"</span></div><div><span class='records-list-icon'>"+tempText+"</span></div></div>";
					tempText = "";
				}
				newTag4records.innerHTML += "<span>View Full Records?</span>";
				tagContainer4records.appendChild(newTag4records);
			}
		})
		.catch(error => {
			alert("data not found: " + error);
		});
}
/*** END TOOLS ***/