import axios from "axios";
import { backendAPIUrl } from "./config";
import { useState } from "react";

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

  static checkUserExist(email) {
    return axios.get(`taken-emails/${email}`)
      .then(response => {
        console.log(response);
        return response.status
      })
      .catch(error => {
        console.error(error.message, ': User is not found')
        return error.response.status
      })
  }
}