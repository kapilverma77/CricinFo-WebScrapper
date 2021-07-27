let req = require("request");
let ch = require("cheerio");
let obj = require("./match.js");
const { processMatch } = require("./match.js");
console.log("Before");
function getScoreCardUrl(url) {

    req(url, cb);
}
function cb(error, response, data) {
    
    if (response.statusCode == 404) {
        console.log("Page not found");
        
    } else if (response.statusCode == 200) {
        
        parseHTML(data);
    } else {
        console.log(err);
    }
}
function parseHTML(data) {
    let fTool = ch.load(data);
    let AllScorecardElem = fTool('a[data-hover="Scorecard"]');
    for (let i = 0; i < AllScorecardElem.length; i++) {
        let url = ch(AllScorecardElem[i]).attr("href");
        let fullUrl = "https:
        obj.pm(fullUrl);
    }
    
}
console.log("After");
console.log("Req send");
module.exports = {
    getScoreCardUrl: getScoreCardUrl
}