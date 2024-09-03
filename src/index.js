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


// Promises-based version of node:fs
const fs = require("node:fs/promises");

async function writeEnvFile(){
	console.log("Before the await");
	try {
		let result = await fs.writeFile(".env", contentToWrite);
		console.log(result);
	} catch (error) {
		console.log("Error occured writing the file:", error);
	}
	
	console.log("After the await");
}
writeEnvFile();

async function app(){
	console.log("Before calling async writer");
	await writeEnvFile().then(() => {
		console.log("File writing maybe finished? Who knows!");
	});
	console.log("After calling async writer");
}
app();



// console.log("Before the promise");
// fs.writeFile(".env", contentToWrite)
// .then(() => {
// 	console.log("After the file has been written");
// }).then(() => {

// 	console.log("Some other operation that had to wait for file writing to be done");
	
// 	// fs.writeFile(".someOtherFile", contentToWrite).then(() => {
// 	// 	console.log("After the file has been written in the 2nd block");
// 	// 	fs.writeFile("./nonexistentfolder/someOtherFile2", contentToWrite).then(() => {
// 	// 		console.log("After the file has been written in the 3rd block");
// 	// 	}).catch((error) => {
// 	// 		console.log("Error occured in a deeply-nested promise chain", error.message);
// 	// 	});

// 	// }).catch(error => {
// 	// 	console.log("Error occured in the 2nd promise chain", error);
// 	// })

// })
// .then(() => {
// 	console.log("This then will throw ");
// 	throw new Error("Some made-up error");
// }).then(() => {
// 	console.log("Last then happened!");
// }).catch((error) => {
// 	console.log("This error occured:", error);
// }).finally(() => {
// 	console.log("All file writing is done");
// });

// console.log("After the promise");













// const fs = require("node:fs");

// // fs.writeFileSync(".env", contentToWrite);
// // console.log("File has been written!");

// console.log("Before the fs callback");

// // fs.writeFile(filePath, fileContents, callback);
// fs.writeFile("./nonexistentfolder/.env", contentToWrite, (error) => {
// 	if (error){
// 		console.log("File writing had errors!");
// 	} else {
// 		console.log("File has been written!");
// 	}
// 	// console.log("writeFile has reached the blah blah blah callback");

// 	// console.log("File has been written!");
// });

// console.log("After the fs callback");











