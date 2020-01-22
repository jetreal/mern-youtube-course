import {createContext} from 'react' 

function noop() {

}

export const AuthContext = createContext( {
  teken: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false
})