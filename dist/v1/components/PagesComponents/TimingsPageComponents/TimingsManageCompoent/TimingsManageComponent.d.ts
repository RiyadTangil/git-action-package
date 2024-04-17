import { PrayerTimings } from '../../../../redux/Types';
import { SetStateAction, Dispatch } from 'react';

type MasjidTm = {
    namazName: string;
    azaanTime: number;
    jamaatTime: number;
    type?: number;
};
type propsType = {
    CurrentMonthTimings: PrayerTimings<number>[];
    TodaysTimings: PrayerTimings<number>[];
    APITimings: any;
    setAPITimings: Dispatch<SetStateAction<MasjidTm[]>>;
};
declare const TimingsManageComponent: ({ CurrentMonthTimings, TodaysTimings, APITimings, setAPITimings, }: propsType) => import("react/jsx-runtime").JSX.Element;
export default TimingsManageComponent;
//# sourceMappingURL=TimingsManageComponent.d.ts.map