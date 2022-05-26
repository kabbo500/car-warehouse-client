import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://boiling-tor-55040.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return [reviews, setReviews];
}
export default useReviews;