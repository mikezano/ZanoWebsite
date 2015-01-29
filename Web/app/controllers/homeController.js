var Web;
(function (Web) {
    //http://davidwalsh.name/css-animation-callback
    //http://brentvatne.ca/animation-obsession-and-ng-animate-1-3/
    //https://www.youtube.com/watch?v=3hktBbxFxSM#t=69
    (function (Client) {
        var HomeController = (function () {
            function HomeController($timeout, $q, $animate, $scope) {
                this.$timeout = $timeout;
                this.$q = $q;
                this.$animate = $animate;
                this.$scope = $scope;
                this.numbers = [];
                this.projectNames = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6', 'Project 7', 'Project 8', 'Project 9'];
                this.message = "Message from Home";

                this.animatePageLoad();
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

            HomeController.prototype.animatePageLoad = function () {
                var _this = this;
                this.$animate.addClass($("#zano-container"), 'animate-in').then(function () {
                    var trianglesAnimate = [];
                    _this.$scope.$apply(function () {
                        trianglesAnimate.push(_this.$animate.addClass($('#bottom-left-triangle'), 'animate-in'));
                        trianglesAnimate.push(_this.$animate.addClass($('#top-right-triangle'), 'animate-in'));
                    });
                    return _this.$q.all(trianglesAnimate);
                }).then(function () {
                    var curtainsAnimate = [];
                    _this.$scope.$apply(function () {
                        curtainsAnimate.push(_this.$animate.addClass($('#bottom-left-curtain'), 'animate-out'));
                        curtainsAnimate.push(_this.$animate.addClass($('#top-right-curtain'), 'animate-out'));
                    });
                    return _this.$q.all(curtainsAnimate);
                });
            };

            HomeController.prototype.changePage = function ($event) {
                var _this = this;
                var curtainsAnimate = [];
                curtainsAnimate.push(this.$animate.addClass($('#bottom-left-curtain'), 'animate-in'));
                curtainsAnimate.push(this.$animate.addClass($('#top-right-curtain'), 'animate-in'));

                this.$q.all(curtainsAnimate).then(function () {
                    console.log("here");

                    //this.$scope.$apply(() => {
                    var nextPage = $($event.target).text();

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
                    //});
                });
                //            $('#bottom-left-curtain').addClass('animate-in');
                //            $('#top-right-curtain').addClass('animate-in')
                //                .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', () => {
                //                    console.log('done');
                //                    console.log(this);
                //                    var nextPage = $($event.target).text();
                //                    console.log(nextPage);
                //                    switch (nextPage) {
                //                        case 'LINK1':
                //                            this.currentPage = "views/intro.html";
                //                            break;
                //                        case 'LINK2':
                //                            this.currentPage = "views/music.html";
                //                            break;
                //                        case 'LINK3':
                //                            this.currentPage = "views/resume.html";
                //                            break;
                //                        case 'PROJECTS':
                //                            this.currentPage = "views/projects.html";
                //                            break;
                //                    }
                //
                //
                //                    $('#bottom-left-curtain').removeClass('animate-in');
                //                    $('#top-right-curtain').removeClass('animate-in');
                //                });
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
