import api from '../api/Tmdb'
import React, {useEffect, useState} from 'react'
import MovieRow from '../components/lista/MovieRow'

export default function Home() {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let list = await api.getHomeList();
            setMovieList(list);
        }

        loadAll();
    },[])

    return (
        <div className='page'>
            <section className='lists'>
                {movieList.map((item, index) => (
                    <MovieRow key={index}
                        title={item.title}
                        items={item.items}
                    />
                ))}
            </section>
        </div>
    );
}