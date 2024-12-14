import React from 'react';
import { Movie } from '../Movies';
import PercentageBar from '../../percentageBar/PercentageBar';

const MovieCard = ({ movie, baseUrl, imgSize }: {movie: Movie; baseUrl: string; imgSize: string}) => {
    const localeDate = new Date(movie.release_date).toLocaleDateString('en-us', {year: 'numeric', month: 'short', day: 'numeric'});
    
    return (
        <div className='w-48 group'>
            <div className='flex flex-col w-48 h-full border border-[#0d253f] rounded'>
                <div className='flex flex-col h-full'>
                    <div className='flex-shrink-0'>
                        <img src={`${baseUrl}${imgSize}${movie.poster_path}`} alt="The Movie Database (TMDB)" className="w-full h-auto" />
                    </div>
                    <div className='flex flex-col p-2 gap-2'>
                        <span className='flex text-start text-black w-full'>
                            {movie.title}
                        </span>
                        <span className='flex text-gray-400 text-sm w-full'>
                            {localeDate}
                        </span>
                        <div className='flex w-full'>
                            <PercentageBar rating={movie.vote_average}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;