var Web;
(function (Web) {
    (function (Client) {
        var ProjectsController = (function () {
            function ProjectsController($q, $animate, $scope) {
                this.$q = $q;
                this.$animate = $animate;
                this.$scope = $scope;
                this.middlePanelMoveLeft = 'middle-panel-move-left';
                this.middlePanelMoveRight = 'middle-panel-move-right';
                this.rightPanelMoveLeft = 'right-panel-move-left';
                this.leftPanelMoveRight = 'left-panel-move-right';
                this.middlePanel = $('#middle-panel');
                this.leftPanel = $('#left-panel');
                this.rightPanel = $('#right-panel');
            }
            ProjectsController.prototype.movePanels = function () {
                var _this = this;
                console.log("hey");

                var animatePanels = [];
                animatePanels.push(this.$animate.addClass(this.middlePanel, this.middlePanelMoveLeft));
                animatePanels.push(this.$animate.addClass(this.rightPanel, this.rightPanelMoveLeft));

                this.$q.all(animatePanels).then(function () {
                    _this.$animate.removeClass(_this.middlePanel, _this.middlePanelMoveLeft);
                    _this.$animate.removeClass(_this.rightPanel, _this.rightPanelMoveLeft);
                });
            };

            ProjectsController.prototype.movePanelsLeft = function () {
                var _this = this;
                var animatePanelsLeft = [];
                animatePanelsLeft.push(this.$animate.addClass(this.middlePanel, this.middlePanelMoveLeft));
                animatePanelsLeft.push(this.$animate.addClass(this.rightPanel, this.rightPanelMoveLeft));

                this.$q.all(animatePanelsLeft).then(function () {
                    _this.$animate.removeClass(_this.middlePanel, _this.middlePanelMoveLeft);
                    _this.$animate.removeClass(_this.rightPanel, _this.rightPanelMoveLeft);
                });
            };

            ProjectsController.prototype.movePanelsRight = function () {
                var _this = this;
                var animatePanelsRight = [];
                animatePanelsRight.push(this.$animate.addClass(this.middlePanel, this.middlePanelMoveRight));
                animatePanelsRight.push(this.$animate.addClass(this.leftPanel, this.leftPanelMoveRight));

                this.$q.all(animatePanelsRight).then(function () {
                    animatePanelsRight.push(_this.$animate.removeClass(_this.middlePanel, _this.middlePanelMoveRight));
                    animatePanelsRight.push(_this.$animate.removeClass(_this.leftPanel, _this.leftPanelMoveRight));
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
