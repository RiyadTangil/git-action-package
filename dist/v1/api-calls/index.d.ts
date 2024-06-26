import { Masjid, AuthDataType, AddingEvent, NamazTimings, NamajTiming, optionalTimings } from '../redux/Types';

export declare const rootURL = "https://dev-admin-api.connectmazjid.com/api/v2";
type formDataType = {
    email: string;
    password: string;
};
export declare const LoginAdmin: (formData: formDataType, captcha: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const fetchAllMasjids: () => Promise<import('axios').AxiosResponse<any, any>>;
export declare const fetchAdminMasjid: (id: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const updateMasjid: (masjidId: string, formData: Masjid) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deleteMasjidMedia: (mediaId: string, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const uploadMasjidMedia: (masjidId: string, formData: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deleteMasjidProfile: (masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const uploadMasjidProfile: (masjidId: string, formData: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const ChangePassword: () => Promise<import('axios').AxiosResponse<any, any>>;
export declare const ResetPassword: (formData: AuthDataType) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const setPasswordNewUser: (formData: AuthDataType) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const ActivatingTwoFactorAuth: () => Promise<import('axios').AxiosResponse<any, any>>;
export declare const VerifyingTwoFactorAuth: (formData: AuthDataType) => Promise<import('axios').AxiosResponse<any, any>>;
type ForgotPassDataType = {
    email: string;
};
export declare const ForgotPassword: (formData: ForgotPassDataType) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const fetchLatestUpdatedEventsByAdminId: (id: string, limit: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const addEvent: (masjidId: string, formData: AddingEvent) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const getRSVP: (eventId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const updateEvent: (formData: AddingEvent, masjidId: string, eventId: string, updateType: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deleteEventMedia: (id: string, formData: any) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const getEventsByDateRange: (startDate: string, endDate: string, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const getCancelledEvents: (sortBy: string, sortIn: string, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const cancelEvent: (masjidId: string, eventId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const rsvpEvent: (eventId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const getTimingsById: (id: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deleteTiming: (id: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const updateAllTimingsOfSingleDay: (Data: [{
    prayerType: string;
    timings: optionalTimings<number>[];
}], masjidId: string, TimingsId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deletingAllTimingsByDateRange: (startDate: string, endDate: string, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const addTimingsByRange: (startDate: string, endDate: string, Data: NamajTiming<number>[], masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const updateTimingsByRange: (startDate: string, endDate: string, Data: any, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
type UploadDataType = {
    title: string;
    body: string;
    masjidIds: Array<string>;
    expiresAt: string;
    priorityType: string;
};
export declare const triggeringAnnouncement: (formData: UploadDataType) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const fetchingAnnouncement2: () => Promise<import('axios').AxiosResponse<any, any>>;
export declare const addTimings: (formData: NamazTimings<number>, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const addSolarTimings: (formData: any, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deleteNamaz: (id: string, formData: any) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deleteRandomDaysTiming: (formData: any) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const updateBulkTiming: (formData: any, id: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const updateRandomDaysTimings: (formData: any) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const addingRandomDaysTimings: (formData: any) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const updateNamaz: (formData: any, id: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const updateMinimumTimingsOfSingleDay: (formData: any, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deleteMinimumTimingsOfSingleDay: (formData: any, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deletingTimingsByDateRange: (startDate: string, endDate: string, masjidId: string, prayerNames: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const fetchingAnnouncement: (limit: string, page: string, sortBy: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const triggeringEventAnnouncement: (masjidId: string, eventId: string, action: any, formData: any) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const fetchAdminDetails: () => Promise<import('axios').AxiosResponse<any, any>>;
export declare const addSpecialTiming: (formData: any, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const updateSpecialTiming: (formData: any, masjidId: string, timingId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deleteSpecialTiming: (masjidId: string, timingId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const fetchMasjidById: (masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export declare const deleteUserAccount: () => Promise<import('axios').AxiosResponse<any, any>>;
export declare const generateWidgetApiKey: (assetType: string, masjidId: string) => Promise<import('axios').AxiosResponse<any, any>>;
export {};
//# sourceMappingURL=index.d.ts.map