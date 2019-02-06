const doubleUp = document.querySelector(".container");
doubleUp.addEventListener('dblclick', e => {
    window.alert("So Close! Click on the 'Sign Up' Button below :)");
});

class Why {
    //constructor
    constructor (domElement) {

        this.domElement = domElement;

        this.expandButton = this.domElement.querySelector(".expandButton");

        this.expandButton.textContent = "Learn More";

        // this.closeButton = this.domElement.querySelector(".closeButton");

        // this.closeButton.textContent = "Close";

        // this.closeButton.style.display = "none";

        // this.whyClose = this.domElement.querySelector(".why-close");

        // this.whyClose.textContent = "Close";

        this.expandButton.addEventListener( 'click', () => this.expandWhy());


    }

    //method
    expandWhy() {
        this.domElement.classList.toggle('why-open');

        this.expandButton.style.background = "@light-blue";

        //this.expandButton.textContent = "Close";

        // this.whyClose.style.display = "visible";
    }


}




let whys = document.querySelectorAll(".why-indy").forEach( why => new Why(why));