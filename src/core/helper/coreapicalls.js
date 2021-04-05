import { API } from "../../backend";

export const getAds = () => {
  return fetch(`${API}/ads`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getUserforAd =(user) =>{
    return fetch(`${API}/info/${user}`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}

export const getCategories=() => {
    return fetch(`${API}/categories`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}

export const getAdsByCategory=(categoryId) => {
    return fetch(`${API}/category/${categoryId}`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}

export const addToReview = (adId) => {
  return fetch(`${API}/reviewad/add/${adId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

