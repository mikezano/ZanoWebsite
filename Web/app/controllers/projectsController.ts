
module Web.Client {

    export class ProjectsController {



        public static $inject = ['$q', '$animate', '$scope'];
        constructor(private $q: ng.IQService, private $animate, private $scope) {
        }

        public movePanels(): void {
            console.log("hey");

            var animatePanels: ng.IPromise<void>[] = [];
            animatePanels.push(this.$animate.addClass($('#middle-panel'), 'middle-panel-move-left'));
            animatePanels.push(this.$animate.addClass($('#right-panel'), 'right-panel-move-left'));

            this.$q.all(animatePanels).then(() => {
                console.log("Next thing");
                this.$animate.removeClass($('#middle-panel'), 'middle-panel-move-left');
                this.$animate.removeClass($('#right-panel'), 'right-panel-move-left')
            });

            //this.$animate.addClass($('#middle-panel'), 'middle-panel-move-left').then(() => {
            //    this.$scope.$apply(() => {                    
            //        this.$animate.addClass($('#right-panel'), 'right-panel-move-left').then(() => {
            //            this.$animate.removeClass($('#middle-panel'), 'middle-panel-move-left');
            //            this.$animate.removeClass($('#right-panel'), 'right-panel-move-left');
            //        });
            //    });               
            //});
        }

        public movePanelsLeft(): void {
            var animatePanelsLeft: ng.IPromise<void>[] = [];
            animatePanelsLeft.push(this.$animate.addClass($('#middle-panel'), 'middle-panel-move-left'));
            animatePanelsLeft.push(this.$animate.addClass($('#right-panel'), 'right-panel-move-left'));

            this.$q.all(animatePanelsLeft).then(() => {
                console.log("Next thing");
                this.$animate.removeClass($('#middle-panel'), 'middle-panel-move-left');
                this.$animate.removeClass($('#right-panel'), 'right-panel-move-left');
            });
        }

        public movePanelsRight(): void {
            var animatePanelsRight: ng.IPromise<void>[] = [];
            animatePanelsRight.push(this.$animate.addClass($('#middle-panel'), 'middle-panel-move-right'));
            animatePanelsRight.push(this.$animate.addClass($('#left-panel'), 'left-panel-move-right'));

            this.$q.all(animatePanelsRight).then(() => {
                console.log("Next thing");
                animatePanelsRight.push(this.$animate.removeClass($('#middle-panel'), 'middle-panel-move-right'));
                animatePanelsRight.push(this.$animate.removeClass($('#left-panel'), 'left-panel-move-right'));
            });
        }
    }
}
app.registerController('Web.Client.ProjectsController', Web.Client.ProjectsController);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.ProjectsController, 'vm', "initia", "/projects", "views/allProjects.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");

