/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import styles from './MovieRow.module.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line react/display-name
export default ({title, items}) => {

    const handleLeftArrow = () => {

    }

    const handleRightArrow = () => {
        
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
                <div className={styles.list}>
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