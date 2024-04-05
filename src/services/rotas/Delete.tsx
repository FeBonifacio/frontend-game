import { useCallback } from 'react';
import axios from 'axios';
import { baseUrl } from '../../utils/routes';

const useGameDelete = () => {
    const handleDelete = useCallback(async (id: number) => {
        try {
            console.log('ID do jogo a ser excluído:', id); 
            await axios.delete(`${baseUrl}/${id}`);
            console.log('Jogo excluído com sucesso.'); 
        } catch (error) {
            console.error('Erro ao excluir o jogo:', error);
            throw new Error('Erro ao excluir o jogo');
        }
    }, []);
    return { handleDelete };
};

export default useGameDelete;
