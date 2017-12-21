function isSignIn() {
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
	//user has not signed in
	if("" == userID) {
		console.log("userID==null");
		$("#userCenterLI").hide();
		$("#publishLI").hide();
		$("#signinLI").show();
		$("#signupLI").show();
		$("#chat").hide();

		if($("#chat").length > 0) {
			$("#chact").click(function() {
				var indexUrl = encodeURI("/CFIP/cfip/chat/chat.html");
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;
			});
		}
		if($("#act").length > 0) {
			$("#act").click(function() {
				var indexUrl = encodeURI("/CFIP/cfip/act/act.html");
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;
			});
		}
		if($("#topic").length > 0) {
			$("#topic").click(function() {
				var indexUrl = encodeURI("/CFIP/cfip/topic/topic.html");
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;

			});
		}
		if($("#dengShen").length > 0) {
			$("#dengShen").click(function() {
				var indexUrl = encodeURI("/CFIP/cfip/dengshen/xinyuanqiang.html");
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;
			});
		}

		if($("#CFIP").length > 0) {
			$("#CFIP").click(function() {
				var indexUrl = encodeURI("/CFIP/index.html");
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;
			});
		}

		return "";
	} else {
		console.log("userID=" + userID);
		$("#signinLI").hide();
		$("#signupLI").hide();
		$("#userCenterLI").show();
		$("#publishLI").show();
		$("#chat").show();
		$("#addAct").click(function() {
			var indexUrl = encodeURI("/CFIP/cfip/act/addAct.html?userID=" + userID);
			console.log(indexUrl);
			window.location.href = indexUrl;
			return false;
		});
		$("#addTopic").click(function() {
			var indexUrl = encodeURI("/CFIP/cfip/topic/addTopic.html?userID=" + userID);
			console.log(indexUrl);
			window.location.href = indexUrl;
			return false;

		});
		$("#addXinYuan").click(function() {
			var indexUrl = encodeURI("/CFIP/cfip/dengshen/addAct.html?userID=" + userID);
			console.log(indexUrl);
			window.location.href = indexUrl;
			return false;

		});
		$("#addWall").click(function() {
			var indexUrl = encodeURI("/CFIP/cfip/dengshen/add_dengshen.html?userID=" + userID);
			console.log(indexUrl);
			window.location.href = indexUrl;
			return false;
		});

		if($("#chat").length > 0) {
			$("#chact").click(function() {
				var indexUrl = encodeURI("/CFIP/cfip/chat/chat.html?userID=" + userID);
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;
			});
		}
		if($("#act").length > 0) {
			$("#act").click(function() {
				var indexUrl = encodeURI("/CFIP/cfip/act/act.html?userID=" + userID);
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;
			});
		}
		if($("#topic").length > 0) {
			$("#topic").click(function() {
				var indexUrl = encodeURI("/CFIP/cfip/topic/topic.html?userID=" + userID);
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;
			});
		}
		if($("#dengShen").length > 0) {
			$("#dengShen").click(function() {
				var indexUrl = encodeURI("/CFIP/cfip/dengshen/xinyuanqiang.html?userID=" + userID);
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;
			});
		}
		if($("#CFIP").length > 0) {
			$("#CFIP").click(function() {
				var indexUrl = encodeURI("/CFIP/index.html?userID=" + userID);
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;
			})
		}

		if($("#userCenterID").length > 0) {
			$("#userCenterID").click(function() {
				var indexUrl = encodeURI("/CFIP/cfip/personal center/personal information.html?userID=" + userID);
				console.log(indexUrl);
				window.location.href = indexUrl;
				return false;
			})
		}
		return userID;
	}
}

function IsHasNewMessage() {
	var flagF = false;
	$.ajax({
		type: "get",
		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Message/?Message.touserid=" + userID,
		async: false,
		success: function(data, state) {
			if(typeof(data) != "{}") {
				//遍历所有消息
				for(var i = 0; i < data.Message.length; i++) {
					if(data.Message[i].state == "1") { //找出未读消息
						flagF = true;
						break;
					}
				}
			}
		},
		error: function(data, state) {}
	});
	return flagF;
}

//var userID = "";
//$(document).ready(function() {
//	var urlParam = window.location.href;
//	var urlParamArray = urlParam.split("userID");
//	if(urlParamArray.length != 1) {
//		console.log(urlParamArray[1]);
//		userID = urlParamArray[1].substr(1);
//		console.log(userID)
//
//	} else {
//		console.log("User has not login in!")
//	}
//	if("" == userID) {
//		console.log("userID==null");
//		$("#userCenterLI").hide();
//		$("#publishLI").hide();
//		$("#signinLI").show();
//		$("#signupLI").show();
//	} else {
//		console.log("userID=" + userID);
//		$("#signinLI").hide();
//		$("#signupLI").hide();
//		$("#userCenterLI").show();
//		$("#publishLI").show();
//	}
//	
//});

//function getByStudentNumber(studentNumber) {
//	var student;
//	$.ajax({
//		type: "get",
//		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/?Student.studentnumber=" + studentNumber,
//		async: false,
//		success: function(data, state) {
//			console.log(state);
//			console.log(data);
//			console.log(data.Student[0].studentname);
//			student = data.Student[0];
//			//return data;
//		}
//	});
//	return student;
//}
//
//function getByTeacherNumber(teacherNumber) {
//	var teacher;
//	$.ajax({
//		type: "get",
//		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/?Student.studentnumber=" + studentNumber,
//		async: true,
//		success: function(data, state) {
//			console.log(state);
//			console.log(data);
//			teacher = data.Teacher[0];
//		}
//	});
//	return teacher;
//}
//
//function getByAdminNumber(adminNumber) {
//	var admin;
//	$.ajax({
//		type: "get",
//		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Student/?Student.studentnumber=" + studentNumber,
//		async: true,
//		success: function(data, state) {
//			console.log(state);
//			console.log(data);
//			admin = data.Admin[0];
//			return data;
//		}
//	});
//	return admin;
//}