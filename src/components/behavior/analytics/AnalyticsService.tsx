import { firebase } from '@react-native-firebase/analytics';
import analytics from '@react-native-firebase/analytics';
interface RegisterRequest {
    method: string;
};
interface ProfileUpdateRequest { };
const defaultAppAnalytics = firebase.analytics();
class AnalyticsService{
   async init() {
       await defaultAppAnalytics.setAnalyticsCollectionEnabled(true);
    }
    async  functionAppOpen() {
        await defaultAppAnalytics.logAppOpen();
    }
    async functionUserRegister(request: RegisterRequest) {
        await defaultAppAnalytics.logSignUp(request);
    }
    async functionProfileUpdate(request: ProfileUpdateRequest) {
        await defaultAppAnalytics.logEvent('profileUpdate', { request });
    }
    async functionSetUserId(id: string) {
        await defaultAppAnalytics.setUserId(id);
    }
    async  functionSetSessionTimeDuration() {
        await defaultAppAnalytics.setSessionTimeoutDuration(900000);
    }
    async functionScreenTracking(previousRouteName?:string,currentRouteName?:string,){
       const params= {
           screen_name: currentRouteName,
           screen_class: currentRouteName
       }
        if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView(params);
            if(currentRouteName){
                console.debug('screenNameundefined', currentRouteName);
            }
        }
    }
  
}
const AnalyticsFunction = new AnalyticsService();
export default AnalyticsFunction;