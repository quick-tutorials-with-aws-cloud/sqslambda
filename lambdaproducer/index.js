const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-2" });

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

exports.handler = async (event, context) => {

    let response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: null,
    };

    try {

        const params = {
            QueueUrl: event.QueueUrl,
            MessageBody: event.MessageBody,
            MessageAttributes: event.MessageAttributes,
        };

        console.log(`Sending message to ${JSON.stringify(params)}`);

        var result = await sqs.sendMessage(params).promise();

        console.log(`Message has sent ${JSON.stringify(result)}`);


    } catch (err) {
        console.log(err);
        response.statusCode = 400;
        response.body = JSON.stringify(err.message);
    }

    return response;

};