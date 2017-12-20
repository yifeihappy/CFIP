function userIDtianjia() {
	var userID = "";
	var urlParam = decodeURI(window.location.href);
	var urlParamArray = urlParam.split("userID=");
	if(urlParamArray.length != 1) {
		//		console.log(urlParamArray[1]);
		//		userID = urlParamArray[1].substr(1);
		//		console.log(userID);
		userID = urlParamArray[1];
		console.log(userID);

	} else {
		console.log("User has not login in!");
	}

	if("" == userID) {
		console.log(userID)
		if($("#HRxinyuanqiang").length > 0) {
			$("#HRxinyuanqiang").click(function() {
				var hrefURL = encodeURI("xinyuanqiang.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		if($("#HRbiaobaiqiang").length > 0) {
			$("#HRbiaobaiqiang").click(function() {
				var hrefURL = encodeURI("biaobaiqiang.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		if($("#HRxianwudian").length > 0) {
			$("#HRxianwudian").click(function() {
				var hrefURL = encodeURI("xianwudian.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
	} else {
		if($("#HRxinyuanqiang").length > 0) {
			console.log($("#HRxinyuanqiang").length);
			$("#HRxinyuanqiang").click(function() {
				var hrefURL = encodeURI("xinyuanqiang.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		if($("#HRbiaobaiqiang").length > 0) {
			$("#HRbiaobaiqiang").click(function() {
				var hrefURL = encodeURI("biaobaiqiang.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		if($("#HRxianwudian").length > 0) {
			$("#HRxianwudian").click(function() {
				var hrefURL = encodeURI("xianwudian.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
	}
	//     "../../cfip/dengshen/xinyuanqiang.html?userID=" + userID;

}