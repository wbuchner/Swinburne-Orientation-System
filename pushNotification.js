// Code designed by Wayne Buchner
// Owned by Vacation Aps
// ©2010 Vacation Aps & Wayne R Buchner
// Project: Vacation Aps (miCompass) Beta 1.7

Titanium.include('pushModel.js');

var APP_KEY = 'VSdKPPvDRWabLmgDGBbhoQ';
var APP_SECRET = 'YGSUkLpXRiOKgrEM6YpYkw';
//////////////APPLE PUSH NOTIFICATION ///////////////////
/*

Next, you just need to create a couple of functions for handling the result of the registration.

The most important thing here is the success callback. 
This is where you register the device token you just received from Apple with Urban Airship’s servers.

*/
var tag = "UNIVERSITY";
function successCallback(e) {
// NOTE add network test here before production release

    var request = Titanium.Network.createHTTPClient({
        onload:function(e) {
            if (request.status != 200 && request.status != 201) {
                request.onerror(e);
                return;
            }
        },
        onerror:function(e) {
            Ti.API.info("Register with Urban Airship Push Service failed. Error: " + e.error);
        }
    });
   // Register device token with UA
    request.open('PUT', 'https://go.urbanairship.com/api/device_tokens/'+ e.deviceToken + '/tags/Tafe', true);
    request.setRequestHeader('Authorization','Basic '  + Titanium.Utils.base64encode(APP_KEY + ':' + APP_SECRET));
    request.send();
  
}

/*
Then you just need to add in a simple callback to handle rare cases when
 Apple might reject your application requests for push notifications. 
 The most common cause of errors at this step is an issue with your provisioning profile 
*/

function errorCallback(e) {
    Ti.API.info("Error during registration: " + e.error);
}
/*
Finally, to display push notifications that are received when your application is already opened, 
you need one more method. If your application is not running, 
iPhone OS handles the creation of the notification dialog. 
*/
function messageCallback(e) {
    alert(JSON.stringify(e.data.alert));
Ti.App.Properties.setList("pushMessage", JSON.stringify(e.data));

// Push received message into db  
Ti.App.Properties.setString("pushMessage", JSON.stringify(e.data.alert));
var msgTime = getDate();
var msg = Ti.App.Properties.getString("pushMessage");
var result = db.insertPush(msg,msgTime);
}


/*
The first thing to do is make a call to registerForPushNotifications which will asynchronously return the result of the registration to one of the callback functions you provide.
*/
 
Titanium.Network.registerForPushNotifications({
    types:[
        Titanium.Network.NOTIFICATION_TYPE_BADGE,
        Titanium.Network.NOTIFICATION_TYPE_ALERT,
        Titanium.Network.NOTIFICATION_TYPE_SOUND
    ],
    success: successCallback,
    error: errorCallback,
    callback: messageCallback
});

