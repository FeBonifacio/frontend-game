import { useState, useEffect } from 'react';
import axios from 'axios';
import { Game } from '../types/Game';
import { baseUrl } from '../../utils/routes';

const useGameEdit = () => {
    const [showModal, setShowModal] = useState(false);
    const [editedGame, setEditedGame] = useState<Game | null>(null);
    const [forceUpdate, setForceUpdate] = useState(false); // Estado para forçar a atualização
    const [errorOccurred, setErrorOccurred] = useState(false); // Estado para indicar se ocorreu um erro durante a edição

    const handleEdit = async (game: Game) => {
        try {
            const response = await axios.put(`${baseUrl}`, game);
            if (response.data === true) {
                console.log('Jogo editado com sucesso!');
                window.location.href = '/'; // Redireciona para a página principal após a edição bem-sucedida
            } else {
                console.error('Falhou em editar o jogo');
                setErrorOccurred(true); // Define o estado para indicar que ocorreu um erro durante a edição
            }
        } catch (error) {
            console.error('Erro ao editar o jogo:', error);
            setErrorOccurred(true); // Define o estado para indicar que ocorreu um erro durante a edição
        }
    };

    const handleEditClick = (game: Game) => {
        setEditedGame(game);
        setShowModal(true);
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
        setForceUpdate(true); // Define o estado para forçar a atualização
    };

    const handleSaveEdit = async () => {
        try {
            if (editedGame) {
                await handleEdit(editedGame);
                setShowModal(false);
            }
        } catch (error) {
            console.error('Erro foi: ' + error);
        }
    };

    useEffect(() => {
        setForceUpdate(false);
    }, [forceUpdate]);

    return {
        showModal,
        editedGame,
        handleEditClick,
        handleCloseModal,
        handleSaveEdit,
        setEditedGame,
        errorOccurred, // Adiciona o estado de erro ao retorno do hook
    };
};

export default useGameEdit;
