import { NamajTiming, PrayerTimings } from '../../../../../redux/Types';
import { Dispatch, SetStateAction } from 'react';

type propsType = {
    CurrentSelectedDayTimings: NamajTiming<number>[];
    APITimings: any;
    ThreeMonthTimings: PrayerTimings<number>[];
    startDate: Date;
    RangeHasTimings: boolean;
    endDate: Date;
    setCurrentSelectedDayTimings: Dispatch<SetStateAction<NamajTiming<number>[]>>;
    handleSettingUpCalendar: () => void;
    setThreeMonthTimings: Dispatch<SetStateAction<PrayerTimings<number>[]>>;
};
declare const ManageTimingsMaterialTable: ({ CurrentSelectedDayTimings, APITimings, ThreeMonthTimings, startDate, RangeHasTimings, endDate, setCurrentSelectedDayTimings, handleSettingUpCalendar, setThreeMonthTimings, }: propsType) => import("react/jsx-runtime").JSX.Element;
export default ManageTimingsMaterialTable;
//# sourceMappingURL=ManageTimingsMaterialTable.d.ts.map