
module Web.Client {

    export class HomeController {

        private message: string;


        constructor() {
            this.message = "Message from Home";
            //var show = Impressive(document, window);
        }
    }
}
app.registerController('Web.Client.HomeController', Web.Client.HomeController);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.HomeController, 'vm', "initial", "/home", "views/home.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");

 