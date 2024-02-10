import { server, apiErrorHandler } from "../utils";

import { CreateRequestToken } from "../models/CreateRequestToken";
import { LoginWithPassword } from "../models/LoginWithPassword";

interface loginWithPasswordProps {
    username: string,
    password: string,
    request_token: string
}

export const getRequestToken = async (): Promise<CreateRequestToken> => {
    try {
        const headerOptions = {
            'Authorization': `Bearer ${process.env.EXPO_PUBLIC_TMDB_TOKEN}`,
            'Accept': 'application/json'
        }

        const res = await server.get(`/authentication/token/new`, {
            headers: headerOptions
        });

        return res.data;
    } catch (err: any) {
        throw new Error(`${apiErrorHandler(err)}`);
    }
}

export const loginWithPassword = async (payload: loginWithPasswordProps): Promise<LoginWithPassword> => {
    try {
        const headerOptions = {
            'Authorization': `Bearer ${process.env.EXPO_PUBLIC_TMDB_TOKEN}`,
            'Accept': 'application/json'
        }

        const res = await server.post(`/authentication/token/validate_with_login`, payload, {
            headers: headerOptions
        });

        return res.data;
    } catch (err: any) {
        throw new Error(`${apiErrorHandler(err)}`);
    }
}