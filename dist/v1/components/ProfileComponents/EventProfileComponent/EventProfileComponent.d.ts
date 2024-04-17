import { EventType } from '../../../redux/Types';
import { Dispatch, SetStateAction } from 'react';

type propsType = {
    EventDetails: EventType;
    setIsUpdating: Dispatch<SetStateAction<boolean>>;
    EventPhotos: {
        url: string;
    }[];
    CurrentEventDetails: EventType | undefined;
    AdminMasjid: any;
};
declare const EventProfileComponent: ({ EventDetails, setIsUpdating, EventPhotos, CurrentEventDetails, AdminMasjid, }: propsType) => import("react/jsx-runtime").JSX.Element;
export default EventProfileComponent;
//# sourceMappingURL=EventProfileComponent.d.ts.map