
module Web.Client {

    export class ProjectsController {

        private message: string;

       // public static $inject = ['$q', '$animate'];
        constructor() {
            this.message = "Message from Home";
        }
    }
}
app.registerController('Web.Client.ProjectsController', Web.Client.ProjectsController);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.ProjectsController, 'vm', "initia", "/projects", "views/allProjects.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");

