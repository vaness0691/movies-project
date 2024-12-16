import React, { useCallback, useEffect, useState } from 'react';
import { fetchConfig, fetchGenres, fetchMovies } from '../../services/moviesService';
import MovieCard from './card/MovieCard';
import LoadMore from '../loadMore/LoadMore';
import GenreFilter, { Genre } from '../genreFilter/GenreFilter';

export interface Movie {
    id: number;
    title: string;
    genre_ids: number[];
    release_date: string;
    poster_path: string;
    vote_average: number;
}

const Movies = () => {
    const [page, setPage] = useState<number>(1);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [posterSizesConfig, setPosterSizesConfig] = useState<string[] | undefined>(undefined);
    const [baseUrl, setBaseUrl] = useState<string | undefined>(undefined);
    const [selectedGenres, setSelectedGenres] = useState<number[] | undefined>(undefined);
    
    useEffect(() => {
        fetchMovies(1).then((data) => {
            setMovies(data.results);
        });

        fetchConfig().then((data) => {
            setBaseUrl(data.images.base_url);
            setPosterSizesConfig(data.images.poster_sizes);
        });

        fetchGenres().then((data) => setGenres(data.genres));
    }, []);

    useEffect(() => {
        if (page === 1 && !selectedGenres) return;

        const fetchMoreMovies = async () => {
            const moviesData = await fetchMovies(page, selectedGenres!);
            setMovies(prevMovies => {
                if (page === 1) return moviesData.results;
                
                const existingIds = new Set(prevMovies.map(movie => movie.id));
                const uniqueNewMovies = moviesData.results.filter(
                    (movie: Movie) => !existingIds.has(movie.id)
                );

                return [...prevMovies, ...uniqueNewMovies];
            });
        };
        fetchMoreMovies();
    }, [page, selectedGenres]);

    const loadMore = useCallback(() => {
        setPage((prevPage) => prevPage + 1);
    }, []);

    const searchGenre = useCallback((selectedFilterIds: number[]) => {
        setSelectedGenres(selectedFilterIds);
        setPage(1); 
    }, []);

    if (!movies || movies.length === 0) {
        return <div className="text-gray-500">No movies available</div>;
    }

    return (
        <>
            <div className="flex justify-center w-full text-sm sm:text-base">
                <div className='flex flex-col gap-10 p-5 sm:p-10 w-full max-w-[1440px] bg-white'>
                    <GenreFilter genres={genres} searchGenre={searchGenre} />
                    <div className='flex flex-wrap gap-6 after:content-[""] after:flex-auto'>
                        {baseUrl && posterSizesConfig && movies.map((movie) => (
                            <MovieCard
                                key={`${movie.id}`} 
                                movie={movie} 
                                baseUrl={baseUrl} 
                                imgSize={posterSizesConfig[3]} 
                            />
                        ))
                    }
                    </div>
                    <LoadMore loadMoreClick={() => loadMore()}/>
                </div>
            </div>
        </>
    );
};

export default Movies;