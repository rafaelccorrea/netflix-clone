/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import styles from './MovieRow.module.css'

// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line react/display-name
export default ({title, items}) => {
    return (
        <div className={styles.movieRow}>
            <h2>{title}</h2>
            <div className={styles.listarea}>
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, index) =>(
                        <div key={index} className={styles.item}>
                            <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}