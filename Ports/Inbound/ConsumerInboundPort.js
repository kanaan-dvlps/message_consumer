const { ReceiveMessage } = require('../../DomainLogics/ConsumerDomainLogic');

const HandleConsumeMessageInboundPort = async () => {
  try {
    
    const receivedMessage = await ReceiveMessage();
    return receivedMessage;

  } catch (error) {
    return error;
  }
};

module.exports = {
  HandleConsumeMessageInboundPort
};