/*** DATA ***/
var vLoginPage = "/",
	vDashboardPage = "/sales/";
var aAccessCodes = [["123", "ABC"], ["admin", "Ella Malala"]];

var tagContainer4Notifications = document.querySelector(".js-uNotifications");
/*** END DATA ***/

/*** FUNCTIONS ***/
	/*** NOTIFICATIONS ***/
	var newTag4Notifications;
	function addNotification(theText) {
		newTag4Notifications = document.createElement("div");
		newTag4Notifications.innerHTML = theText + "<span onclick='closeNotification(this)'>&cross;</span>";

		tagContainer4Notifications.appendChild(newTag4Notifications);
	}
	function closeNotification(theTag) { theTag.closest("div").remove(); }
/*** END FUNCTIONS ***/

/*** SANDBOX ***/
/*** END SANDBOX ***/

/*** LIBRARY: authchecker.js ***/
(function() {
  // Simulate how you check if the user is logged in:
  // Option 1: From localStorage token
  // Option 2: From a cookie (for server-set sessions)
	
	redirectIfNeeded();

	function doLoginCheck() {
    // Example 1: localStorage method
		return !!localStorage.getItem("user_token");

    // Example 2 (alternative): check cookie
    // return document.cookie.includes("session_id=");
	}

	function redirectIfNeeded() {
//    var vISloginPage = window.location.pathname.includes("login");
		var vISloginPage = window.location.pathname === "/";
		var vISloggedIn = doLoginCheck();

		if (!vISloggedIn && !vISloginPage) {
      // Not logged in → redirect to login
//	  alert(window.location.pathname);
			document.body.style.display = "none";
			window.location.href = vLoginPage;
		}

		if (vISloggedIn && vISloginPage) {
      // Already logged in → skip login page
			window.location.href = vDashboardPage;
		}
	}
})();
/*** END LIBRARY: authchecker.js ***/