import React from 'react';

const LoadMore = ({ loadMoreClick }: {loadMoreClick: () => void}) => {
    return (
        <button className='w-full p-1.5 bg-lightBlue rounded text-white' onClick={loadMoreClick}>
            Load more
        </button>
    );
}

export default LoadMore;