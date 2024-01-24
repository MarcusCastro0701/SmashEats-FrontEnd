import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACK_END_URL;

function GetCategories() {
  return axios.get(`${BASE_URL}/categories`);
}

function GetProducts() {
  return axios.get(`${BASE_URL}/products`);
}

function GetOrders() {
  return axios.get(`${BASE_URL}/orders`);
}

function PostOrder(body) {
  return axios.post(`${BASE_URL}/orders`, body);
}

function GenerateOrder(body) {
  return axios.post(`${BASE_URL}/orders/print`, body);
}

function UpdateOrder(orderId) {
  return axios.put(`${BASE_URL}/orders/${orderId}`);
}

function DeleteOrder(orderId) {
  return axios.delete(`${BASE_URL}/orders/${orderId}`);
}

const api = {
  GetCategories,
  GetProducts,
  GetOrders,
  PostOrder,
  GenerateOrder,
  UpdateOrder,
  DeleteOrder,
};

export default api;
