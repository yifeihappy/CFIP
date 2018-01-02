function addLiClick() {
	$("#searchBtn").click(function() {
		window.event.returnValue = false;
		var searchName = $("#searchInput").val();
		console.log("search");
		$.ajax({
			type: "get",
			url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Activity/?Activity.actname=(like)" + searchName,
			async: true,
			success: function(data, state) {
				console.log(state);
				console.log(data);
				$("#act-thumbnails").empty();
				if("{}" != JSON.stringify(data)) {

					for(var i = 0; i < data.Activity.length; i++) {
						var hTitle = $("<h3></h3>").text(data.Activity[i].actname);
						var pAddr = $("<p></p>").text("活动地点：" + data.Activity[i].actaddress);
						var pActTime = $("<p></p>").text("活动时间：" + data.Activity[i].actstart + "至" + data.Activity[i].actend);
						var pSponser = $("<p></p>").text("主办单位：" + data.Activity[i].actsponser);
						var pNumber = $("<p></p>").text("报名人数：" + data.Activity[i].participantnumber + "|" + data.Activity[i].totalnumber);
						var pApplyEnd = $("<p></p>").text("报名截止：" + data.Activity[i].applyend);
						var divCaption = $("<div class='col-md-8 col-sm-8 col-xs-8  caption'></div>");
						divCaption.append(hTitle, pAddr, pActTime, pSponser, pNumber, pApplyEnd);

						var imgAct = $("<img></img>").attr({
							"src": "http://112.74.35.75:8080/file/U3d616b41047817/CFIP/Activity/" + data.Activity[i].id,
							"alt": "...."
						});
						var divThumbnail = $("<div class='col-md-4 col-sm-4 col-xs-4 thumbnail'></div>");
						divThumbnail.append(imgAct);

						var divRow1 = $("<div class='row'></div>");
						divRow1.append(divThumbnail, divCaption);

						var div1 = $("<div class='col-md-8 col-md-offset-2'></div>");
						div1.append(divRow1, $("<hr>"));

						var actDetailUrl;
						if("" == userID) {
							actDetailUrl = "/CFIP/cfip/act/actDetail.html?actID=" + data.Activity[i].id;
						} else {
							actDetailUrl = encodeURI("/CFIP/cfip/act/actDetail.html?actID=" + data.Activity[i].id + "userID=" + userID);
						}

						var actDetailA = $("<a></a>").attr("href", actDetailUrl);
						actDetailA.append(div1);

						var divRow2 = $("<div class='row'></div>");
						divRow2.append(actDetailA);

						$("#act-thumbnails").append(divRow2);
					}

				}

			},
			error: function(data, state) {
				console.log(state);
				console.log(data);
			}
		});
	});
}

