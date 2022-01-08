import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {isAndroid} from "./index";


export default function requestPermissionLocation() {
    const LOCATION_PERMISSION = isAndroid ? PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION : PERMISSIONS.IOS.LOCATION_ALWAYS;

    check(LOCATION_PERMISSION)
        .then((result: any) => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    console.log('This feature is not available (on this device / in this context)');
                    break;
                case RESULTS.GRANTED:
                    console.log('The permission is granted');
                    break;
                case RESULTS.DENIED:
                    request(LOCATION_PERMISSION).then(() => {
                    });
                    break;
            }
        })
        .catch((error) => {

        });

}
