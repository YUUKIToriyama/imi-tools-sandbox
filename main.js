/* main.js */

const enrichment = require("imi-enrichment-address");

enrichment("京都市中京区寺町通御池上る上本能寺前町488").then(json => {
	console.log(JSON.stringify(json, null, "\t"));
})

const dateConvert = require("imi-enrichment-date");

const date = dateConvert("令和三年十二月三十一日");
console.log(date);
