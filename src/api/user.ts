
import request from '../utils/request'
import { AxiosResponse } from 'axios'

export const login = async (): Promise<AxiosResponse> => {
  return await request({
    url: 'glajga',
    method: 'get',
    data: {}
  })
}
