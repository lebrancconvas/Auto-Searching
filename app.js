const GoogleSearching = require('./src/GoogleSearching');
const YoutubeSearching = require('./src/YoutubeSearching');

const App = async() => {
    try {
        console.log("Puppeteer is preparing to work.");
        const response = await YoutubeSearching();
        if (response !== undefined) {
            console.log(response);
        } else {
            console.log("Puppeteer works success !!");
        }
    } catch (err) {
        console.log(err);
        console.log("Puppeteer works fail !!");
    }
}

App();