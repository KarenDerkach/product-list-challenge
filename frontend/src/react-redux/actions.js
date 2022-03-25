
import api from '../service/api';

export const POST_PRODUCT = 'POST_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS';
export const GET_LABELS = 'GET_LABELS';
export const POST_LABEL = 'POST_LABEL';
export const DELETE_LABEL = 'DELETE_LABEL'

export function getProducts(){
    return function(dispatch){
        api.get('/product')
        .then((response)=>{
           
            dispatch({type: GET_PRODUCTS, payload: response.data})
            
        })
        
        .catch(()=>{
            console.log('Error al cargar datos');
        })
    }
}

export function postProduct (info){ //recibe un objeto con toda la info del producto a crear
    return  function(){
     api.post('/product/newproduct', info)
     .then((response)=>{
        
         return response.data;
     })
    }
}

export function deleteProduct(id){
    return function(){
        api.delete(`/product/${id}`)
        .then((response)=>{
            return response.data;
        })
    }
}


 export function postLabel (info){
    return  function(){
        console.log("asi llega la etiqueta a la action",info)
       api.post('label/newlabel', info)
        .then((response)=>{
            console.log("response.data de info",response.data)
            return response.data;
            
        })
        .catch(()=>{
            console.log('Error al cargar datos');
        })
       }
 }
 export function deleteLabel(name){
    return function(){
       api.delete(`/label/${name}`)
        .then((response)=>{
            return response.data;
        })
    }
}

export function getLabels(){
    return function(dispatch){
       api.get('/label')
        .then((response)=>{
            dispatch({type: GET_LABELS, payload: response.data})
            
        })
        
        .catch(()=>{
            console.log('Error al cargar datos');
        })
    }
}