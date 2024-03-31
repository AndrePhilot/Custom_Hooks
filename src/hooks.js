import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard];
}

export const useAxios = (baseUrl) => {
    const [cards, setCards] = useState([]);
    const addCard = async (name) => {
        try {
            const url = name ? `${baseUrl}${name}/` : baseUrl;
            const response = await axios.get(url);
            setCards(cards => [...cards, { ...response.data, id: uuid() }]);
        } catch (error) {
        console.error(error);
        }
    }
    return [ cards, addCard ];
}