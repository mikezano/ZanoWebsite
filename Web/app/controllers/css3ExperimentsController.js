/// <reference path="../../scripts/typings/impress/impress.d.ts" />
var Web;
(function (Web) {
    (function (Client) {
        var Css3Controller = (function () {
            function Css3Controller() {
                this.message = "Message from State 1";

                //var show = Impressive(document, window);
                this.letters = [];
            }
            Css3Controller.prototype.addLetter = function () {
                var letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));

                if (this.letters.indexOf(letter) < 0)
                    this.letters.push(letter);
            };

            Css3Controller.prototype.clearLetters = function () {
                this.letters.splice(0, this.letters.length);
            };

            Css3Controller.prototype.addGroup = function () {
                this.letters = ["a", "b", "c"];
            };
            return Css3Controller;
        })();
        Client.Css3Controller = Css3Controller;
    })(Web.Client || (Web.Client = {}));
    var Client = Web.Client;
})(Web || (Web = {}));
app.registerController('Web.Client.Css3Controller', Web.Client.Css3Controller);

//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.Css3Controller, 'vm', "unique", "/css3", "views/css3.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");
//# sourceMappingURL=css3ExperimentsController.js.map
