import useAxiosSecure from './useAxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const usePetList = () => {
    const axiosSecure = useAxiosSecure()
    const {data, refetch} = useQuery({
        queryKey: ['petList'],
        queryFn: async () => {
            const res = await axiosSecure.get("/pet")
            return res.data
        },
    })
  return [data, refetch]
}

export default usePetList
