const puppeteer = require('puppeteer');

const YoutubeSearching = async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const baseLink = "https://youtube.com";
    const keywordarray = ["ReactJS", "Animation"];
    let keyword = "";
    let strictKeyword = "";
    keywordarray.map(word => {
        keyword += `${word}+`;
        strictKeyword += `"${word}"+`;
    })
    const searchKeyword = keyword.replace('+', '%2B');
    const searchStrictKeyword = strictKeyword.replace('+', '%2B');
    let queryParam = "";

    let searchStrict = (strict) => {
        if (strict) {
            queryParam = `results?search_query=${searchStrictKeyword}`;

        } else {
            queryParam = `results?search_query=${searchKeyword}`;
        }
        return queryParam;
    }

    let link = `${baseLink}/${searchStrict(true)}`;

    await page.goto(link);

    await page.setViewport({ width: 1440, height: 788 });

    // await page.waitForNavigation();
    await page.waitForTimeout(10000);

    // const searchboxSelector = "#search";
    // await page.waitForSelector(searchboxSelector);
    // await page.evaluate(element => element.searchboxSelector);
    // await page.keyboard.type(searchKeyword);
    // await page.keyboard.press("Enter");

    // await page.waitForNavigation();
}

module.exports = YoutubeSearching;