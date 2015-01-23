//http://davidwalsh.name/css-animation-callback
http://brentvatne.ca/animation-obsession-and-ng-animate-1-3/
module Web.Client {

    export class HomeController {

        private message: string;
        private currentPage: string;
        private el:Element;

        public static $inject = ['$timeout', '$q', '$animate'];
        constructor(private $timeout: ng.ITimeoutService, $q:any, private $animate) {
            this.message = "Message from Home";
            //var show = Impressive(document, window);
            this.currentPage = "views/resume.html";


            //this.el = $("#zano-container")[0];
            this.$animate.animate($("#zano-container"), null, null, "animate-in").then(() => {
                console.log('que coza');
            });




//            this.animationTracker($("#zano-container"), 'animate-in', true,() => {
//                console.log("did the intro");
//                this.animationTracker($('#bottom-left-triangle, #top-right-triangle'), 'animate-in', true, () => {
//                    console.log("did the triangles");
//                    this.animationTracker($('#bottom-left-curtain, #top-right-curtain'), 'animate-in', true, () => {
//                        console.log("curtains open");
//                    });
//                });
//            });
        }

        public animationTracker(element: JQuery, animationClass: string, keepAnimationClass: boolean = true, onAnimationEnd: () => void = null): void {
            //Need to setup promise to that call only called once
            element
                .addClass(animationClass)
                .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', () => {

                    if(!keepAnimationClass)
                        element.removeClass(animationClass);

                    if(onAnimationEnd)
                        onAnimationEnd();
                });  
        }

        public changePage($event): void {

            $('#bottom-left-curtain').addClass('close-left-curtain');
            $('#top-right-curtain').addClass('close-right-curtain')
                .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', () => {
                    console.log("done");
//                    var nextPage = $($event.target).text();
//                    switch (nextPage) {
//                        case 'HOME':
//                            this.currentPage = "views/intro.html";
//                            break;
//                        case 'MUSIC':
//                            this.currentPage = "views/music.html";
//                            break;
//                        case 'RESUME':
//                            this.currentPage = "views/resume.html";
//                            break;
//                        case 'PROJECTS':
//                            this.currentPage = "views/projects.html";
//                            break;
//                    }

                    $('#bottom-left-curtain').removeClass('close-left-curtain');
                    $('#top-right-curtain').removeClass('close-right-curtain');         
            });
//            this.$timeout(() => {
//
//
//            }, 200);
        }
    }
}
app.registerController('Web.Client.HomeController', Web.Client.HomeController);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.HomeController, 'vm', "initial", "/home", "views/home.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");

 