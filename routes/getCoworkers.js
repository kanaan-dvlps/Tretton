const router = require('express').Router();
const CoworkerModel = require('../Models/CoworkerSchema');

router.get('/coworkers', async (req, res, next) => {
  try {
    const { start, end, filter } = req.query;

    let SKIP = Number(start);
    let LIMIT = Number(end);

    if (filter) {
      // ? new RegExp("^" + filter, "i") is for an case insensitive search
      const filteredCoworkersList = await CoworkerModel.find({
        $and: [
          { $or: [{ name: { $regex: new RegExp("^" + filter, "i") } }, { country: { $regex: new RegExp("^" + filter, "i") } }, { city: { $regex: new RegExp("^" + filter, "i") } }] }
        ]
      }).skip(SKIP).limit(LIMIT).lean();
      // const filteredCoworkersList = await CoworkerModel.find({ city: { $regex: filter } }).skip(SKIP).limit(LIMIT);
      const coworkersCount = await CoworkerModel.find().count();
      res.status(200).send({
        data: filteredCoworkersList,
        totalLength: coworkersCount
      });
    } else {
      const coworkersList = await CoworkerModel.find().skip(SKIP).limit(LIMIT);
      const coworkersCount = await CoworkerModel.find().count();
      res.status(200).send({
        data: coworkersList,
        totalLength: coworkersCount
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