const request = require('request');
const cheerio = require('cheerio');

const URL = process.argv[2].split("=")[1]
const words = process.argv[3].split("=")[1].split(",")
console.log(URL, words)

request(URL, function (err, res, body) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        let $ = cheerio.load(body)
        const wordMap = getWordsCount($)
        console.log(wordMap)
        return wordMap
    }

});

const getWordsCount = ($) => {
    let annata=[]
       
        $('.description_1qL4H').each((index,el)=> {
            annata.push($(el).text());
        });
        $('stagger-items.description_3kzKJ').each((index,el) => {
            annata.push($(el).text());
        })
        $("p.description_2S_ru").each((index,el) => {
            annata.push($(el).text());
        })
        $("p.description_yTgpj").each((index,el) => {
            annata.push($(el).text());
        })
        $("p").each((index,el) => {
            annata.push($(el).text());
        })
       $("h3.title_1Dz7x").each((index,el) => {
        annata.push($(el).text());
       })
      $("headingInner_tbW-a").each((index,el) => {
        annata.push($(el).text());
      })
      $("subHeading_W17C2").each((index,el) => {
        annata.push($(el).text());
      })
      $("h2.heading_2_kcN").each((index,el) => {
        annata.push($(el).text());
      })
      $("p.description_RppcM").each((index,el) => {
        annata.push($(el).text());
      })
      
       
    let anattaCount = 0;
    let growthCount = 0
    let sustainableCount=0
        for (let str of annata) {
            const arr = str.split(" ");
            for (let word of arr) {
                if (word.toLowerCase() === "anatta") {
                    anattaCount++
                }
                if (word.toLowerCase().substr(0,6)==="growth") {
                    growthCount++
                }
                if (word.toLowerCase() ==="sustainable") {
                    sustainableCount++
                }
            }
        }
    return { growthCount, anattaCount,sustainableCount}
}