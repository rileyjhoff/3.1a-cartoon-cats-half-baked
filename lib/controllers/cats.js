const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingCat = cats.find((cat) => cat.id === id);
    res.json(matchingCat);
  })
  .get('/', (req, res) => {
    // const catsIdAndName = cats.reduce((acc, cat) => {
    //   acc.id = cat.id;
    //   acc.name = cat.name;
    //   return acc;
    // }, {});
    // const stringifyed = JSON.stringify({ cats });
    res.json(cats);
  });
