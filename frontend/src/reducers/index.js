import { combineReducers} from 'redux'
import { userReducer } from './userReducer'
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer.js";
import { postReducer } from './postReducer'
import { alertReducer } from './alertReducer'
import { ChatReducer } from './ChatReducer'


const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    errors: errorReducer,
    post: postReducer,
    alert: alertReducer,
    chat: ChatReducer
});

export default rootReducer; 
