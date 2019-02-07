const call = {
    "h4": "Start Cleaning Up Your Tabs Today"
}

let callInfo = document.querySelector( ".objectInsert");

callInfo.textContent = call.h4;




class RoleLink {
    constructor(roleElement) {

        this.roleElement = roleElement;

        this.tabData = this.roleElement.dataset.tab;

        if(this.tabData === "all") {

            this.members = document.querySelectorAll(".team-member");

        } else {

            this.members = document.querySelectorAll(`.team-member[data-tab="${this.tabData}"]`);
        }

        this.members = Array.from(this.members).map(member => member = new RoleCard(member));

        this.roleElement.addEventListener('click', () => this.selectTab());
    };


    selectTab() {
        const roles = document.querySelectorAll(".role");

        roles.forEach (item => item.classList.remove("active-tab"));

        const members = document.querySelectorAll(".team-member");

        members.forEach(member => member.style.display = "none");

        this.roleElement.classList.add("active-tab");

        this.members.forEach( member => member.selectMember());

    }

}


class RoleCard {
    constructor(cardElement) {

        this.cardElement = cardElement;
    }

    selectMember(){
        this.cardElement.style.display = "flex";
    }
}



let roles = document.querySelectorAll(".role").forEach( role => new RoleLink(role));