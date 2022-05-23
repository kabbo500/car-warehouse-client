import React from 'react';

const Review = ({ review }) => {
    const { name, img, feedback } = review;
    return (

        <div class="card card-side bg-base-100 shadow-xl">
            <figure class="px-10 pt-10   lg:w-60 ">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold">{name}</h2>
                <p>{feedback}</p>
                <div class="rating rating-xs">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 " />
                </div>
            </div>
        </div>

    );
};

export default Review;