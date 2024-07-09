import axios from "axios";
import { backendAPIUrl } from "./config";

axios.defaults.baseURL = backendAPIUrl;

export class QueryService {
  static async getEvents(params) {
    const response = await axios.get('events', {
      params: params
    })

    return response.data
  }

  static async getUsers(params) {
    const response = await axios.get('users', {
      params: params
    })

    return response.data
  }
}