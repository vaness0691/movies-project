import React from "react";

const PercentageBar = ({ rating }: { rating: number }) => {
    const ratingTPercentage = Math.round(rating * 100) / 10;
    let bgColor: string = 'bg-[#90cea1]';
    if (ratingTPercentage < 33) {
        bgColor = 'bg-red-300';
    } else if (ratingTPercentage < 67 && ratingTPercentage > 33) {
       bgColor = 'bg-yellow-300';
    }

    return (
        <div className="flex w-full items-center gap-2">
            <div className="flex relative w-full h-2.5 bg-gray-300 rounded-lg">
                <div className={`${bgColor} absolute h-full left-0 bg-[#90cea1] rounded-lg text-xs`}
                    style={{ width: `${ratingTPercentage}%`}}>
                </div>
            </div>
            <div className="flex text-xs text-[#0d253f]">{ratingTPercentage > 0 ? `${ratingTPercentage}%` : 'NR'}</div>
        </div>
    );
};

export default PercentageBar;