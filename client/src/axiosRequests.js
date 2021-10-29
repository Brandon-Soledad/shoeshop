import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzYxNGRlMGY3ODAyYmQ2NzQyZDUyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQ2MDc2NCwiZXhwIjoxNjM1NzE5OTY0fQ.fjQlh74zuy9KzOOU8GMS3mO2DsDkjeCqpczY9BD_UsY";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});