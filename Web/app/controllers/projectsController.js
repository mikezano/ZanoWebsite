var Web;
(function (Web) {
    (function (Client) {
        var ProjectsController = (function () {
            // public static $inject = ['$q', '$animate'];
            function ProjectsController() {
                this.message = "Message from Home";
            }
            return ProjectsController;
        })();
        Client.ProjectsController = ProjectsController;
    })(Web.Client || (Web.Client = {}));
    var Client = Web.Client;
})(Web || (Web = {}));
app.registerController('Web.Client.ProjectsController', Web.Client.ProjectsController);

//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.ProjectsController, 'vm', "initia", "/projects", "views/allProjects.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");
//# sourceMappingURL=projectsController.js.map
