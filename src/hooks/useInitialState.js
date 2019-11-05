import { useState, useEffect } from 'react';


const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);
        useEffect(() => {
            fetch('https://cors-anywhere.herokuapp.com/' + API)
                .then(response => response.json())
                .then(data => setVideos(data))
        }, []);
    return videos;
}

export default useInitialState;