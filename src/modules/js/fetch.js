import axios from 'axios'
import url from 'js/api.js'

function fetch(url,data){
    return new Promise((resolve,reject)=>{
        axios.get(url,data).then(res=>{
            resolve(res)
        }).catch(error=>{
            reject(error)
        })
    })
}

export default fetch