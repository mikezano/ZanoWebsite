var Web;
(function (Web) {
    (function (Client) {
        var ProjectsController = (function () {
            function ProjectsController($q, $animate, $scope) {
                this.$q = $q;
                this.$animate = $animate;
                this.$scope = $scope;
            }
            ProjectsController.prototype.movePanels = function () {
                var _this = this;
                console.log("hey");

                var animatePanels = [];
                animatePanels.push(this.$animate.addClass($('#middle-panel'), 'middle-panel-move-left'));
                animatePanels.push(this.$animate.addClass($('#right-panel'), 'right-panel-move-left'));

                this.$q.all(animatePanels).then(function () {
                    console.log("Next thing");
                    _this.$animate.removeClass($('#middle-panel'), 'middle-panel-move-left');
                    _this.$animate.removeClass($('#right-panel'), 'right-panel-move-left');
                });
                //this.$animate.addClass($('#middle-panel'), 'middle-panel-move-left').then(() => {
                //    this.$scope.$apply(() => {
                //        this.$animate.addClass($('#right-panel'), 'right-panel-move-left').then(() => {
                //            this.$animate.removeClass($('#middle-panel'), 'middle-panel-move-left');
                //            this.$animate.removeClass($('#right-panel'), 'right-panel-move-left');
                //        });
                //    });
                //});
            };

            ProjectsController.prototype.movePanelsLeft = function () {
                var _this = this;
                var animatePanelsLeft = [];
                animatePanelsLeft.push(this.$animate.addClass($('#middle-panel'), 'middle-panel-move-left'));
                animatePanelsLeft.push(this.$animate.addClass($('#right-panel'), 'right-panel-move-left'));

                this.$q.all(animatePanelsLeft).then(function () {
                    console.log("Next thing");
                    _this.$animate.removeClass($('#middle-panel'), 'middle-panel-move-left');
                    _this.$animate.removeClass($('#right-panel'), 'right-panel-move-left');
                });
            };

            ProjectsController.prototype.movePanelsRight = function () {
                var _this = this;
                var animatePanelsRight = [];
                animatePanelsRight.push(this.$animate.addClass($('#middle-panel'), 'middle-panel-move-right'));
                animatePanelsRight.push(this.$animate.addClass($('#left-panel'), 'left-panel-move-right'));

                this.$q.all(animatePanelsRight).then(function () {
                    console.log("Next thing");
                    animatePanelsRight.push(_this.$animate.removeClass($('#middle-panel'), 'middle-panel-move-right'));
                    animatePanelsRight.push(_this.$animate.removeClass($('#left-panel'), 'left-panel-move-right'));
                });
            };
            ProjectsController.$inject = ['$q', '$animate', '$scope'];
            return ProjectsController;
        })();
        Client.ProjectsController = ProjectsController;
    })(Web.Client || (Web.Client = {}));
    var Client = Web.Client;
})(Web || (Web = {}));
app.registerController('Web.Client.ProjectsController', Web.Client.ProjectsController);

//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.ProjectsController, 'vm', "initia", "/projects", "views/allProjects.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");
//# sourceMappingURL=projectsController.js.map
