import axios from 'axios'


export const request = (url, method, body = 'null') => {
  console.log("inside the request")
  try {
    return axios(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      data: body
    }).then(res => {
      return res
    })
  } catch (e) {
    console.log(e)
  }
}