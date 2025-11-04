/*** DATA ***/
var vInput = "";

var btnClose = document.querySelector(".js-btnClose");

var tagForm = document.querySelector(".js-form"),
	tagFormInput = document.querySelector(".js-form input[type='text']");
/*** END DATA ***/

/*** EVENT LISTENERS ***/
btnClose.addEventListener("click", ()=>{ tagForm.classList.remove("is-open"); });

tagForm.addEventListener("submit", (e)=>{
	e.preventDefault();
	
	vInput = tagFormInput.value.trim();
//	if(aAccessCodes.includes(vInput)) {
	if(toolContainsWordIn2dArray(aAccessCodes, vInput)) {
		localStorage.setItem("user_token", true);
		localStorage.setItem("user_account", vInput);
		window.location.href = vDashboardPage;
	} else {
		addNotification("Access Denied!");
	}
});
/*** END EVENT LISTENERS ***/

/*** FUNCTIONS ***/
function openForm(theTag) {
//	document.querySelector(".form label span").innerHTML = theTag.innerHTML.replace("<br>", "");
	if(!tagForm.classList.contains("is-open")) { tagForm.classList.add("is-open"); }
}
/*** END FUNCTIONS ***/

/*** TOOLS ***/
function toolContainsWordIn2dArray(theArray, theWord) {
	return theArray.some(row => { return row.includes(theWord); });
}
/*** END TOOLS ***/