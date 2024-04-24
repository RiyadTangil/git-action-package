import { AdminInterFace, User, UserActionType } from '../../Types';

declare const LoginReducer: (admin: User | undefined, action: UserActionType) => User | AdminInterFace | {
    masjids: User[];
};
export default LoginReducer;
//# sourceMappingURL=LoginReducer.d.ts.map