import axios from "axios";
const axiosSecure = axios.create({
    baseURL: "https://petadoption-chi.vercel.app",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
})
const useAxiosSecure = () => {
    return axiosSecure
}
export default useAxiosSecure