import axios from 'axios'

export async function getApp(){
  return axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
}