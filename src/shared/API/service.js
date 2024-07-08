import axios from "axios";
import { backendBaseUrl } from "./config";

axios.defaults.baseURL = backendBaseUrl;

export class QueryService {
  static async getEvents(range) {
    const response = await axios.get('events', {
      params: {
        populate: '*',
        'filters[dateStart][$gte]': range.gte,
        'filters[dateStart][$lte]': range.lte,
      }
    })

    return response.data
  }
}