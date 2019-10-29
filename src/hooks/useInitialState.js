import { useState, useEffect } from 'react';


const useInitialState = (API) => {
    const [videos, setVideos] = useState([{}]);
    console.log(API)
        useEffect(() => {
            console.log(API)
            fetch('https://cors-anywhere.herokuapp.com/' + API)
                .then(response => response.json())
                .then(data => setVideos(data))
        }, []);
    return videos;
}

export default useInitialState;