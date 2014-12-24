/// <reference path="../../scripts/typings/impress/impress.d.ts" />

module Web.Client {

    export class ImpressController {

        private message: string;
        

        constructor() {
            this.message = "Message from State 1";
            //var show = Impressive(document, window);
        }
    }
}
app.registerController('Web.Client.ImpressController', Web.Client.ImpressController);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress", "/impress", "views/impress-zano.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");

