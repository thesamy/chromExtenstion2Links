

/// <reference path="ChromeExtenVSdoc.js" />
/// <reference path="Jquery1.6+vsdoc/jquery-vsdoc.js" />

function SendMsg(sbj, msg, linkName1, link1, linkName2, link2) {


    $("#subjectTXT").val(sbj);
    $("#messageMEM").val(msg);

    $("input[name=link1BuildTXT]").val(link1);
    $("input[name=link1DesBuildTXT]").val(linkName1);

    $("input[name=link1TXT]").val(link2);
    $("input[name=link1DesTXT]").val(linkName2);

    $("input[name=Submit]").click();



}



//regular expression for LOGIN PAGE
var inLoginPage = new RegExp("(http|https)://((www.|.+)\.(com|co.il))(/site/detail/member/login/login.asp).+");

//regular expression for INSERT MESSAGE PAGE
var inInsertMsgPage = new RegExp("(http|http)://(www.|.+)\.(com|co.il)(/site/detail/forum/insertMessage.asp).+");

//get the button send msg.
var postMsgLink = $(".white14link").attr("href");

var canSendMsg = false;
$(document).ready(function () {


    var currentPageURL = document.URL;
    if (postMsgLink != null)
        window.location = postMsgLink;

    //if user is in LOGIN page. login user automitcly
    if (inLoginPage.test(currentPageURL) == true) {
        $("input[name=userTXT]").val("samy88");
        $("input[name=passTXT]").val("samy1234");
        $("#trems1").prop("checked", true);
        $("input[name=Submit3]").click();
    }

    if (inInsertMsgPage.test(currentPageURL) == true) {


        chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
            if (request.input === "uCanSend") {
                
                SendMsg(request.subject, request.msg, request.linkName1, request.linkURL1,
                 request.linkName2, request.linkURL2);
            }
        });

    }
    


    //find a way to stop the loop!
});

