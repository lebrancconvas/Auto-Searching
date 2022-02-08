const puppeteer = require('puppeteer');

const GoogleSearching = async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const baseLink = "https://google.com";
    const keyword = ["ReactJS", "Animation"];
    let searchKeyword = "";
    let searchStrictKeyword = "";
    let queryParam = "";
    keyword.map(word => {
        searchKeyword += `${word}%2B`;
        searchStrictKeyword += `"${word}"%2B`;
    });

    const searchStrict = (strict) => {
        if (strict) {
            queryParam = `search?q=${searchStrictKeyword}`;
        } else {
            queryParam = `search?q=${searchKeyword}`;
        }
        return queryParam.substring(0, queryParam.length - 3);
    };

    const isStrict = true;
    const link = `${baseLink}/${searchStrict(isStrict)}`;

    await page.goto(link, { 'waitUntil': 'domcontentloaded' });

    await page.setViewport({ width: 1440, height: 788 });
}

module.exports = GoogleSearching;