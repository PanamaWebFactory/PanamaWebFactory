function init() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

function onDeviceReady() {
	var networkState = navigator.network.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    if (states[networkState] !== 'No network connection'){							
		document.addEventListener("backbutton",showConfirm, false);
	} else {
		showAlert();
	}
    }
	
	function alertDismissed(button) {
		if (button === 1) {
			navigator.app.exitApp();
		} else {
			return false;
		}
}

function showAlert() {
        navigator.notification.alert(
            'Lo sentimos pero necesitas data activa para usar esta aplicación!',  // message
            closeApp,         // callback
            'Atención',            // title
            'Cerrar'                  // buttonName
        );
		navigator.notification.beep(1);
    }
	
	function showConfirm() {
    navigator.notification.confirm(
        '¿Desea cerrar la aplicación?',  // message
        alertDismissed,         // callback to invoke with index of button pressed
        'Atención',            			 // title
        'Si,No'          				 // buttonLabels
    );
}		

function closeApp() {
	navigator.app.exitApp();
}		

