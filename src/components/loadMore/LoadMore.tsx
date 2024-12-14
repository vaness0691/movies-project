import React from 'react';

const LoadMore = ({ loadMoreClick }: {loadMoreClick: () => void}) => {
    return (
        <button className='w-full p-1.5 bg-[#01b4e4] rounded text-white' onClick={loadMoreClick}>
            Load more
        </button>
    );
}

export default LoadMore;