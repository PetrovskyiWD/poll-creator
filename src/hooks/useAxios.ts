import { useEffect, useState } from "react"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

axios.defaults.baseURL = 'https://6626a09d052332d553238268.mockapi.io/api/polls-volodymyr'

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>()
  const [error, setError] = useState<AxiosError>()
  const [loading, setLoading] = useState(false)

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      setLoading(true)

      const result = await axios.request(params)

      setResponse(result)
    } catch (err) {
      setError(err as AxiosError<unknown>)
    } finally {
      setLoading(false)
    }
  }

  const sendData = (params: AxiosRequestConfig) => {
    console.log(params)
    fetchData({...axiosParams, ...params})
  }

  useEffect(() => {
    if (axiosParams.method === 'GET' || axiosParams.method === 'get') {
      fetchData(axiosParams)
    }
  })

  return { response, error, loading, sendData }
}

export default useAxios
