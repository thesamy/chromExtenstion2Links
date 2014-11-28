/// <reference path="../Jquery1.6+vsdoc/jquery-vsdoc.js" />
/// <reference path="../ChromeExtenVSdoc.js" />
/// <reference path="../InputObject.js" />


var userInput = new UserInputObject();

$(document).ready(function () {

    $("#updateButton").click(null, function () {
        userInput.getAllUserInput(document);
        var answer = confirm("שלח?");
        if (!answer) {
            $("#status").text("המידע לא נשלח");

        }
        else {
            if (!isNaN(userInput.timeInMintus)) {
                console.log(userInput.timeInMintus);
                $("#status").text("המידע נשלח כרגע בכל הפורומים ");
                userInput.sendNewRequest("startSending");

                $("#updateButton").attr("disabled", "disabled");
            }
            else
                $("#status").text("לא נבחר זמן ריצה");
        }

    });

    //this will run only when the sending is done
    chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
        if (request.isDoneSending === "yes") {
            $("#status").text("סיים לשלוח");
            $("#updateButton").removeAttr("disabled");
        }

    });


});
