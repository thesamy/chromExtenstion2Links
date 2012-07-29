

function UserInputObject() {

    this.UserName = "";
    this.UserPassword = "";
        
    this.UserSubject = "";
    this.UserMsg = "";
        
    this.linkName1 = "";
    this.linkURL1 = "";
        
    this.linkName2 = "";
    this.linkURL2 = "";
        
    this.timeInMintus = null;

    //get user data from the INPUT html
    this.getAllUserInput = function (document) {
        this.UserName = document.getElementById("name").value;
        this.UserPassword = document.getElementById("password").value;

        this.UserSubject = document.getElementById("subject").value;
        this.UserMsg = document.getElementById("msg").value;

        this.linkName1 = document.getElementById("linkName1").value;
        this.linkURL1 = document.getElementById("linkURL1").value;

        this.linkName2 = document.getElementById("linkName2").value;
        this.linkURL2 = document.getElementById("linkURL2").value;

        //get the selected value from dropDownList
        //and checkes if the user select a value or not
        var e = document.getElementById("mintusToRun");
        var strUser = e.options[e.selectedIndex].value;
        if (strUser === "notSelected")
            this.timeInMintus = strUser;
        else
            this.timeInMintus = parseInt(strUser);

           
   


    }

    //send user date to background page WITH PARMETER
    this.sendNewRequest = function (kindOfMssage, UserName, password, UserSubject, UserMsg, linkName1, linkURL1, linkName2, linkURL2, time) {
        chrome.extension.sendRequest(null,
            {
                input: kindOfMssage,

                name: UserName,
                pass: password,

                subject: UserSubject,
                msg: UserMsg,

                LinkName1: linkName1,
                LinkURL1: linkURL1,

                LinkName2: linkName2,
                LinkURL2: linkURL2,

                timerTime: time
            },
             function (response) {

             });
    }

    //send user date to background page WITHOUT PARMETER
   this.sendNewRequest = function (command) {
        chrome.extension.sendRequest(null,
            {

                input: command,

                name: this.UserName,
                pass: this.password,

                subject: this.UserSubject,
                msg: this.UserMsg,

                LinkName1: this.linkName1,
                LinkURL1: this.linkURL1,

                LinkName2: this.linkName2,
                LinkURL2: this.linkURL2,

                timerTime: this.timeInMintus
            },
             function (response) {


             });
        }

      


}



