import { api } from "../api/api";

const getAll = () => {
    return api.get("produto");
};

const get = (id) => {
    return api.get(`produto/${id}`);
};

const create = (data) => {
    return api.post("produto", data);
};

const update = (id, data) => {
    return api.put(`produto/${id}`, data);
};

const remove = (id) => {
    return api.delete(`produto/${id}`);
};
const produtoService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default produtoService;
