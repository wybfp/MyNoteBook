import axios from 'axios'

export function request(config){
    const instance = new axios.create({
        baseURL:'http://localhost:3001',
        timeout:10000
    });

    

  return instance(config)
}