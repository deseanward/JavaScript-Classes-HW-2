/**
 * ******************** Static Methods and Properties ********************
 */
console.log(`/**
* ******************** Static Methods and Properties ********************
*/`);
class Governor {
	static name = 'De Sean Ward';
	static age = 30;
	static qualifiedResident = true;
	static qualifiedVoter = true;

	static passNewLaw(law) {
		console.log(
			`The "${law}" law has been signed, and is effective immediately!`
		);
	}

	static addressAgency(agency) {
		console.log(`The ${agency} has been briefed!`);
	}

	static standInForMayor() {
		console.log("Ok... I'll kiss the babies.");
	}
}

console.log(Governor.name);
Governor.passNewLaw('10hr Remote Work Week');
Governor.addressAgency('Dept. of Health');
Governor.standInForMayor();
console.log(' ');

/**
 * ******************** Inheritance ********************
 */
console.log(`/**
 * ******************** Inheritance ********************
 */`);
class Person {
	constructor(name, city, occupation) {
		this.name = name;
		this.city = city;
		this.occupation = occupation;
	}

	greetMe(myName = 'my good person') {
		console.log(
			`${this.name}: Good morning ${myName}, my name is ${this.name}.  It's a pleasure to be your ${this.occupation} today.`
		);
	}

	wakeUp() {
		console.log(
			`${this.name}: (stretching...) Good morning. Time to make the donuts in this beautiful city of ${this.city}.`
		);
	}

	getDressed() {
		console.log(
			`${this.name}: First shower, get dressed, and then on my way to being a ${this.occupation}.`
		);
	}

	goHome() {
		console.log(
			`${this.name}: Aaaah... work is done. About to relax and be a ${this.occupation} again tomorrow.`
		);
	}
}

/***** CLASSES *****/
class PostalWorker extends Person {
	doWork() {
		console.log(
			`${this.name}: Lots of mail today. But, the day goes by quick if you whistle while you work!`
		);
	}

	takeBreak() {
		console.log(
			`${this.name}: I would love to take a break, but there's too much mail to process`
		);
	}
}

class Chef extends Person {
	prepareFood() {
		console.log(
			`${this.name}: Chop, slice, dice... Wash, rinse, repeat...`
		);
	}

	alertWaiter() {
		console.log(`${this.name}: (ringing bell...) Order's ready!!!`);
	}
}

/***** Instances *****/
const billy = new PostalWorker('Billy', 'Chicago', 'Mail Courier');
const margie = new PostalWorker('Margie', 'Austin', 'Mail Clerk');

const eddie = new Chef('Eddie', 'Houston', 'Sous Chef');
const carl = new Chef('Carl', 'Los Angeles', 'Line Cook');

/***** Function calls *****/

console.log('/***** Function calls *****/');
billy.wakeUp();
billy.getDressed();
billy.greetMe();
billy.doWork();
billy.takeBreak();
billy.goHome();
console.log(' ');

margie.wakeUp();
margie.getDressed();
margie.greetMe('De Sean');
margie.doWork();
margie.takeBreak();
margie.goHome();
console.log(' ');

eddie.wakeUp();
eddie.getDressed();
eddie.greetMe();
eddie.prepareFood();
eddie.alertWaiter();
eddie.goHome();
console.log(' ');

carl.wakeUp();
carl.getDressed();
carl.greetMe('De Sean');
carl.prepareFood();
carl.alertWaiter();
carl.goHome();
console.log(' ');
