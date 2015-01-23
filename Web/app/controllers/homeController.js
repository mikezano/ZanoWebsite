var Web;
(function (Web) {
    //http://davidwalsh.name/css-animation-callback
    (function (Client) {
        var HomeController = (function () {
            function HomeController($timeout) {
                this.$timeout = $timeout;
                this.message = "Message from Home";

                //var show = Impressive(document, window);
                this.currentPage = "views/resume.html";
            }
            HomeController.prototype.changePage = function ($event) {
                $('#bottom-left-curtain').addClass('close-left-curtain');
                $('#top-right-curtain').addClass('close-right-curtain').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    //                    var nextPage = $($event.target).text();
                    //                    switch (nextPage) {
                    //                        case 'HOME':
                    //                            this.currentPage = "views/intro.html";
                    //                            break;
                    //                        case 'MUSIC':
                    //                            this.currentPage = "views/music.html";
                    //                            break;
                    //                        case 'RESUME':
                    //                            this.currentPage = "views/resume.html";
                    //                            break;
                    //                        case 'PROJECTS':
                    //                            this.currentPage = "views/projects.html";
                    //                            break;
                    //                    }
                    $('#bottom-left-curtain').removeClass('close-left-curtain');
                    $('#top-right-curtain').removeClass('close-right-curtain');
                });
                //            this.$timeout(() => {
                //
                //
                //            }, 200);
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
