import { server, apiErrorHandler } from "../utils";
import { headerOptions } from "../constants";

import { TrendingMovie } from "../models/TrendingMovie";
import { Movie } from "../models/Movie";
import { Reviews } from "../models/Reviews";

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

// Reviews (GET)
// https://api.themoviedb.org/3/movie/{movie_id}/reviews
export const getMovieReviews = async (payload: getMovieProp): Promise<Reviews> => {
    try {
        const res = await server.get(`/movie/${payload.movieId}/reviews`, {
            headers: headerOptions
        });

        return res.data;
    } catch (err: any) {
        throw new Error(`${apiErrorHandler(err)}`);
    }
}


// Add Rating (POST)
// https://api.themoviedb.org/3/movie/{movie_id}/rating

// Delete Rating (DELETE)
// https://api.themoviedb.org/3/movie/{movie_id}/rating