/* eslint-disable import/no-anonymous-default-export */
import styles from './FeatureMovie.module.css'

// eslint-disable-next-line react/display-name
export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return (
        <section className={styles.featured} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className={styles.vertical}>
                <div className={styles.horizontal}>
                    <div className={styles.name}>{item.original_name}</div>
                    <div className={styles.info}>
                        <div className={styles.points}>{item.vote_average} Pontos</div>
                        <div className={styles.year}>{firstDate.getFullYear()}</div>
                        <div className={styles.season}>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : '' }</div>
                    </div>
                    <div className={styles.description}>
                        {item.overview}
                    </div>
                    <div className={styles.buttons}>
                        <a className={styles.btnWatch} href={`/watch/${item.id}`}>► Assistir</a>
                        <a className={styles.btnList} href={`/list/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className={styles.genres}><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}