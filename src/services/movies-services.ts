import { server, apiErrorHandler } from "../utils";
import { headerOptions } from "../constants";

import { TrendingMovie } from "../models/TrendingMovie";
import { Movie } from "../models/Movie";

export interface getMovieProp {
    movieId: number
}

export const getTrendingMovies = async (): Promise<TrendingMovie[]> => {
    try {
        const res = await server.get(`/trending/movie/day?language=en-US`, {
            headers: headerOptions
        });

        return res.data.results;
    } catch (err: any) {
        throw new Error(`${apiErrorHandler(err)}`);
    }
}

export const getMovie = async (payload: getMovieProp): Promise<Movie> => {
    try {
        const res = await server.get(`/movie/${payload.movieId}?language=en-US`, {
            headers: headerOptions
        });

        return res.data;
    } catch (err: any) {
        throw new Error(`${apiErrorHandler(err)}`);
    }
}