import axios from 'axios';

const API_BASE = 'https://api.themoviedb.org/3';
const API_TOKEN = process.env.API_KEY


const basicAxios = async (endpoint) => {
    const req = await axios.get(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicAxios(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para voce',
                items: await basicAxios(`/trending/all/week?language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicAxios(`/movie/top_rated?language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'action',
                title: 'Acao',
                items: await basicAxios(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicAxios(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicAxios(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicAxios(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicAxios(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_TOKEN}`)
            },
        ]
    }
    
}