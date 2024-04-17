import { SpecialPrayer, WidgetNamazTiming } from '../../redux/Types';
import { default as React } from 'react';

interface PrayerTimeWidgetProps {
    widgetData: WidgetNamazTiming<number>[] | null;
    specialPrayerData: SpecialPrayer<number>[] | null;
    tZone: string;
    lat: string;
    lon: string;
}
declare const PrayerTimeWidget: React.FC<PrayerTimeWidgetProps>;
export default PrayerTimeWidget;
//# sourceMappingURL=PrayerTimeWidget.d.ts.map