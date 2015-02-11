
module Web.Client {

    export class ProjectsController {

        public middlePanelMoveLeft: string = 'middle-panel-move-left';
        public middlePanelMoveRight: string = 'middle-panel-move-right';
        public rightPanelMoveLeft: string = 'right-panel-move-left';
        public leftPanelMoveRight: string = 'left-panel-move-right';

        public middlePanel: JQuery = $('#middle-panel');
        public leftPanel: JQuery = $('#left-panel');
        public rightPanel: JQuery = $('#right-panel');

        public static $inject = ['$q', '$animate', '$scope'];
        constructor(private $q: ng.IQService, private $animate, private $scope) {
        }

        public movePanels(): void {
            console.log("hey");

            var animatePanels: ng.IPromise<void>[] = [];
            animatePanels.push(this.$animate.addClass(this.middlePanel, this.middlePanelMoveLeft));
            animatePanels.push(this.$animate.addClass(this.rightPanel, this.rightPanelMoveLeft));

            this.$q.all(animatePanels).then(() => {
                this.$animate.removeClass(this.middlePanel, this.middlePanelMoveLeft);
                this.$animate.removeClass(this.rightPanel, this.rightPanelMoveLeft)
            });
        }

        public movePanelsLeft(): void {
            var animatePanelsLeft: ng.IPromise<void>[] = [];
            animatePanelsLeft.push(this.$animate.addClass(this.middlePanel, this.middlePanelMoveLeft));
            animatePanelsLeft.push(this.$animate.addClass(this.rightPanel, this.rightPanelMoveLeft));

            this.$q.all(animatePanelsLeft).then(() => {

                this.$animate.removeClass(this.middlePanel, this.middlePanelMoveLeft);
                this.$animate.removeClass(this.rightPanel, this.rightPanelMoveLeft);
            });
        }

        public movePanelsRight(): void {
            var animatePanelsRight: ng.IPromise<void>[] = [];
            animatePanelsRight.push(this.$animate.addClass(this.middlePanel, this.middlePanelMoveRight));
            animatePanelsRight.push(this.$animate.addClass(this.leftPanel, this.leftPanelMoveRight));

            this.$q.all(animatePanelsRight).then(() => {
                animatePanelsRight.push(this.$animate.removeClass(this.middlePanel, this.middlePanelMoveRight));
                animatePanelsRight.push(this.$animate.removeClass(this.leftPanel, this.leftPanelMoveRight));
            });
        }
    }
}
app.registerController('Web.Client.ProjectsController', Web.Client.ProjectsController);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.ProjectsController, 'vm', "initia", "/projects", "views/allProjects.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");

