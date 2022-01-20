import api from '../api/Tmdb'
import React, {useEffect, useState} from 'react'
import MovieRow from '../components/lista'
import FeatureMovie from '../components/destaque'
import Header from '../components/header'

export default function Home() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            let list = await api.getHomeList();
            setMovieList(list);

            let originals = list.filter(item => item.slug === 'originals')
            let random = Math.floor(Math.random() * (originals[0].items.results.length -1));
            let chosen = originals[0].items.results[random];
            let chosenInfo = await api.getMovieInfo(chosen.id, 'tv')
            setFeaturedData(chosenInfo);
        }

        loadAll();
    },[])

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            }else{
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        return()=> {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

    return (
        <div className='page'>

            <Header
                black={blackHeader}
            />

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
            <footer>
                Feito por Rafael Correa <br/>
                Direitos de imagem para NetFlix
            </footer>

            {movieList.length <= 0 &&
                <div className="loading">
                    <img src ="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"/>
                </div>            
            }

        </div>
    );
}