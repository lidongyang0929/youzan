import fetch from './fetch'
import url from 'js/api'

class Address{
    static list(){
        return fetch(url.addressLists)
    }
    static add(data){
        return fetch(url.addressAdd,data)
    }
    static remove(id){
        return fetch(url.addressRemove,id)
    }
    static update(data){
        return fetch(url.addressUpdate,data)
    }
    static setDefault(id){
        return fetch(url.addressDefault,id)
    }
}

export default Address