import { UserActionType } from '../../Types';
import { Dispatch } from 'redux';

type formDataType = {
    masjidId: string;
    password: string;
};
export declare const masjidIdSetter: (formData: formDataType) => (dispatch: Dispatch<UserActionType>) => Promise<null | undefined>;
export {};
//# sourceMappingURL=MasjidIdSetterAction.d.ts.map