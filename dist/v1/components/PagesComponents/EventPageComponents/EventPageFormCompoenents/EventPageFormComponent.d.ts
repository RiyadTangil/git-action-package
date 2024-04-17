import { EventType } from '../../../../redux/Types';
import { Dispatch, SetStateAction } from 'react';

type propsType = {
    ComponentPurpose: string;
    EventDetails: EventType | undefined;
    setEventDetails?: Dispatch<SetStateAction<EventType | undefined>>;
    setIsUpdating?: Dispatch<SetStateAction<boolean>>;
    setAddingEvent?: Dispatch<SetStateAction<boolean>>;
    setEventPhotos?: any;
    EventPhotos?: any;
    AddingEvent?: boolean;
};
declare const EventPageFormComponent: ({ ComponentPurpose, EventDetails, setAddingEvent, AddingEvent, setEventDetails, setIsUpdating, setEventPhotos, EventPhotos, }: propsType) => import("react/jsx-runtime").JSX.Element;
export default EventPageFormComponent;
//# sourceMappingURL=EventPageFormComponent.d.ts.map