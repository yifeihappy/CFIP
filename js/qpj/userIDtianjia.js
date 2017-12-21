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
		
		if($("#HRpersonalinformation").length > 0) {
			$("#HRpersonalinformation").click(function() {
				var hrefURL = encodeURI("personal information.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmyact").length > 0) {
			$("#HRmyact").click(function() {
				var hrefURL = encodeURI("my act.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmytopic").length > 0) {
			$("#HRmytopic").click(function() {
				var hrefURL = encodeURI("my topic.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRxinyuanqiang").length > 0) {
			$("#HRxinyuanqiang").click(function() {
				var hrefURL = encodeURI("xinyuanqiang.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmymessage").length > 0) {
			$("#HRmymessage").click(function() {
				var hrefURL = encodeURI("");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmywish").length > 0) {
			$("#HRmywish").click(function() {
				var hrefURL = encodeURI("my wish.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmyexpress").length > 0) {
			$("#HRmyexpress").click(function() {
				var hrefURL = encodeURI("my express.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmysparethings").length > 0) {
			$("#HRmysparethings").click(function() {
				var hrefURL = encodeURI("my spare things.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRinformationupdate").length > 0) {
			$("#HRinformationupdate").click(function() {
				var hrefURL = encodeURI("information update.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRinformationupdate2").length > 0) {
			$("#HRinformationupdate2").click(function() {
				var hrefURL = encodeURI("information update.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRchangepasswords").length > 0) {
			$("#HRchangepasswords").click(function() {
				var hrefURL = encodeURI("change passwords.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmyapply_zhuxuejin").length > 0) {
			$("#HRmyapply_zhuxuejin").click(function() {
				var hrefURL = encodeURI("myapply_zhuxuejin.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRzhuxuejin").length > 0) {
			$("#HRzhuxuejin").click(function() {
				var hrefURL = encodeURI("myapply_zhuxuejin.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRjiangxuejin").length > 0) {
			$("#HRjiangxuejin").click(function() {
				var hrefURL = encodeURI("myapply_jiangxuejin.html");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRaddapply").length > 0) {
			$("#HRaddapply").click(function() {
				var hrefURL = encodeURI("myapply_addapply.html");
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
		
				if($("#HRpersonalinformation").length > 0) {
			$("#HRpersonalinformation").click(function() {
				var hrefURL = encodeURI("personal information.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmyact").length > 0) {
			$("#HRmyact").click(function() {
				var hrefURL = encodeURI("my act.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmytopic").length > 0) {
			$("#HRmytopic").click(function() {
				var hrefURL = encodeURI("my topic.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRxinyuanqiang").length > 0) {
			$("#HRxinyuanqiang").click(function() {
				var hrefURL = encodeURI("xinyuanqiang.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmymessage").length > 0) {
			$("#HRmymessage").click(function() {
				var hrefURL = encodeURI("");
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmywish").length > 0) {
			$("#HRmywish").click(function() {
				var hrefURL = encodeURI("my wish.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmyexpress").length > 0) {
			$("#HRmyexpress").click(function() {
				var hrefURL = encodeURI("my express.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmysparethings").length > 0) {
			$("#HRmysparethings").click(function() {
				var hrefURL = encodeURI("my spare things.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRinformationupdate").length > 0) {
			$("#HRinformationupdate").click(function() {
				var hrefURL = encodeURI("information update.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRinformationupdate2").length > 0) {
			$("#HRinformationupdate2").click(function() {
				var hrefURL = encodeURI("information update.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRchangepasswords").length > 0) {
			$("#HRchangepasswords").click(function() {
				var hrefURL = encodeURI("change passwords.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRmyapply_zhuxuejin").length > 0) {
			$("#HRmyapply_zhuxuejin").click(function() {
				var hrefURL = encodeURI("myapply_zhuxuejin.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRzhuxuejin").length > 0) {
			$("#HRzhuxuejin").click(function() {
				var hrefURL = encodeURI("myapply_zhuxuejin.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRjiangxuejin").length > 0) {
			$("#HRjiangxuejin").click(function() {
				var hrefURL = encodeURI("myapply_jiangxuejin.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		if($("#HRaddapply").length > 0) {
			$("#HRaddapply").click(function() {
				var hrefURL = encodeURI("myapply_addapply.html?userID=" + userID);
				console.log(hrefURL);
				window.location.href = hrefURL;
				return false;
			});
		}
		
		
		
		
		
		
		
		
		
		
	}
	//     "../../cfip/dengshen/xinyuanqiang.html?userID=" + userID;

}