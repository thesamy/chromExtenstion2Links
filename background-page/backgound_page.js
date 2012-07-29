

/// <reference path="../ChromeExtenVSdoc.js" />


var inInsertMsgPage = new RegExp("(http|http)://(www.|.+)\.(com|co.il)(/site/detail/forum/insertMessage.asp).+");


var backgroundObject = new BackgroundObject();

backgroundObject.check(1);
chrome.extension.onRequest.addListener(function (request, sender, sendRespons) {

    if (request.input === "startSending") {

        backgroundObject.GetInfoFromInputPage(
            request.name, request.pass,
            request.subject, request.msg,
            request.LinkName1, request.LinkURL1,
            request.LinkName2, request.LinkURL2,
            request.timerTime
         );


        var fourmTabs = new Array();

        chrome.tabs.query({}, function (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                if (inInsertMsgPage.test(tabs[i].url) == true)
                    fourmTabs.unshift(tabs[i]);
            }

            var i = 0;
            backgroundObject.sendDataToContentScript2("uCanSend", fourmTabs[i].id);
            i++;
            setInterval(function () {
                backgroundObject.sendDataToContentScript2("uCanSend", fourmTabs[i].id);
                console.log(i);
                if (i == fourmTabs.length - 1) {
                    chrome.extension.sendRequest(null, { isDoneSending: "yes" }, function (response) { });
                }

                i++;
            }, backgroundObject.timeInMintus);

        });



    }
    if (request.input === "justFillFourm") {

        if (request.input === "startSending") {
            backgroundObject.GetInfoFromInputPage(
    request.name, request.pass,

    request.subject, request.msg,

    request.LinkName1, request.LinkURL1,

    request.LinkName2, request.LinkURL2,

    request.timerTime);
        }

        chrome.tabs.query({}, function (tabs) {
            backgroundObject.sendDataToContentScript("uCanSend", tabs, i);

        });
    }


});