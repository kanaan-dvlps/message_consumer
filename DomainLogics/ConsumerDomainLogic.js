const { HandleConsumeMessageOutboundPort } = require('../Ports/Outbound/ConsumerOutboundPort');

const ReceiveMessage = async () => {
  try {
    
    const receivedMessage = await HandleConsumeMessageOutboundPort();
    return receivedMessage;

  } catch (error) {
    return error;
  }
}

module.exports = {
  ReceiveMessage
};