import { Dispatch } from "redux";
import * as api from "../../../api-calls/index";
import { UserActionType } from "../../Types";
type formDataType = {
  masjidId: string;
  password: string;
};
export const masjidIdSetter =
  (formData: formDataType) => async (dispatch: Dispatch<UserActionType>) => {
    try {
      dispatch({
        type: "AUTH_LOGIN",
        payload: { masjids: [formData.masjidId] },
      });
    } catch (error: any) {
      return null;
    }
  };
