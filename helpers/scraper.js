const axios = require('axios');
const CoworkerModel = require('../Models/CoworkerSchema');
const cheerio = require('cheerio');
// const textGetter = require('./textScraper');

/*
  TODO: [X] name,
  TODO: [X] country,
  TODO: [X] city,
  TODO: [X] text (Dummy Text),
  TODO: [X] imagePortraitUrl,
  TODO: [X] imageFullUrl,
*/

// 'https://tretton37-assignment-frontend.herokuapp.com/api/coworkers?'
async function scraper(skip, limit) {
  try {
    const People = [];
    const person = {}
    let profileURL;
    const profileURLs = [];
    const coworkersCount = await CoworkerModel.find().count();
    if (coworkersCount === 0) {
      const api = await axios({
        method: 'get',
        url: 'https://tretton37.com/meet',
      });
      const { data } = api;
      const $ = await cheerio.load(data);
      const ninjas = await $('.ninjas').each((i, el) => {
        el.children.forEach(async item => {
          // this gave me the child nedes of the ninja-summery class
          // 🇸🇪
          const contact = $(item).find('.contact-info').html();
          const contactTextInfo = $(contact).find('a').html();
          const name = contactTextInfo?.split('<span>')[0];
          const country = contactTextInfo?.split('<span>')[1].replace('</span>', '').split(' ')[0];
          const city = contactTextInfo?.split('<span>')[1].replace('</span>', '').split(' ')[1];
          const src = $(item).find('.contact-info').siblings('a').children('img').attr('src');
          if (name) {
            person.name = name;
            // * / /g is a regexp to remove all the white spaces with dashes since there might be more than two words in a name only specifying the white space with ' ' sign as white space won't work!
            const URLName = name.replace(/ /g, '-');
            profileURL = `/meet/${URLName}`
            profileURLs.push(profileURL);
            // console.log(profileURL);
          }
          if (country !== undefined) {
            person.country = country;
          }
          if (city) {
            person.city = city;
          }
          // * Here we should have our text property logic
          // * if you want to see the text crawler logic proceed to the ./textScraper.js file in this existing folder. :)
          // textGetter(profileURLs);
          person.text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;

          if (Object.keys(person).length) {
            People.push(person);
          }
          if (src !== undefined || null) {
            person.imagePortraitUrl = src;
            person.imageFullUrl = src;
          }
          // console.log(People);
        });
      });
      const newInstance = await CoworkerModel.insertMany(People);
      console.log(newInstance);
    }

    const coworkers = await CoworkerModel.find();
    const difference = await People.filter(items => !coworkers.includes(items));
    // if more than one insertMany if not insert one
    if (difference.length < 1) {
      const newSingleInstance = await new CoworkerModel(difference[0]);
      return newSingleInstance;
    } else if (difference.length > 1) {
      const newInstances = await CoworkerModel.insertMany(difference);
      return newInstances;
    }
  } catch (error) {
    throw error.message;
  }
};

module.exports = scraper;

/*
  * GET             URL: https://tretton37-assignment-frontend.herokuapp.com/api/coworkers?
  * Description     API to scrap the coworkers data from the corresponding URL
*/