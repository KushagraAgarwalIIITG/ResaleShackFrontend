import { API } from "../../backend";

//category calls
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get all categories
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//products calls

//create a product
export const createAd = (userId, token, ad) => {
  return fetch(`${API}/ad/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: ad
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get all products
export const getAds = () => {
  return fetch(`${API}/ads`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getAdsByUser = (id,token) => {
  return fetch(`${API}/ads/user/${id}`, {
    method: "GET"
  ,headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`
  }})
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//delete a product

export const deleteAd = (adId, userId, token) => {
  return fetch(`${API}/ad/${adId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get a product

export const getAd = adId => {
  console.log("insisde getAd",adId)
  return fetch(`${API}/ad/${adId}`, {
    method: "GET"
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => console.log("error occured in api call",err));
};

//update a product

export const updateAd = (adId, userId, token, ad) => {
  console.log(ad)
  return fetch(`${API}/ad/${adId}/${userId}`, {
    method: "PUT",
    headers: {
     // Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: ad
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


export const getAllReviewAds = (id,token) => {
  return fetch(`${API}/reviewads/${id}`, {
    method: "GET"
  ,headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`
  }})
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const deleteReviewAd = (adId, userId, token) => {
  return fetch(`${API}/reviewad/delete/${adId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
