﻿
module Web.Client {

    export class HomeController {

        private message: string;
        private currentPage:string;

        public static $inject = ['$timeout'];
        constructor(private $timeout: ng.ITimeoutService) {
            this.message = "Message from Home";
            //var show = Impressive(document, window);
            this.currentPage = "views/resume.html";
        }

        public changePage($event): void {

            $('#bottom-left-curtain').addClass('close-left-curtain');
            $('#top-right-curtain').addClass('close-right-curtain');
            this.$timeout(() => {

                var nextPage = $($event.target).text();
                switch (nextPage) {
                    case 'HOME':
                        this.currentPage = "views/intro.html";
                        break;
                    case 'MUSIC':
                        this.currentPage = "views/music.html";
                        break;
                    case 'RESUME':
                        this.currentPage = "views/resume.html";
                        break;
                    case 'PROJECTS':
                        this.currentPage = "views/projects.html";
                        break;
                }

                $('#bottom-left-curtain').removeClass('close-left-curtain');
                $('#top-right-curtain').removeClass('close-right-curtain');
            }, 500);
        }
    }
}
app.registerController('Web.Client.HomeController', Web.Client.HomeController);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.HomeController, 'vm', "initial", "/home", "views/home.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");

 