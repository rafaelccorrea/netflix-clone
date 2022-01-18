import api from '../api/Tmdb'
import React, {useEffect, useState} from 'react'
import MovieRow from '../components/lista/MovieRow'
import FeatureMovie from '../components/destaque/FeaturedMovie'

export default function Home() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeatureData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            let list = await api.getHomeList();
            setMovieList(list);

            let originals = list.filter(item => item.slug === 'originals')
            let random = Math.floor(Math.random() * (originals[0].items.results.length -1));
            let chosen = originals[0].items.results[random];

        }

        loadAll();
    },[])

    return (
        <div className='page'>
            {featuredData && 
                <FeatureMovie
                    item={featuredData}
                />
            }
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