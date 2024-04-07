import { useState, useEffect } from 'react';
import axios from 'axios';
import { Game } from '../types/Game';
import { baseUrl } from '../../utils/routes';

const useGameEdit = () => {
    const [showModal, setShowModal] = useState(false);
    const [editedGame, setEditedGame] = useState<Game | null>(null);
    const [forceUpdate, setForceUpdate] = useState(false); 
    const [errorOccurred, setErrorOccurred] = useState(false); 

    const handleEdit = async (game: Game) => {
        try {
            const response = await axios.put(`${baseUrl}`, game);
            if (response.data === true) {
                console.log('Jogo editado com sucesso!');
                window.location.href = '/'; 
            } else {
                console.error('Falhou em editar o jogo');
                setErrorOccurred(true);
            }
        } catch (error) {
            console.error('Erro ao editar o jogo:', error);
            setErrorOccurred(true); 
        }
    };

    const handleEditClick = (game: Game) => {
        setEditedGame(game);
        setShowModal(true);
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
        setForceUpdate(true); 
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
        errorOccurred, 
    };
};

export default useGameEdit;
