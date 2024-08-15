import axios from "axios";
const axiosPublic = axios.create({
    baseURL: "https://petadoption-chi.vercel.app",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
})
const useAxiosPublic = () => {
    return axiosPublic
}
export default useAxiosPublic