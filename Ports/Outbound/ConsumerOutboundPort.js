const { HandleConsumeMessageProxy } = require('../../Adapters/Outbound/ConsumerProxy');

const HandleConsumeMessageOutboundPort = async () => {
  try {
    
    const receivedMessage = await HandleConsumeMessageProxy();
    return receivedMessage;

  } catch (error) {
    return error;
  }
};

module.exports = {
  HandleConsumeMessageOutboundPort
};