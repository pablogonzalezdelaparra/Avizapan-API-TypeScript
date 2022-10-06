var FCM = require('fcm-node');
var serverKey = 'AAAAC2cvhdA:APA91bHl55AIsMCdFlq6_cZFR7KHP9XkpoiegeA5M6_qM8m-HYiKxC3CvMKXSQz3SPS2BTU48YIy0nPT-3wrcwaIYAJyRdqYrq3ZGmTPTrA5dyEeVpoEiXgYE4ZXlyNNjH5qFpMKsQCb';
var fcm = new FCM(serverKey);

function sendNotificationToApp(tokens, {title, description, categoryId}){
    tokens.forEach(token => {
        var message = {
            to: token.token,
            notification: {
                title: title,
                body: description,
            },
            data: {
                title: title,
                body: {description, categoryId}
            },
        };

        fcm.send(message, function(err, response){
            if (err){
                console.log("Error al enviar las notificaciones a la app" + err);
                console.log("Respuesta: "+ response);
            }else{
                console.log("Mensaje enviado correctamente", response);
            }
        })
    });
}

export default sendNotificationToApp;