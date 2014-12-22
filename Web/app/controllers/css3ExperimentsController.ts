/// <reference path="../../scripts/typings/impress/impress.d.ts" />

module Web.Client {

    export class Css3Controller {

        private message: string;
        private letters: string[];


        constructor() {
            this.message = "Message from State 1";
            //var show = Impressive(document, window);
            this.letters = [];
        }

        public addLetter(): void {

            var letter: string = String.fromCharCode(97 + Math.floor(Math.random() * 26));

            if(this.letters.indexOf(letter)<0)
                this.letters.push(letter);
        }

        public clearLetters(): void {
            this.letters.splice(0, this.letters.length);
        }

        public addGroup(): void {
            this.letters = ["a", "b", "c"];
        }
    }
}
app.registerController('Web.Client.Css3Controller', Web.Client.Css3Controller);
//app.registerRoute('/state1', 'Web.Client.State1 as vm', 'views/state1.html');
app.registerAngularUiRoute(Web.Client.Css3Controller, 'vm', "unique", "/css3", "views/css3.html");
//app.registerAngularUiRoute(Web.Client.ImpressController, 'vm', "impress.slide1", "/impress/#/step-1", "views/impress.html");

