/* eslint-disable react/display-name */
import React from "react";
import styles from './MovieRow.module.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {
    return (
        <div className={styles.teste}>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                {items.results.length > 0 && items.results.map((item, index) =>(
                    <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                ))}
            </div>
        </div>
    )
}