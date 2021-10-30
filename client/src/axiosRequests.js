import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzYxNGRlMGY3ODAyYmQ2NzQyZDUyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTUyOTc0NSwiZXhwIjoxNjM1Nzg4OTQ1fQ.NkvBCKSdzimW4eKfnC5c97ztMV8klHHjHJ_Fq0-MUDo";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});