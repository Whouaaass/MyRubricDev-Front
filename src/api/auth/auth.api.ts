import axiosInstance from "../axiosInstance";

export async function login(email: string, password: string) {
    const response = await axiosInstance.post('/auth/login', {
        username: email,
        password: password,
    })
    return response.data
}

export async function register(email: string, password: string) {
    const response = await axiosInstance.post('/auth/register', {
        username: email,
        password: password,
        rol: "DOCENTE"
    })

    return response.data
}