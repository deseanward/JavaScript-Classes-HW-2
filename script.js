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
Governor.passNewLaw('10hr Remote Work Week')
Governor.addressAgency('Dept. of Health')
Governor.standInForMayor()