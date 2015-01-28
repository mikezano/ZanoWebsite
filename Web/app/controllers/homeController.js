var Web;
(function (Web) {
    //http://davidwalsh.name/css-animation-callback
    //http://brentvatne.ca/animation-obsession-and-ng-animate-1-3/
    //https://www.youtube.com/watch?v=3hktBbxFxSM#t=69
    (function (Client) {
        var HomeController = (function () {
            function HomeController($timeout, $q, $animate, $scope) {
                var _this = this;
                this.$timeout = $timeout;
                this.$animate = $animate;
                this.$scope = $scope;
                this.currentPage = "none";
                this.numbers = [];
                this.message = "Message from Home";

                //var show = Impressive(document, window);
                //this.currentPage = "views/resume.html";
                //this.el = $("#zano-container")[0];
                //            this.$animate.animate($("#zano-container"), null, null, "animate-in").then(() => {
                //                console.log('que coza');
                //            });
                //            this.animationTracker($("#zano-container"), 'animate-in', true,() => {
                //                console.log("did the intro");
                //                this.animationTracker($('#bottom-left-triangle, #top-right-triangle'), 'animate-in', true, () => {
                //                    console.log("did the triangles");
                //                    this.animationTracker($('#bottom-left-curtain, #top-right-curtain'), 'animate-out', true, () => {
                //                        console.log("curtains open");
                //                    });
                //                });
                //            });
                //            this.$animate.addClass($("#zano-container"), 'animate-in').then(() => {
                //                console.log("promised you");
                //
                //                console.log(this);
                //                console.log(this.currentPage);
                //            })
                var firstAnimation = this.$animate.addClass($("#zano-container"), 'animate-in');

                firstAnimation.then(function (result) {
                    console.log(result);
                    console.log(_this);
                    _this.$scope.$apply(function () {
                        return _this.$animate.addClass($("#bottom-left-triangle, #top-right-triangle"), 'animate-in');
                    });
                }).then(function () {
                    return _this.$animate.addClass($('#bottom-left-curtain'), 'animate-out');
                });
            }
            HomeController.prototype.generateNumbers = function () {
                var length = Math.floor(Math.random() * 10) + 1;
                this.numbers = [];
                for (var i = 0; i < length; i++) {
                    this.numbers.push(Math.floor(Math.random() * 100) + 1);
                }
            };

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
                var _this = this;
                $('#bottom-left-curtain').addClass('animate-in');
                $('#top-right-curtain').addClass('animate-in').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    console.log('done');
                    console.log(_this);
                    var nextPage = $($event.target).text();
                    console.log(nextPage);
                    switch (nextPage) {
                        case 'LINK1':
                            _this.currentPage = "views/intro.html";
                            break;
                        case 'LINK2':
                            _this.currentPage = "views/music.html";
                            break;
                        case 'LINK3':
                            _this.currentPage = "views/resume.html";
                            break;
                        case 'PROJECTS':
                            _this.currentPage = "views/projects.html";
                            break;
                    }

                    $('#bottom-left-curtain').removeClass('animate-in');
                    $('#top-right-curtain').removeClass('animate-in');
                });
                //            this.$timeout(() => {
                //
                //
                //            }, 200);
            };
            HomeController.$inject = ['$timeout', '$q', '$animate', '$scope'];
            return HomeController;
        })();
        Client.HomeController = HomeController;
    })(Web.Client || (Web.Client = {}));
    var Client = Web.Client;
})(Web || (Web = {}));
app.registerController('Web.Client.HomeController', Web.Client.HomeController);

//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.HomeController, 'vm', "initial", "/", "views/home.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");
//# sourceMappingURL=homeController.js.map
