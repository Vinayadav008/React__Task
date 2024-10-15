import {createStore} from 'redux'
import reducer from './Reducers/Reducers'

export const store =createStore(reducer);