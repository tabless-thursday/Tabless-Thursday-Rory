// object rubric

const call = {
    "h4": "Start Cleaning Up Your Tabs Today"
}

let callInfo = document.querySelector( ".objectInsert");

callInfo.textContent = call.h4;



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

        this.closeButton = this.domElement.querySelector(".closeButton");

        this.closeButton.textContent = "Close";

        this.expandButton.addEventListener( 'click', () => this.expandWhy());

        this.closeButton.addEventListener( 'click', () => this.closeWhy());

    }

    //method
    expandWhy() {

        this.domElement.classList.add('why-open');

        this.expandButton.style.display = "none";

        this.closeButton.style.visibility = "visible";
    }

    closeWhy() {
        this.domElement.classList.add('why-indy');

        this.domElement.classList.remove('why-open');

        this.expandButton.style.display = "initial";

        this.closeButton.style.visibility = "hidden";
    }


}






let whys = document.querySelectorAll(".why-indy").forEach( why => new Why(why));