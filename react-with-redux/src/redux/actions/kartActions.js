import { ADD_ITEM, DELETE_ITEM} from "./actionTypes";

const addItem = () => {
    return {
        type: ADD_ITEM,
    }
}
const deleteItem = () => {
    return{
        type: DELETE_ITEM,
    }
}

export default { addItem, deleteItem };

