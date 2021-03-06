﻿//http://davidwalsh.name/css-animation-callback
//http://brentvatne.ca/animation-obsession-and-ng-animate-1-3/
//https://www.youtube.com/watch?v=3hktBbxFxSM#t=69
module Web.Client {

    export class HomeController {

        private message: string;
        public currentPage: string;
        private el: Element;
        public numbers: number[] = [];
        public selectedProject: string;
        public projectNames: string[] = ['Panel Flipping', 'Rotation', 'Fireworks w/Web GL', 'Project 4', 'Project 5', 'Project 6', 'Project 7', 'Project 8', 'Project 9'];

        public static $inject = ['$timeout', '$q', '$animate', '$scope', '$location'];
        constructor(private $timeout: ng.ITimeoutService, private $q: ng.IQService, private $animate, private $scope, private $location) {
            this.message = "Message from Home";

            this.animatePageLoad();

        }

        public generateNumbers(): void {
            var length: number = Math.floor(Math.random() * 10) + 1;
            this.numbers = [];
            for (var i: number = 0; i < length; i++) {
                this.numbers.push(Math.floor(Math.random() * 100) + 1);
            }
        }

        public animationTracker(element: JQuery, animationClass: string, keepAnimationClass: boolean = true, onAnimationEnd: () => void = null): void {
            //Need to setup promise to that call only called once
            element
                .addClass(animationClass)
                .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', () => {

                    if (!keepAnimationClass)
                        element.removeClass(animationClass);

                    if (onAnimationEnd)
                        onAnimationEnd();
                });
        }

        public animatePageLoad(): void {
            console.log("animate1");
            this.$animate.addClass($("#zano-container"), 'animate-in')

                .then(() => {
                console.log("animate2");

                //return null;
                return this.$q.all([
                    this.$animate.addClass($('#bottom-left-triangle'), 'animate-in'),
                    this.$animate.addClass($('#top-right-triangle'), 'animate-in')
                ]);
            });
                //.then(() => {
                //    var curtainsAnimate: ng.IPromise<void>[] = [];
               
                //        curtainsAnimate.push(this.$animate.addClass($('#bottom-left-curtain'), 'animate-out'));
                //        curtainsAnimate.push(this.$animate.addClass($('#top-right-curtain'), 'animate-out'));
              
                //    return this.$q.all(curtainsAnimate);
                //});          
        }

        public startRotation(): void {
            $('#zano-container').toggleClass('spin');
        }

        public startZoomOut(): void {
            $('#zano-container').toggleClass('zoomOut');
        }

        public changeUrl(nextUrl: string, event: any): void {
            var selectedElement: JQuery = $(event.target);
            var offset = selectedElement.offset();
            $("#selected-project").css({ left: offset.left, top: offset.top });
            console.log(nextUrl);
            this.selectedProject = nextUrl;

            this.$q.all([
                this.$animate.addClass($('#zano-container'), 'zoomOut'),
                this.$animate.addClass($('#selected-project'), 'present-project-left')
            ]).then(() => {
                var moveUp: ng.IPromise<void>[] = [];
                    console.log("h");
                    moveUp.push(this.$animate.addClass($('#selected-project'), 'present-project-up'));
             
                return this.$q.all(moveUp);
            }).then(() => {
                this.$location.path('/projects');      
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
        }

        public changePage($event): void {


            var curtainsAnimate: ng.IPromise<void>[] = [];
            curtainsAnimate.push(this.$animate.addClass($('#bottom-left-curtain'), 'animate-in'));
            curtainsAnimate.push(this.$animate.addClass($('#top-right-curtain'), 'animate-in'));

            this.$q.all(curtainsAnimate).then(() => {
                console.log("here");
                //this.$scope.$apply(() => {
                    var nextPage = $($event.target).text();

                    switch (nextPage) {
                        case 'LINK1':
                            this.currentPage = "views/intro.html";
                            break;
                        case 'LINK2':
                            this.currentPage = "views/music.html";
                            break;
                        case 'LINK3':
                            this.currentPage = "views/resume.html";
                            break;
                        case 'PROJECTS':
                            this.currentPage = "views/projects.html";
                            break;
                    }    
                    
                    $('#bottom-left-curtain').removeClass('animate-in');
                    $('#top-right-curtain').removeClass('animate-in');                                    
                //});
            });

        }
    }
}
app.registerController('Web.Client.HomeController', Web.Client.HomeController);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.HomeController, 'vm', "initial", "/", "views/home.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");

