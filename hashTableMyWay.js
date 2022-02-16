const users = {};
function user(firstName, lastName, email, phone) {
	if (!firstName || !lastName || !email || !phone) {
		console.warn(
			"you are missing one or more information please check and intere your infos"
		);
	}
	if (
		typeof firstName !== "string" ||
		typeof lastName !== "string" ||
		typeof email !== "string"
	) {
		console.error("One or more values are invalid");
		return;
	}
	let hashedKey = "";
	let fnlen = firstName.length;
	let lnlen = lastName.length;
	let stringifyPhone = phone.toString();
	let remainingFirstName = "";
	let remainingLastName = "";

	if (fnlen >= lnlen) {
		if (stringifyPhone.length >= lnlen) {
			let start = stringifyPhone.length - lnlen;
			stringifyPhone = stringifyPhone.substring(
				start,
				stringifyPhone.length
			);
		}
		let emailIndex;
		let modifiedEmail;
		for (let i = 0; i < fnlen; i++) {
			if (firstName[i] && lastName[i] && stringifyPhone[i]) {
				hashedKey =
					hashedKey + firstName[i] + lastName[i] + stringifyPhone[i];
			} else if (firstName[i] && lastName[i]) {
				hashedKey += firstName[i] + lastName[i];
			} else if (firstName[i] && stringifyPhone[i]) {
				hashedKey += firstName[i] + stringifyPhone[i];
			} else {
				emailIndex = firstName.length - i;
				remainingFirstName = firstName.substring(i);
				modifiedEmail = email.substring(0, emailIndex);
				break;
			}
		}
		let emailToReAsign = "";
		for (let i = 0; i < modifiedEmail.length; i++) {
			if (modifiedEmail[i] !== "." && modifiedEmail[i] !== "@") {
				emailToReAsign += modifiedEmail[i];
			}
		}
		//         console.log(modifiedEmail)
		for (let i = 0; i < remainingFirstName.length; i++) {
			if (remainingFirstName[i] && emailToReAsign[i]) {
				hashedKey += remainingFirstName[i] + emailToReAsign[i];
			} else if (remainingFirstName[i] && !emailToReAsign[i]) {
				hashedKey += remainingFirstName[i];
			}
		}
	} else {
		if (stringifyPhone.length >= fnlen) {
			let start = stringifyPhone.length - fnlen;
			stringifyPhone = stringifyPhone.substring(
				start,
				stringifyPhone.length
			);
		}
		//         let flag = lnlen >= stringifyPhone.length;
		let emailIndex;
		let modifiedEmail;
		for (let i = 0; i < lnlen; i++) {
			if (firstName[i] && lastName[i] && stringifyPhone[i]) {
				hashedKey =
					hashedKey + firstName[i] + lastName[i] + stringifyPhone[i];
			} else if (firstName[i] && lastName[i]) {
				hashedKey += firstName[i] + lastName[i];
			} else if (lastName[i] && stringifyPhone[i]) {
				hashedKey += lastName[i] + stringifyPhone[i];
			} else {
				emailIndex = lastName.length - i;
				remainingLastName = lastName.substring(i);
				modifiedEmail = email.substring(0, emailIndex);
				break;
			}
		}
		let emailToReAsign = "";
		for (let i = 0; i < modifiedEmail.length; i++) {
			if (modifiedEmail[i] !== "." && modifiedEmail[i] !== "@") {
				emailToReAsign += modifiedEmail[i];
			}
		}
		//         console.log(modifiedEmail)
		for (let i = 0; i < remainingLastName.length; i++) {
			if (remainingLastName[i] && emailToReAsign[i]) {
				hashedKey += remainingLastName[i] + emailToReAsign[i];
			} else if (remainingFirstName[i] && !emailToReAsign[i]) {
				hashedKey += remainingLastName[i];
			}
		}
	}

	if (!users[hashedKey]) {
		users[hashedKey] = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone.toString(),
		};
		//         console.log(users)
	} else {
		console.warn(hashedKey, "this user already exist");
		//         console.log(users[hashedKey])
	}
	return users;
}
// 'samuel'
user("samuelmarkson", "befekadu", "MUCHA@gmail.com", 832300223);
user("lidet", "befekadu", "lidet@gmail.com", 09113495183); //sbaemlueetle, 548392
user("kidt", "Micheal", "kid@gmail.com", 44400303030);
user(
	"yayneabebasatitegebwedebetuahedech",
	"minew",
	"yayne@edcc.edu",
	4259834567
);
user("JagamaKelo", "Backadebele", "MUCHA@gmail.com", 091123456754);
user("Mulasam", "deferami", "tizitu@gmail.com", 09113495183);
user("kidist", "befekadu", "kid@gmail.com", 251011300891);
user(
	"yayneabebasatitegebwedebetuahedech",
	"minew",
	"yayne@edcc.edu",
	4259834567
);
