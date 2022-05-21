const { HandleConsumeMessageInboundPort } = require('../../Ports/Inbound/ConsumerInboundPort');

const HandleConsumeMessageAdapter = async () => {
  try {
    
    const receivedMessage = await HandleConsumeMessageInboundPort();
    return receivedMessage;

  } catch (error) {
    return error;
  }
};

module.exports = {
  HandleConsumeMessageAdapter
};