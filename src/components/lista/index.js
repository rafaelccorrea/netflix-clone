/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */

import React, {useState} from "react";
import styles from './MovieRow.module.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line react/display-name
export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }

        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className={styles.movieRow}>
            <h2>{title}</h2>

            <div className={styles.left} onClick={handleLeftArrow}>
                <NavigateBeforeIcon
                    style={{fontSize: 50}}
                />
            </div>

            <div className={styles.right} onClick={handleRightArrow}>
                <NavigateNextIcon
                    style={{fontSize: 50}}
                />
            </div>

            <div className={styles.listarea}>
                <div style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                    }} className={styles.list}>
                    {items.results.length > 0 && items.results.map((item, index) =>(
                        <div key={index} className={styles.item}>
                            <img className={styles.img} alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}