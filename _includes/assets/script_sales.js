/*** DATA ***/
var tempText = "", tempClassName = "";
var vPageHistorique = "";

var vSlug = document.querySelector("main").getAttribute("attr-slug");

var tagContainer4historique = document.querySelector(".js-records"),
	tagMain = document.querySelector("main");
/*** END DATA ***/

/*** SETUP ***/
getHistorique();
/*** SETUP ***/

/*** EVENT LISTENERS ***/
/*** END EVENT LISTENERS ***/

/*** FUNCTIONS ***/
async function getHistorique() {
	fetch("/json/" + vSlug + ".json")
		.then(response => response.json())
		.then(data => {
			vPageHistorique = data.historique;
			
			tempText = "";
			var newTag4historique = document.createElement("div");
			for(var iDate in vPageHistorique) {
				var iContent = vPageHistorique[iDate];

				if(iContent[1] == "green") { tempText = "&check;"; }
				if(iContent[1] == "blue") { tempText = "&larr;"; }
				if(iContent[1] == "red") { tempText = "&cross;"; }
				if(iContent[1] == "gray") { tempText = "&uarr;"; }

				newTag4historique.innerHTML += "<div class='records-list-item is-"+iContent[1]+"'><div class='records-list-content'><span>"+iContent[0]+"</span><span>"+iDate+"</span></div><div><span class='records-list-icon'>"+tempText+"</span></div></div>";
				tempText = "";
			}
			newTag4historique.innerHTML += "<span>View Full Records?</span>";
			tagContainer4historique.appendChild(newTag4historique);
		})
		.catch(error => {
			alert("data not found: " + error);
		});
		
//	tagContainer4historique.scrollTop = tagContainer4historique.scrollHeight;
}

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
/*** END TOOLS ***/