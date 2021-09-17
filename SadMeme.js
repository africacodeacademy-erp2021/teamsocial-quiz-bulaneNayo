const puppeteer = require('puppeteer');
//const { default: General_question } = require('../questions_categories/general_questions');
 async function happy_emoji(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);
    //select item inspected by xpath
    const [el] =await page.$x('/html/body/main/figure/div[1]/ul/li[2]/img');
    //get the src
    const src = await el.getProperty('src');
    const srcLink = await src.jsonValue();
    if (typeof window !== 'undefined') {
      //localStorage.setItem("emoji",srcLink);
      //<General_question storage = {srcLink}/>
    }else{
      var LocalStorage = require('node-localstorage').LocalStorage;
      localStorage = new LocalStorage('./scratch');
      localStorage.setItem('emoji',srcLink);
    }
    console.log({srcLink}); 
    console.log(localStorage.getItem('emoji'));
    await browser.close();
    return srcLink;
  };  