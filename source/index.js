var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    AWS.config.update({region: 'eu-west-1'});
    
    // Recuperation du message envoyé en JSON :
    var data = JSON.stringify(event);
    console.log("request: " + data);
    console.log("prenom: " + event.prenom);
    console.log("prenom: " + event.nom);

            var responseBody = {
                "bienvenue": "Bienvenue 3 " + event.prenom + ", " + event.nom
            };
    
            var response = {
                statusCode: 200,
                body: responseBody
            };

            callback(null, response);

};
