const { Item } = require('../models')

class Controller {
  static async fetchItem(req, res) {
    try {
      const items = await Item.findAll()
      console.log(items);
      res.status(200).json(items)
    } catch (err) {
      console.log(err);
    }
  }

  static async editItem(req, res) {
    try {
      const id = Number(req.params.itemId)
      const items = await Item.update(
        { stock: stock - 1 },
        {
        where: {id},
        returning: true
      })
      res.status(200).json(items)
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Controller