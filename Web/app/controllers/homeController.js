var Web;
(function (Web) {
    //http://davidwalsh.name/css-animation-callback
    //http://brentvatne.ca/animation-obsession-and-ng-animate-1-3/
    //https://www.youtube.com/watch?v=3hktBbxFxSM#t=69
    (function (Client) {
        var HomeController = (function () {
            function HomeController($timeout, $q, $animate) {
                this.$timeout = $timeout;
                this.$animate = $animate;
                this.message = "Message from Home";

                //var show = Impressive(document, window);
                this.currentPage = "views/resume.html";

                //this.el = $("#zano-container")[0];
                this.$animate.animate($("#zano-container"), null, null, "animate-in").then(function () {
                    console.log('que coza');
                });
                //            this.animationTracker($("#zano-container"), 'animate-in', true,() => {
                //                console.log("did the intro");
                //                this.animationTracker($('#bottom-left-triangle, #top-right-triangle'), 'animate-in', true, () => {
                //                    console.log("did the triangles");
                //                    this.animationTracker($('#bottom-left-curtain, #top-right-curtain'), 'animate-in', true, () => {
                //                        console.log("curtains open");
                //                    });
                //                });
                //            });
            }
            HomeController.prototype.animationTracker = function (element, animationClass, keepAnimationClass, onAnimationEnd) {
                if (typeof keepAnimationClass === "undefined") { keepAnimationClass = true; }
                if (typeof onAnimationEnd === "undefined") { onAnimationEnd = null; }
                //Need to setup promise to that call only called once
                element.addClass(animationClass).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    if (!keepAnimationClass)
                        element.removeClass(animationClass);

                    if (onAnimationEnd)
                        onAnimationEnd();
                });
            };

            HomeController.prototype.changePage = function ($event) {
                $('#bottom-left-curtain').addClass('close-left-curtain');
                $('#top-right-curtain').addClass('close-right-curtain').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    console.log("done");

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
            HomeController.$inject = ['$timeout', '$q', '$animate'];
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
