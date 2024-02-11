import { useQuery } from '@tanstack/react-query';

import { getMovieProp, getMovieReviews } from "../services/movies-services";
import { Reviews } from '../models/Reviews';

export const useReviews = (movieId: getMovieProp) => {
    return useQuery<Reviews, Error>({
        queryKey: ['movieReviews', movieId],
        queryFn: () => getMovieReviews(movieId)
    });
};