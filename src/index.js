import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "trends": [
        {
            "id": 2,
            "slug": "tvshow-2",
            "title": "Guasón",
            "type": "Crimen",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 122,
            "cover": "https://cinetonala.mx/wp-content/uploads/2019/09/GUASÓN-350X490.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 3,
            "slug": "tvshow-3",
            "title": "Toy Story 4",
            "type": "Infantil",
            "language": "English",
            "year": 2019,
            "contentRating": "3+",
            "duration": 137,
            "cover": "http://t1.gstatic.com/images?q=tbn:ANd9GcRJUXmK61D6xj8qitOW7G4EBJ0W6J1opB0KHB51jNXcLweHCr9s",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 4,
            "slug": "tvshow-4",
            "title": "Avengers endgame",
            "type": "Acción",
            "language": "English",
            "year": 2019,
            "contentRating": "9+",
            "duration": 163,
            "cover": "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_3adaf4f8.jpeg?region=0,0,540,810",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 5,
            "slug": "tvshow-5",
            "title": "Capitana Marvel",
            "type": "Scripted",
            "language": "English",
            "year": 2019,
            "contentRating": "9+",
            "duration": 194,
            "cover": "http://t0.gstatic.com/images?q=tbn:ANd9GcSvrR2wjVfAucVBIaE048zDXv2G3cHCmxetx27P8HHsI7wr3yoJ",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 6,
            "slug": "tvshow-6",
            "title": "El rey león",
            "type": "Scripted",
            "language": "English",
            "year": 2019,
            "contentRating": "3+",
            "duration": 124,
            "cover": "http://t1.gstatic.com/images?q=tbn:ANd9GcTCHi-LyRWItU8rCOHQUkdedsFxFb0DP8_TvIFQUAz5PcXLaOVH",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 7,
            "slug": "tvshow-7",
            "title": "Dumbo",
            "type": "Infantil",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 179,
            "cover": "http://t1.gstatic.com/images?q=tbn:ANd9GcQQQjKcAiDHr9GDodNQgcvSoho8B0lqcIZkSQeOSRDPpbrh3b54",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        }
    ],
    "originals": [
        {
            "id": 8,
            "slug": "tvshow-8",
            "title": "Spider-Man: lejos de casa",
            "type": "Acción",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 148,
            "cover": "http://t1.gstatic.com/images?q=tbn:ANd9GcSUwilLyU4GtFBLzXkfM7f_KRep_7qXK9e30Zlix6JlO6DOoI82",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 9,
            "slug": "tvshow-9",
            "title": "Aladdín",
            "type": "Infantil",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 128,
            "cover": "http://t0.gstatic.com/images?q=tbn:ANd9GcSmb37w7Wq778kv4juj8S_s2NoSPulVCeqj1V5fWb-2lcDhqkD5",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 10,
            "slug": "tvshow-10",
            "title": "X-Men: Dark Phoenix",
            "type": "Acción",
            "language": "English",
            "year": 2019,
            "contentRating": "9+",
            "duration": 346,
            "cover": "http://t2.gstatic.com/images?q=tbn:ANd9GcR61bDkZOuC8-aIwZa7PYItzOxZi-m9d3Hl1o4tnhBes5dj7yx7",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 11,
            "slug": "tvshow-11",
            "title": "Annabelle 3",
            "type": "Terror",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 226,
            "cover": "http://static1.squarespace.com/static/511eea22e4b06642027a9a99/511eef5ce4b06642027aabd3/5d162dc08bc01100011567e8/1569773487591/Annabelle+Comes+Home.jpg?format=1500w",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 12,
            "slug": "tvshow-12",
            "title": "Los Increíbles 2",
            "type": "Infatil",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 190,
            "cover": "http://t0.gstatic.com/images?q=tbn:ANd9GcQyQFe8xrtndqWR2McqeYUOQSKDlPHumk82YC1W_BV1AZFQ7lAa",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 13,
            "slug": "tvshow-13",
            "title": "Bohemian Rhapsody",
            "type": "Musica",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 160,
            "cover": "http://es.web.img3.acsta.net/c_215_290/pictures/18/05/21/12/50/1518397.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        }
    ]
}

const store = createStore(reducer, initialState);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));