import GetCookie from "../cookies/get"
import axios from "axios"

export const Api = axios.create({
    baseURL: "http://192.168.3.251:8081/",
    headers: { 'authorization': 'bearer' + GetCookie('token')} 
  })  