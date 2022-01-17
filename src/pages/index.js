import api from '../api/Tmdb'
import React, {useEffect} from 'react'

export default function Home() {

    useEffect(() => {
        const loadAll = async () => {
            let list = await api.getHomeList();
        }

        loadAll();
    },[])

    return (
        <div>
            <h1>Ola mundo!</h1>
        </div>
    )
}