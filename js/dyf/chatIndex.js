//获取Message Trigger userID 对应的ID
function getMessageTrigger(uid) {
	$.ajax({
		type: "get",
		url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Messagetrigger/?Messagetrigger.userid=" + uid,
		async: true,
		success: function(data, state) {
			console.log(data);
			return data.Messagetrigger[0];
		},
		error: function(data, state) {
			console.log("获取MessageTrigger id 失败");
		}
	});
}

//创建自己消息的ITem
function createIMsgItem(userID, currentTime, Icontent) {

	var spanI = $("<span class='glyphicon glyphicon-user i-glyphicon'></span>");
	var divIGlyphicon = $("<div class='col-sm-1 i-img'></div>");
	divIGlyphicon.append(spanI);

	var divIContent = $("<div class='col-sm-10'></div>").text("信息内容:" + Icontent);
	var divIRowContent = $("<div class='row'></div>");
	divIRowContent.append(divIContent);

	var divIT = $("<div class='col-sm-5'></div>").text("时间:" + currentTime);
	var divIP = $("<div class='col-sm-5'></div>").text("来自:" + userID);
	var divIRowPT = $("<div class='row'></div>");
	divIRowPT.append(divIT, divIP);

	var divImsg = $("<div class='col-sm-8 col-sm-offset-3 i-msg'></div>");
	divImsg.append(divIRowPT, $("<hr></hr>"), divIRowContent);

	var divIRow = $("<div class='row'></div>");
	divIRow.append(divImsg, divIGlyphicon);
	$("#messagePlane").append(divIRow);
}

//创建对方消息的Item
function createYMsgItem(userID, currentTime, Icontent) {

	//收到对方信息
	var currentTime = getFormatDate(); //获取当前时间
	var spanUserY = $("<span class='glyphicon glyphicon-user you-glyphicon'></span>");
	var divYouImg = $("<div class='col-sm-1 you-img'></div>");
	divYouImg.append(spanUserY);

	var divYMsgContent = $("<div class='col-sm-10'></div>").text("信息内容:" + Icontent);
	var divYouMsgRow2 = $("<div class='row'></div>");
	divYouMsgRow2.append(divYMsgContent);

	var divYPerson = $("<div class='col-sm-5'></div>").text("来自:" + userID);
	var divYTime = $("<div class='col-sm-5'></div>").text("时间:" + currentTime);
	var divYouMsgRow1 = $("<div class='row'></div>");
	divYouMsgRow1.append(divYPerson, divYTime);

	var divYouMsg = $("<div class='col-sm-8 you-msg'></div>")
	divYouMsg.append(divYouMsgRow1, $("<hr></hr>"), divYouMsgRow2);

	var divYRow = $("<div class='row'></div>");
	divYRow.append(divYouImg, divYouMsg);

	$("#messagePlane").append(divYRow);
}
//获取当前时间
function getFormatDate() {
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
	var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
	var hour = nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
	var minute = nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
	//var second = nowDate.getSeconds() < 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
	return year + "-" + month + "-" + date + "T" + hour + ":" + minute;
}

//监听有无新的消息
function listenToMessageTrigger(uidMessageTriggerID) {
	var source = new EventSource("http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Messagetrigger/" + uidMessageTriggerID + "/syncronize");
	source.onmessage = function(event) {
		console.log(event.data);
		if(1 == data.state) {
			$.ajax({
				type:"get",
				url: "http://112.74.35.75:8080/Entity/U3d616b41047817/CFIP/Message/?Message.fromuserid="+curYID+"&Message.touserid="+userID,
				async:true,
				success:function(data, state){
					console.log("收到来自："+curYID+"到："+userID+"的信息");
					
				},
				error:function(data, state){
					
				}
			});
		} else {
			console.log("trigger 没用新信息");
		}
	}
}