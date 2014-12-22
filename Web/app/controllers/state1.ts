module Web.Client {

    export class State1 {

        private message: string;

        constructor() {
            this.message = "Message from State 1";
        }
    }
}
app.registerController('Web.Client.State1', Web.Client.State1);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.State1, 'vm', "state1", "/state1", "views/state1.html");
