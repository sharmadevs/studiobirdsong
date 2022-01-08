import { Dimensions, Platform } from 'react-native';
// import { store } from '../../redux';
import DeviceInfo from "react-native-device-info";

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = store.dispatch;

export const getCurrentVersion = () => DeviceInfo.getVersion();

export const isAndroid = Platform.OS === 'android';
export const formatDateToString = (date: Date) => {
    const options:any = { month: 'numeric', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


export const isObjectEmpty = (obj: object) => {
    return Object.keys(obj).length === 0;
}

export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const removeEmptySpace = (title?: any): string => {
    if (title) {
        return title.toString().replace(/\s+/g, '');
    } else {
        return ''
    }
}

export const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
export const phoneHeight = () => {
    const height = Dimensions.get("screen").height;
    return height;
}
export const getCloser = (value: number, checkOne: number, checkTwo: number) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;