//http://davidwalsh.name/css-animation-callback
module Web.Client {

    export class HomeController {

        private message: string;
        private currentPage:string;

        public static $inject = ['$timeout', '$q'];
        constructor(private $timeout: ng.ITimeoutService, $q:ng.IPromise) {
            this.message = "Message from Home";
            //var show = Impressive(document, window);
            this.currentPage = "views/resume.html";

            this.animationTracker($("#zano-container"), 'animate-in', true,() => {
                console.log("did the intro");
                this.animationTracker($('#bottom-left-triangle, #top-right-triangle'), 'animate-in', true, () => {
                    console.log("did the triangles");
                    this.animationTracker($('#bottom-left-curtain, #top-right-curtain'), 'animate-in', true, () => {
                        console.log("curtains open");
                    });
                });
            });
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

 