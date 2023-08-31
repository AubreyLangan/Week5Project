class PartyGuest {
    constructor(name, email, status) {
        this.name = name
        this.email = email
        this.phoneNumber = this.phoneNumber;
        this.status = status
    }
}

class InvitationList {
    constructor() {
        this.guests = [];
    }
    inviteGuest(name, email, phoneNumber){
        let newGuest = new PartyGuest(name, email, phoneNumber, "Invited");
        this.guests.push(newGuest);
        console.log(`${name} has been invited to the party.`);
    }
    viewGuestList(){
        console.log("Invitation List:");
        this.guests.forEach(guest => {
            console.log(`${guest.name} ${guest.email} - ${guest.status}`)
        });
    }
    updateStatus(email, status){
        let guest = this.guests.find(guest => guest.email === email);
        if (guest) {
            guest.status = status;
            console.log(`${guest.name}'s status has been updated to ${status}.`)
        } else {
            console.log(`Guest with email ${email} not found.`);
        }
    }
    removeGuest(email){
        let guestIndex = this.guests.findIndex(guest => guest.email === email)
        if (guestIndex !== -1) {
            let removedGuest = this.guests.splice(guestIndex, 1)[0];
            console.log(`${removedGuest.name} has been removed from the guest list.`)
            } else {
                console.log(`Guest with email ${email} not found.`);
            }
        }
    }
class Menu {
    constructor(invitationList){
        this.invitationList = invitationList;
    }
    displayWelcomeScreen(){
        let welcomeMessage =
                "Welcome to the Invitation List App!\n" +
                "Here are your options:\n" +
                "1. Invite Guest\n" +
                "2. View Guest List\n" +
                "3. Remove Guest\n" +
                "4. Update Status\n" +
                "5. Exit";
        window.alert(welcomeMessage);
        let choice = prompt(welcomeMessage + "\nEnter your choice: ");
        this.handleChoice(choice);
    }
    handleChoice(choice){
        switch (choice) {
            case "1":
                this.inviteGuest();
                break;
            case "2":
                this.viewGuestList();
                break;
            case "3":
                this.removeGuest();
                break;
            case "4":
                this.updateStatus();
                break;
            case "5":
                console.log("Exiting the app.");
                break;
            default:
                console.log("Invalid choice. Please enter a valid option.");
                this.displayWelcomeScreen();
                break;
        }
    }
    inviteGuest(){
        let name = prompt("Enter guest's name: ");
        let email = prompt("Enter guest's email: ");
        let phoneNumber = prompt("Enter guest's phone number: ")
        this.invitationList.inviteGuest(name, email, phoneNumber);
        this.displayWelcomeScreen();
    }
    viewGuestList(){
        let guestListMessage = "Invitation List:\n";
        this.invitationList.guests.forEach(guest => {
            guestListMessage += `${guest.name} ${guest.email} - ${guest.status}\n `;
        });
        window.alert(guestListMessage);
        this.displayWelcomeScreen();
    }
    removeGuest(){
        let email = prompt("Enter guest's email to remove: ");
        this.invitationList.removeGuest(email);
        this.displayWelcomeScreen();
    }
    updateStatus(){
        let email = prompt("Enter guest's email to update status: ");
        let status = prompt("Enter new status: ");
        this.invitationList.updateStatus(email, status);
        this.displayWelcomeScreen();
    }
    start(){
        console.log("Welcome to the Invitation List App!");
        this.displayWelcomeScreen();
    }
}
let invitationApp = new InvitationList();
let menu = new Menu(invitationApp);

menu.start();

invitationApp.inviteGuest("Sam", "samsemail@gmail.com");
invitationApp.inviteGuest("Nathalia", "natsemail@aol.com");
invitationApp.inviteGuest("Janelle", "janellesemail@gmail.com");

invitationApp.viewGuestList();

invitationApp.updateStatus("samsemail@gmail.com", "Invited");
invitationApp.updateStatus("natsemail@gmail.com", "Invited");

invitationApp.viewGuestList();
