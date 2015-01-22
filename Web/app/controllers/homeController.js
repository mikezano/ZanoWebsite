var Web;
(function (Web) {
    (function (Client) {
        var HomeController = (function () {
            function HomeController($timeout) {
                this.$timeout = $timeout;
                this.message = "Message from Home";

                //var show = Impressive(document, window);
                this.currentPage = "views/resume.html";
            }
            HomeController.prototype.changePage = function ($event) {
                var _this = this;
                $('#bottom-left-curtain').addClass('close-left-curtain');
                $('#top-right-curtain').addClass('close-right-curtain');
                this.$timeout(function () {
                    var nextPage = $($event.target).text();
                    switch (nextPage) {
                        case 'HOME':
                            _this.currentPage = "views/intro.html";
                            break;
                        case 'MUSIC':
                            _this.currentPage = "views/music.html";
                            break;
                        case 'RESUME':
                            _this.currentPage = "views/resume.html";
                            break;
                        case 'PROJECTS':
                            _this.currentPage = "views/projects.html";
                            break;
                    }

                    $('#bottom-left-curtain').removeClass('close-left-curtain');
                    $('#top-right-curtain').removeClass('close-right-curtain');
                }, 500);
            };
            HomeController.$inject = ['$timeout'];
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
