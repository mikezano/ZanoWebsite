var Web;
(function (Web) {
    (function (Client) {
        var HomeController = (function () {
            function HomeController() {
                this.message = "Message from Home";
                //var show = Impressive(document, window);
            }
            return HomeController;
        })();
        Client.HomeController = HomeController;
    })(Web.Client || (Web.Client = {}));
    var Client = Web.Client;
})(Web || (Web = {}));
app.registerController('Web.Client.HomeController', Web.Client.HomeController);

//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.HomeController, 'vm', "initial", "/home", "views/home.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");
//# sourceMappingURL=homeController.js.map
