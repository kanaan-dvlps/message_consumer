const amqp = require('amqplib/callback_api');

const HandleConsumeMessageProxy = async () => {
  try {
    const messages = [];
    amqp.connect('amqp://channel_rabbitmq_service:5672', (error, connection) => {
      if (error) {
        throw error;
      }
      connection.createChannel((err, channel) => {
        if (err) {
          throw err;
        }

        const queue = 'order';

        channel.assertQueue(queue, {
          durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, (msg) => {
          console.log(" [x] Received %s", msg.content.toString());
        }, {
          noAck: true
        });
      });
    });

    return messages;
  } catch (error) {
    return error;
  }
};

module.exports = {
  HandleConsumeMessageProxy
}