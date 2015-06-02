//http://davidwalsh.name/css-animation-callback
//http://brentvatne.ca/animation-obsession-and-ng-animate-1-3/
//https://www.youtube.com/watch?v=3hktBbxFxSM#t=69
module Web.Client {

    export class HomeController {

        private message: string;
        public currentPage: string;
        private el: Element;
        public numbers: number[] = [];
        public selectedProject: string;

        //public static $inject = ['$q', '$animate'];
        constructor() {
            this.message = "Message from Home";

            //this.animatePageLoad();

        }



        //public animatePageLoad(): void {
        //    console.log("animate1");
        //    this.$animate.addClass($("#zano-container"), 'animate-in')

        //        .then(() => {
        //        console.log("animate2");

        //        //return null;
        //        return this.$q.all([
        //            this.$animate.addClass($('#bottom-left-triangle'), 'animate-in'),
        //            this.$animate.addClass($('#top-right-triangle'), 'animate-in')
        //        ]);
        //    });
        //    //.then(() => {
        //    //    var curtainsAnimate: ng.IPromise<void>[] = [];
               
        //    //        curtainsAnimate.push(this.$animate.addClass($('#bottom-left-curtain'), 'animate-out'));
        //    //        curtainsAnimate.push(this.$animate.addClass($('#top-right-curtain'), 'animate-out'));
              
        //    //    return this.$q.all(curtainsAnimate);
        //    //});          
        //}


        //public changePage($event): void {


        //    var curtainsAnimate: ng.IPromise<void>[] = [];
        //    curtainsAnimate.push(this.$animate.addClass($('#bottom-left-curtain'), 'animate-in'));
        //    curtainsAnimate.push(this.$animate.addClass($('#top-right-curtain'), 'animate-in'));

        //    this.$q.all(curtainsAnimate).then(() => {
        //        console.log("here");
        //        //this.$scope.$apply(() => {
        //        var nextPage = $($event.target).text();

        //        switch (nextPage) {
        //            case 'LINK1':
        //                this.currentPage = "views/intro.html";
        //                break;
        //            case 'LINK2':
        //                this.currentPage = "views/music.html";
        //                break;
        //            case 'LINK3':
        //                this.currentPage = "views/resume.html";
        //                break;
        //            case 'PROJECTS':
        //                this.currentPage = "views/projects.html";
        //                break;
        //        }

        //        $('#bottom-left-curtain').removeClass('animate-in');
        //        $('#top-right-curtain').removeClass('animate-in');                                    
        //        //});
        //    });

        //}
    }
}
app.registerController('Web.Client.HomeController', Web.Client.HomeController);
app.registerRoute('/', 'Web.Client.HomeController as vm', 'homeController.html');
//app.registerAngularUiRoute(Web.Client.HomeController, 'vm', "initial", "/", "views/home.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");

 