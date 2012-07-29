


function BackgroundObject () {

    this.UserName = "";
    this.UserPassword = "";

    this.UserSubject = "";
    this.UserMsg = "";

    this.linkName1 = "";
    this.linkURL1 = "";

    this.linkName2 = "";
    this.linkURL2 = "";

    this.timeInMintus = null;

    

    //STORE data from user and add it to class values.
    this.GetInfoFromInputPage = function (userName, password, subj, msg, link1Name, url1, link2Name, url2, time) {

        this.UserName = userName,
        this.UserPassword = password,

        this.UserSubject = subj;
        this.UserMsg = msg;

        this.linkName1 = link1Name;
        this.linkURL1 = url1;

        this.linkName2 = link2Name;
        this.linkURL2 = url2;

        this.timeInMintus = parseFloat(time);

    }

    this.sendDataToContentScript2 = function (command, tabID, lastOne) {


        chrome.tabs.sendRequest(tabID, {

            input: command,

            userName: this.UserName,
            password: this.UserPassword,

            subject: this.UserSubject,
            msg: this.UserMsg,

            linkName1: this.linkName1,
            linkURL1: this.linkURL1,

            linkName2: this.linkName2,
            linkURL2: this.linkURL2,

            ifLastOne: lastOne
        }, function (response) { });




    }


    //SEND the requested data.
    this.sendDataToContentScript = function (command, tabs, i) {

        
        chrome.tabs.sendRequest(tabs[i].id, {

            input: command,

            userName: this.UserName,
            password: this.UserPassword,

            subject: this.UserSubject,
            msg: this.UserMsg,

            linkName1: this.linkName1,
            linkURL1: this.linkURL1,

            linkName2: this.linkName2,
            linkURL2: this.linkURL2

        }, function (response) { });

     


    }

    this.check = function (s) {
        alert("check");
    }
}