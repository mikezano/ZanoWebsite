var Web;
(function (Web) {
    (function (Client) {
        var ImpressController = (function () {
            function ImpressController() {
                this.message = "Message from State 1";
            }
            return ImpressController;
        })();
        Client.ImpressController = ImpressController;
    })(Web.Client || (Web.Client = {}));
    var Client = Web.Client;
})(Web || (Web = {}));
app.registerController('Web.Client.ImpressController', Web.Client.ImpressController);

//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.ImpressController, "impress", "/impress", "views/impress.html");
//# sourceMappingURL=impress.js.map
