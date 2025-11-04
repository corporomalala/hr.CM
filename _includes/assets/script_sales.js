/*** DATA ***/
var tempText = "";
var vPageHistorique = "";

var vSlug = document.querySelector("main").getAttribute("attr-slug");

var tagContainer4historique = document.querySelector(".js-historique");
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

				newTag4historique.innerHTML += "<div class='historique-list-item is-"+iContent[1]+"'><div><span>"+iContent[0]+"</span><span>"+iDate+"</span></div><div><span>"+tempText+"</span></div></div>";
				tempText = "";
			}
			newTag4historique.innerHTML += "<span>View Full Historique?</span>";
			tagContainer4historique.appendChild(newTag4historique);
		})
		.catch(error => {
			alert("data not found: " + error);
		});
		
//	tagContainer4historique.scrollTop = tagContainer4historique.scrollHeight;
}
/*** END FUNCTIONS ***/

/*** TOOLS ***/
/*** END TOOLS ***/