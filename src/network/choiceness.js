import axios from 'axios'

export function chodata(config){
  let choinstance = new axios.create({
    baseURL: '/data',
    timeout: 5000
  })

  //请求拦截
  choinstance.interceptors.request.use(config => {
    // console.log(config)
    return config
    return config
  }, err => {
    console.log(err)
  })

  choinstance.interceptors.response.use(res=>{
    // console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })

  return choinstance(config)

}