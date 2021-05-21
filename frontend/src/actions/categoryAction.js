import axios from "axios";
import {API} from '../config'

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const getCategory = (id) => {
    return fetch(`${API}/category/${id}`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};  