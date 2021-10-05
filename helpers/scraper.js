const router = require('express').Router();
const axios = require('axios');
const CoworkerModel = require('../Models/CoworkerSchema');

router.get('/scrap/coworkers', async (req, res, next) => {
  try {
    const coworkersCount = await CoworkerModel.find().count();
    if (coworkersCount === 0) {
      const api = await axios({
        method: 'get',
        url: 'https://tretton37-assignment-frontend.herokuapp.com/api/coworkers?',  
      });
      const { data } = api.data;
      const newCoworkersList = await CoworkerModel.insertMany(data);
      res.status(201).send({
        codeMessage: 'Created',
        response: newCoworkersList
      });
    } else {
      res.status(406).send({
        codeMessage: 'Not Acceptable',
        response: `Database is already uptodate ( I see what you did there :D )`
      });
    }
  } catch (error) {
    res.status(500).send({
      codeMessage: 'Internal Error',
      response: error.message
    });
  }
});

module.exports = router;

/*
  * GET             URL: https://tretton37-assignment-frontend.herokuapp.com/api/coworkers?
  * Description     API to scrap the coworkers data from the corresponding URL
*/