function addSortBtn() {
	$("#sortByHot").click(function() {
		window.event.returnValue = false;
		var searchName = $("#searchInput").val();
		console.log("search");
		$.ajax({
			type: "get",
			url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Activity/",
			async: true,
			success: function(data, state) {
				console.log(state);
				console.log(data);
				$("#act-thumbnails").empty();
				if("{}" != JSON.stringify(data)) {
					var dataArr = data.Activity;
					dataArr.sort(compare("participantnumber"))
					for(var i = 0; i < data.Activity.length; i++) {
						var hTitle = $("<h3></h3>").text(data.Activity[i].actname);
						var pAddr = $("<p></p>").text("活动地点：" + data.Activity[i].actaddress);
						var pActTime = $("<p></p>").text("活动时间：" + data.Activity[i].actstart + "至" + data.Activity[i].actend);
						var pSponser = $("<p></p>").text("主办单位：" + data.Activity[i].actsponser);
						var pNumber = $("<p></p>").text("报名人数：" + data.Activity[i].participantnumber + "|" + data.Activity[i].totalnumber);
						var pApplyEnd = $("<p></p>").text("报名截止：" + data.Activity[i].applyend);
						var divCaption = $("<div class='col-md-8 col-sm-8 col-xs-8  caption'></div>");
						divCaption.append(hTitle, pAddr, pActTime, pSponser, pNumber, pApplyEnd);

						var imgAct = $("<img></img>").attr({
							"src": "http://112.74.35.75:8080/file/U3d616b41047817/CFIP/Activity/" + data.Activity[i].id,
							"alt": "...."
						});
						var divThumbnail = $("<div class='col-md-4 col-sm-4 col-xs-4 thumbnail'></div>");
						divThumbnail.append(imgAct);

						var divRow1 = $("<div class='row'></div>");
						divRow1.append(divThumbnail, divCaption);

						var div1 = $("<div class='col-md-8 col-md-offset-2'></div>");
						div1.append(divRow1, $("<hr>"));

						var actDetailUrl;
						if("" == userID) {
							actDetailUrl = "/CFIP/cfip/act/actDetail.html?actID=" + data.Activity[i].id;
						} else {
							actDetailUrl = encodeURI("/CFIP/cfip/act/actDetail.html?actID=" + data.Activity[i].id + "userID=" + userID);
						}

						var actDetailA = $("<a></a>").attr("href", actDetailUrl);
						actDetailA.append(div1);

						var divRow2 = $("<div class='row'></div>");
						divRow2.append(actDetailA);

						$("#act-thumbnails").append(divRow2);
					}

				}

			},
			error: function(data, state) {
				console.log(state);
				console.log(data);
			}
		});
	});

	$("#sortByView").click(function() {
		window.event.returnValue = false;
		var searchName = $("#searchInput").val();
		console.log("search");
		$.ajax({
			type: "get",
			url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Activity/",
			async: true,
			success: function(data, state) {
				console.log(state);
				console.log(data);
				$("#act-thumbnails").empty();
				if("{}" != JSON.stringify(data)) {
					var dataArr = data.Activity;
					dataArr.sort(compare("viewernumber"))
					for(var i = 0; i < data.Activity.length; i++) {
						var hTitle = $("<h3></h3>").text(data.Activity[i].actname);
						var pAddr = $("<p></p>").text("活动地点：" + data.Activity[i].actaddress);
						var pActTime = $("<p></p>").text("活动时间：" + data.Activity[i].actstart + "至" + data.Activity[i].actend);
						var pSponser = $("<p></p>").text("主办单位：" + data.Activity[i].actsponser);
						var pNumber = $("<p></p>").text("报名人数：" + data.Activity[i].participantnumber + "|" + data.Activity[i].totalnumber);
						var pApplyEnd = $("<p></p>").text("报名截止：" + data.Activity[i].applyend);
						var divCaption = $("<div class='col-md-8 col-sm-8 col-xs-8  caption'></div>");
						divCaption.append(hTitle, pAddr, pActTime, pSponser, pNumber, pApplyEnd);

						var imgAct = $("<img></img>").attr({
							"src": "http://112.74.35.75:8080/file/U3d616b41047817/CFIP/Activity/" + data.Activity[i].id,
							"alt": "...."
						});
						var divThumbnail = $("<div class='col-md-4 col-sm-4 col-xs-4 thumbnail'></div>");
						divThumbnail.append(imgAct);

						var divRow1 = $("<div class='row'></div>");
						divRow1.append(divThumbnail, divCaption);

						var div1 = $("<div class='col-md-8 col-md-offset-2'></div>");
						div1.append(divRow1, $("<hr>"));

						var actDetailUrl;
						if("" == userID) {
							actDetailUrl = "/CFIP/cfip/act/actDetail.html?actID=" + data.Activity[i].id;
						} else {
							actDetailUrl = encodeURI("/CFIP/cfip/act/actDetail.html?actID=" + data.Activity[i].id + "userID=" + userID);
						}

						var actDetailA = $("<a></a>").attr("href", actDetailUrl);
						actDetailA.append(div1);

						var divRow2 = $("<div class='row'></div>");
						divRow2.append(actDetailA);

						$("#act-thumbnails").append(divRow2);
					}

				}

			},
			error: function(data, state) {
				console.log(state);
				console.log(data);
			}
		});
	});

	$("#sortByTime").click(function() {
		window.event.returnValue = false;
		var searchName = $("#searchInput").val();
		console.log("search");
		$.ajax({
			type: "get",
			url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Activity/",
			async: true,
			success: function(data, state) {
				console.log(state);
				console.log(data);
				$("#act-thumbnails").empty();
				if("{}" != JSON.stringify(data)) {
					var dataArr = data.Activity;
					dataArr.sort(compare("actstart"))
					for(var i = 0; i < data.Activity.length; i++) {
						var hTitle = $("<h3></h3>").text(data.Activity[i].actname);
						var pAddr = $("<p></p>").text("活动地点：" + data.Activity[i].actaddress);
						var pActTime = $("<p></p>").text("活动时间：" + data.Activity[i].actstart + "至" + data.Activity[i].actend);
						var pSponser = $("<p></p>").text("主办单位：" + data.Activity[i].actsponser);
						var pNumber = $("<p></p>").text("报名人数：" + data.Activity[i].participantnumber + "|" + data.Activity[i].totalnumber);
						var pApplyEnd = $("<p></p>").text("报名截止：" + data.Activity[i].applyend);
						var divCaption = $("<div class='col-md-8 col-sm-8 col-xs-8  caption'></div>");
						divCaption.append(hTitle, pAddr, pActTime, pSponser, pNumber, pApplyEnd);

						var imgAct = $("<img></img>").attr({
							"src": "http://112.74.35.75:8080/file/U3d616b41047817/CFIP/Activity/" + data.Activity[i].id,
							"alt": "...."
						});
						var divThumbnail = $("<div class='col-md-4 col-sm-4 col-xs-4 thumbnail'></div>");
						divThumbnail.append(imgAct);

						var divRow1 = $("<div class='row'></div>");
						divRow1.append(divThumbnail, divCaption);

						var div1 = $("<div class='col-md-8 col-md-offset-2'></div>");
						div1.append(divRow1, $("<hr>"));

						var actDetailUrl;
						if("" == userID) {
							actDetailUrl = "/CFIP/cfip/act/actDetail.html?actID=" + data.Activity[i].id;
						} else {
							actDetailUrl = encodeURI("/CFIP/cfip/act/actDetail.html?actID=" + data.Activity[i].id + "userID=" + userID);
						}

						var actDetailA = $("<a></a>").attr("href", actDetailUrl);
						actDetailA.append(div1);

						var divRow2 = $("<div class='row'></div>");
						divRow2.append(actDetailA);

						$("#act-thumbnails").append(divRow2);
					}

				}

			},
			error: function(data, state) {
				console.log(state);
				console.log(data);
			}
		});
	});

}

