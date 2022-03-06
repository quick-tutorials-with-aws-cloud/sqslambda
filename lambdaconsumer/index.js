const AWS = require("aws-sdk");

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

exports.handler = async (event, context) => {

    console.log(`Event ${JSON.stringify(event)}`);

    return {
        statusCode: 200,
        body: JSON.stringify("OK"),
    };

};