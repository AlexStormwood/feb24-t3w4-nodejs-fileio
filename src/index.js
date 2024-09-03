let defaultEnv = {
	PORT: 3030,
	SOME_DATABASE_URL: "blah blah blah",
	SECURITY_TOKEN: "aosldkhalfkhasfdas",
	SECRET_API_KEY: "01328eyu1903r82hegfsl;vkdns",
	JWT_SECRET_KEY:"some special jwt salt word or phrase"
}

console.log(defaultEnv);

let contentToWrite = "";

// PORT=3030
// SOME_DATABASE_URL=blah blah blah

// ["PORT", "SOME_DATABASE_URL", "SECURITY_TOKEN", etc etc]
Object.keys(defaultEnv).forEach(envKey => {
	// Add a line to contentToWrite with the key name and key value
	contentToWrite += `${envKey}=${defaultEnv[envKey]}\n`;
});

console.log(contentToWrite);


const fs = require("node:fs");

// fs.writeFileSync(".env", contentToWrite);
// console.log("File has been written!");

console.log("Before the fs callback");

// fs.writeFile(filePath, fileContents, callback);
fs.writeFile("./nonexistentfolder/.env", contentToWrite, (error) => {
	if (error){
		console.log("File writing had errors!");
	} else {
		console.log("File has been written!");
	}
	// console.log("writeFile has reached the blah blah blah callback");

	// console.log("File has been written!");
});

console.log("After the fs callback");
