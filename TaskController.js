'use strict';

console.log('Loading function TaskController');

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    switch (event.httpMethod) {
        case 'DELETE':
        	var params = {
        		  FunctionName: 'DeleteTaskProcess', /* required */
        		  ClientContext:'None',
        		  InvocationType: 'RequestResponse',
        		  LogType: 'None',
        		  Payload: event,
        		};
        	lambda.invoke(params, done);
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};