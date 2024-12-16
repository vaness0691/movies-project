import React, { useState } from 'react';

export interface Genre {
    id: number;
    name: string;
}

const GenreFilter = ({genres, searchGenre}: {genres: Genre[], searchGenre: (selectedGenres: number[]) => void}) => {
    const [selectedFilterIds, setSelectedFilterIds] = useState<number[]>([]);

    function updateSelectedIds(id: number) {
        if (!selectedFilterIds.includes(id)) {
            setSelectedFilterIds([...selectedFilterIds, id]);
        } else {
            setSelectedFilterIds(selectedFilterIds.filter((selectedId) => selectedId !== id));
        }
    }

    return (
        <div className='flex flex-col items-start gap-2 sm:w-2/3'>
            <span className='px-1'>
                Filter by Genre:
            </span>
            <div className='flex gap-2 flex-wrap'>
                {genres && genres.map((genre) => (
                    <button key={genre.id} className={`${selectedFilterIds.includes(genre.id) ? 'bg-lightBlue text-white' : ''} border border-gray-300 rounded-lg px-2 py-1 cursor-pointer`} onClick={() => updateSelectedIds(genre.id)}>
                        {genre.name}
                    </button>
                ))}
           </div>
           <button className='border border-lightBlue rounded-lg px-2 py-1 cursor-pointer bg-lightBlue text-white' onClick={() => searchGenre(selectedFilterIds)}>Search</button>
        </div>
    );
};

export default GenreFilter;