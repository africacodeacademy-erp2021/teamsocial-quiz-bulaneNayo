import cheerio from 'cheerio';
import request from 'request';

const ScrapeLoseMeme = () => {
    
var URL = 'https://www.reddit.com/r/dankmemes/';

request(URL, function(err, resp, html) {
  //If there is no error
  if (!err){
    //The URL Data
    const $ = cheerio.load(html);

    //Save embeded urls
    var returnInfo = [];

    //Treverse the webpage and select the media elements
    $('.media-element').each(function(i, element){
      var temp = $(this).attr('src'); //Create a reference for the image
      returnInfo.push(temp); //Add the URL address to the return info array
    }); 

    //Generate a random number from the length of the returned image urls
    var randomNum = Math.floor(Math.random() * returnInfo.length);

    //Try to output the url, if it doesn't exist or there is a problem it will log it out for us
    try {
      //Output the url for the image you can embed this somewhere and it will show it
      console.log(returnInfo[randomNum]);
    } catch(e) {
      //Output the error
      console.log("Error in the output process: " + e);
    }
  } else {
    //There was an error with our request
    console.log("Error in webscrape process: " + err);
  }

});
}

export default ScrapeLoseMeme;

