#!/usr/bin/node

const readline = require("node:readline");

async function main() {
	const obj = {};
	const rl = readline.createInterface({
		input: process.stdin,
	});
	for await (const line of rl) {
		let id = "";
		let words = line.split(' ');
		if(words[4].includes("/qmgr[") && line.includes("from")) {
			let id = words[5].substr(0, words[5].length - 1);
			obj[id] = {id: id};
			let from = words[6].split('=');
			let size = words[7].split('=');
			obj[id].from = from[1].slice(0, -1);
			obj[id].size = parseInt(size[1].slice(0, -1));
			obj[id].date = words[0] + " " + words[1] + " " + words[2];
			obj[id].to = [];
		}
		if(words[4].includes("/pipe[")) {
			let id = words[5].substr(0, words[5].length - 1);
			if(obj[id]) {
				let to = words[6].split('=');
				obj[id].to.push(to[1].slice(0, -1));
			}
		}
	}
	console.log(obj); 
}

main();
