import { useState, useEffect } from 'react';
import axios from 'axios';
import { Game } from '../types/Game';
import { baseUrl } from '../../utils/routes';

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Game[]>(`${baseUrl}`);
                setGames(response.data);
                console.log('Jogos recebidos:', response.data);
            } catch (error) {
                console.error('Erro ao buscar os jogos:', error);
            }
        };

        fetchData();
    }, []);

    return games;
};

export default useGames;
