var Web;
(function (Web) {
    (function (Client) {
        var State1 = (function () {
            function State1() {
                this.message = "Message from State 1";
            }
            return State1;
        })();
        Client.State1 = State1;
    })(Web.Client || (Web.Client = {}));
    var Client = Web.Client;
})(Web || (Web = {}));
app.registerController('Web.Client.State1', Web.Client.State1);

//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.State1, 'vm', "state1", "/state1", "views/state1.html");
//# sourceMappingURL=state1.js.map
