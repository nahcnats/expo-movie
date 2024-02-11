import { server, apiErrorHandler } from "../utils";
import { headerOptions } from "../constants";
import { Profile } from "../models/Profile";

export interface getProfileProps {
    session_id: string
}

export const getProfile = async (payload: getProfileProps): Promise<Profile> => {
    try {
        const res = await server.post(`/account/${payload.session_id}`, {
            headers: headerOptions
        });

        return res.data;
    } catch (err: any) {
        throw new Error(`${apiErrorHandler(err)}`);
    }
}