import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FavoritesContext = createContext();

export default function FavoritesContextProvider() {
    const [favorites, setFavorites] = useState([]);
    const [properties, setProperties] = useState([]);

    const baseUrl = import.meta.env.real.VITE_BASE_URL;

    useEffect(() => {
        const storedFave = localStorage.getItem('favoritesList');
        if (storedFave !== null) {
            setFavorites(JSON.parse(storedFave));
        }
    }, []);

    const addToFavorites = item => {
        let newFavorites = [...favorites, item];
        setFavorites(newFavorites);
        localStorage.setItem('favoritesList', JSON.stringify(newFavorites));
    };


}