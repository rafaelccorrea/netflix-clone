const API_BASE = 'https://api.themoviedb.org/3';
const API_TOKEN = 'a7d14a7c7f5ee9c82fa97bd7a5b8543a'

/* Configuracao global da API */
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
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
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para voce',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'action',
                title: 'Acao',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_TOKEN}`)
            },
        ]
    }
    
}