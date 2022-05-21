const router = require('express').Router();
const { HandleConsumeMessageAdapter } = require('../Adapters/Inbound/ConsumerAdapter');

router.get('/consume', async (req, res) => {
  try {
    
    const receivedMessage = await HandleConsumeMessageAdapter();
    res.status(200).send({
      message: receivedMessage
    })

  } catch (error) {
    res.status(500).send({
      message: error
    })
  }
})

module.exports = router;