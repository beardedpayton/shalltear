import Api from '@/services/Api'

export default {
  // credentials is the payload passed in from method call in component
  register (credentials) {
    return Api().post('/register', credentials)
  },
  login (credentials) {
    return Api().post('/login', credentials)
  }
}
