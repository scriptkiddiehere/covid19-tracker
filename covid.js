const puppeteer = require("puppeteer");
let page;
async function fn() {
    try {
        const browser = await puppeteer
            .launch({
                headless: false,
                defaultViewport: null,
                args: ["--start-maximized"],
            })
        let pages = await browser.pages();
        page = pages[0];
        console.log("-----------Covid-19 Tracker----------- ")
        await page.goto("https://covid19india.org/");
        await page.waitForSelector(".clickable.is-confirmed", { visible: true });
        await page.click(".clickable.is-confirmed");
        let totalcase = await page.$("#root > div > div.Home > div.home-right > div.map-container > div.MapExplorer > div.panel > div.panel-left.fadeInUp > h1 > div:nth-child(1)");
        await delay(500);
        let tcase = await page.evaluate(el => el.textContent, totalcase)
        console.log("\n-------------Total Confirmed-----------");
        console.log(tcase);
        await page.waitForSelector(".clickable.is-active", { visible: true });
        await page.click(".clickable.is-active");
        let totalactive = await page.$("#root > div > div.Home > div.home-right > div.map-container > div.MapExplorer > div.panel > div.panel-left.fadeInUp > h1 > div:nth-child(1)");
        await delay(500);
        let tactive = await page.evaluate(el => el.textContent, totalactive)
        console.log("-------------Total Active-----------");
        console.log(tactive);
        await page.waitForSelector(".clickable.is-recovered", { visible: true });
        await page.click(".clickable.is-recovered");
        let totalrecovered = await page.$("#root > div > div.Home > div.home-right > div.map-container > div.MapExplorer > div.panel > div.panel-left.fadeInUp > h1 > div:nth-child(1)");
        await delay(500);
        let trec = await page.evaluate(el => el.textContent, totalrecovered)
        console.log("-------------Total Recovered-----------");
        console.log(trec);
        await page.waitForSelector(".clickable.is-deceased", { visible: true });
        await page.click(".clickable.is-deceased");
        let totaldeceased = await page.$("#root > div > div.Home > div.home-right > div.map-container > div.MapExplorer > div.panel > div.panel-left.fadeInUp > h1 > div:nth-child(1)");
        await delay(500);
        let tdec = await page.evaluate(el => el.textContent, totaldeceased)
        console.log("-------------Total Deceased-----------");
        console.log(tdec);
        let totalvaccine = await page.$("#root > div > div.Home > div.home-left > div.VaccinationHeader > div.level-vaccinated.fadeInUp > div:nth-child(2)");
        let tvaccine = await page.evaluate(el => el.textContent, totalvaccine)
        console.log("-------------Total Vaccine Doses Administered-----------");
        console.log(tvaccine);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        await page.close();
    }
}

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

fn();