function compare(property) {
	return function(a, b) {
		var value1 = a[property];
		var value2 = b[property];
		return value2 - value1;
	}
}

function addSelect() {
	$("#act1").click(function() {
		window.event.returnValue = false;
		addSelectByType(this.id);
	});
	$("#act2").click(function() {
		window.event.returnValue = false;
		addSelectByType(this.id);
	});
	$("#act3").click(function() {
		window.event.returnValue = false;
		addSelectByType(this.id);
	});
	$("#act4").click(function() {
		window.event.returnValue = false;
		addSelectByType(this.id);
	});
	$("#act5").click(function() {
		window.event.returnValue = false;
		addSelectByType(this.id);
	});
	$("#act6").click(function() {
		window.event.returnValue = false;
		addSelectByType(this.id);
	});
	$("#act7").click(function() {
		window.event.returnValue = false;
		addSelectByType(this.id);
	});
	$("#act8").click(function() {
		window.event.returnValue = false;
		addSelectByType(this.id);
	});
	$("#act9").click(function() {
		window.event.returnValue = false;
		addSelectByType(this.id);
	});

}

function addSelectByType(liID) {

	console.log(liID);
	console.log(liID.substring(3));
	var searchName = $("#searchInput").val();
	console.log("search");
	$.ajax({
		type: "get",
		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Activity/?Activity.acttype=" + liID.substring(3),
		async: false,
		success: function(data, state) {
			console.log(state);
			console.log(data);
			$("#act-thumbnails").empty();
			if("{}" != JSON.stringify(data)) {

				for(var i = 0; i < data.Activity.length; i++) {
					var hTitle = $("<h3></h3>").text(data.Activity[i].actname);
					var pAddr = $("<p></p>").text("活动地点：" + data.Activity[i].actaddress);
					var pActTime = $("<p></p>").text("活动时间：" + data.Activity[i].actstart + "至" + data.Activity[i].actend);
					var pSponser = $("<p></p>").text("主办单位：" + data.Activity[i].actsponser);
					var pNumber = $("<p></p>").text("报名人数：" + data.Activity[i].participantnumber + "|" + data.Activity[i].totalnumber);
					var pApplyEnd = $("<p></p>").text("报名截止：" + data.Activity[i].applyend);
					var divCaption = $("<div class='col-md-8 col-sm-8 col-xs-8  caption'></div>");
					divCaption.append(hTitle, pAddr, pActTime, pSponser, pNumber, pApplyEnd);

					var imgAct = $("<img></img>").attr({
						"src": "http://112.74.35.75:8080/file/U3d616b41047817/CFIP/Activity/" + data.Activity[i].id,
						"alt": "...."
					});
					var divThumbnail = $("<div class='col-md-4 col-sm-4 col-xs-4 thumbnail'></div>");
					divThumbnail.append(imgAct);

					var divRow1 = $("<div class='row'></div>");
					divRow1.append(divThumbnail, divCaption);

					var div1 = $("<div class='col-md-8 col-md-offset-2'></div>");
					div1.append(divRow1, $("<hr>"));

					var actDetailUrl;
					if("" == userID) {
						actDetailUrl = "/CFIP/cfip/act/actDetail.html?actID=" + data.Activity[i].id;
					} else {
						actDetailUrl = encodeURI("/CFIP/cfip/act/actDetail.html?actID=" + data.Activity[i].id + "userID=" + userID);
					}

					var actDetailA = $("<a></a>").attr("href", actDetailUrl);
					actDetailA.append(div1);

					var divRow2 = $("<div class='row'></div>");
					divRow2.append(actDetailA);

					$("#act-thumbnails").append(divRow2);
				}

			}
			return false;
		},
		error: function(data, state) {
			console.log(state);
			console.log(data);
		}
	});

}