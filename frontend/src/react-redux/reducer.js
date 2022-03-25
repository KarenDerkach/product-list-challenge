import { POST_PRODUCT , GET_PRODUCTS, DELETE_PRODUCTS, GET_LABELS, POST_LABEL, DELETE_LABEL} from "./actions"

const initialState = {
    products: [],
    labels: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case POST_PRODUCT:
            return {
                ...state,
            }
        case DELETE_PRODUCTS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case GET_LABELS:
            return {
                ...state,
                labels: action.payload

            }
        case POST_LABEL:
            return{
                ...state,
            }
        case DELETE_LABEL:
           
                return {
                    ...state,
                   products: state.products.filter(elem=> elem.label.label !== action.payload)
                }
        default:
        return state
    }


}