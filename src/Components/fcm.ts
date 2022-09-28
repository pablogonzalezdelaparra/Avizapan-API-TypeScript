var FCM = require('fcm-node');
var serverKey = 'AAAA2UWyjZs:APA91bFm5OIBbWniFq3IsPaVKP8GvtIS1RWaSfavTX4EmEQZcHh8PpIDtoMCBrGGK5E7mjYWOnMXrFpsixAHV7XNpVThTX3ztAO1WD5KYrlYjAbkp1Lkw6KPlP8soOtQ_44mCFNSrWW_';
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