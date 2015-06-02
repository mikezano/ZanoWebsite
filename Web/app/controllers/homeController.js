//http://davidwalsh.name/css-animation-callback
//http://brentvatne.ca/animation-obsession-and-ng-animate-1-3/
//https://www.youtube.com/watch?v=3hktBbxFxSM#t=69
var Web;
(function (Web) {
    var Client;
    (function (Client) {
        var HomeController = (function () {
            function HomeController($timeout, $q, $animate, $scope, $location) {
                this.$timeout = $timeout;
                this.$q = $q;
                this.$animate = $animate;
                this.$scope = $scope;
                this.$location = $location;
                this.numbers = [];
                this.projectNames = ['Panel Flipping', 'Rotation', 'Fireworks w/Web GL', 'Project 4', 'Project 5', 'Project 6', 'Project 7', 'Project 8', 'Project 9'];
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
                if (keepAnimationClass === void 0) { keepAnimationClass = true; }
                if (onAnimationEnd === void 0) { onAnimationEnd = null; }
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
                console.log("animate1");
                this.$animate.addClass($("#zano-container"), 'animate-in').then(function () {
                    console.log("animate2");
                    //return null;
                    return _this.$q.all([
                        _this.$animate.addClass($('#bottom-left-triangle'), 'animate-in'),
                        _this.$animate.addClass($('#top-right-triangle'), 'animate-in')
                    ]);
                });
                //.then(() => {
                //    var curtainsAnimate: ng.IPromise<void>[] = [];
                //        curtainsAnimate.push(this.$animate.addClass($('#bottom-left-curtain'), 'animate-out'));
                //        curtainsAnimate.push(this.$animate.addClass($('#top-right-curtain'), 'animate-out'));
                //    return this.$q.all(curtainsAnimate);
                //});          
            };
            HomeController.prototype.startRotation = function () {
                $('#zano-container').toggleClass('spin');
            };
            HomeController.prototype.startZoomOut = function () {
                $('#zano-container').toggleClass('zoomOut');
            };
            HomeController.prototype.changeUrl = function (nextUrl, event) {
                var _this = this;
                var selectedElement = $(event.target);
                var offset = selectedElement.offset();
                $("#selected-project").css({ left: offset.left, top: offset.top });
                console.log(nextUrl);
                this.selectedProject = nextUrl;
                this.$q.all([
                    this.$animate.addClass($('#zano-container'), 'zoomOut'),
                    this.$animate.addClass($('#selected-project'), 'present-project-left')
                ]).then(function () {
                    var moveUp = [];
                    console.log("h");
                    moveUp.push(_this.$animate.addClass($('#selected-project'), 'present-project-up'));
                    return _this.$q.all(moveUp);
                }).then(function () {
                    _this.$location.path('/projects');
                });
                //this.$animate.addClass($('#zano-container'), 'zoomOut').then(() => {
                //    this.$scope.$apply(() => {
                //        // 
                //        this.$animate.addClass($('#selected-project'), 'present-project-left').then(() => {
                //            this.$scope.$apply(() => {
                //                this.$animate.addClass($('#selected-project'), 'present-project-up');
                //            });
                //        });
                //    });
                //});            
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
            };
            HomeController.$inject = ['$timeout', '$q', '$animate', '$scope', '$location'];
            return HomeController;
        })();
        Client.HomeController = HomeController;
    })(Client = Web.Client || (Web.Client = {}));
})(Web || (Web = {}));
app.registerController('Web.Client.HomeController', Web.Client.HomeController);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.HomeController, 'vm', "initial", "/", "views/home.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");
//# sourceMappingURL=homeController.js.map