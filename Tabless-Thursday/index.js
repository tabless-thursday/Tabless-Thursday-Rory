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

        // this.closeButton = this.domElement.querySelector(".closeButton");

        // this.closeButton.textContent = "Close";

        // this.closeButton.style.display = "none";

        // this.whyClose = this.domElement.querySelector(".why-close");

        // this.whyClose.textContent = "Close";

        this.expandButton.addEventListener( 'click', () => this.expandWhy());

        this.closeButton.addEventListener( 'click', () => this.closeWhy());


    }

    //method
    expandWhy() {

        this.domElement.classList.add('why-open');

        this.expandButton.style.display = "none";

        this.closeButton.style.visibility = "visible";


        //this.expandButton.textContent = "Close";

        // this.whyClose.style.display = "visible";
    }

     closeWhy() {
         this.domElement.classList.add('why-indy');

         this.domElement.classList.remove('why-open');

         this.expandButton.style.display = "initial";

         this.closeButton.style.visibility = "hidden";
     }


}

// click () => this.closeWhy()

// closeWhy() {
//     this.domElement.classList.toggle('why-indy');
// }


// const closes = document.querySelectorAll(".closedButton");








let whys = document.querySelectorAll(".why-indy").forEach( why => new Why(why));