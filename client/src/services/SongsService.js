import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('/songs')
  },
  post (song) {
    return Api().post('/songs', song)
  },
  show (songId) {
    return Api().get(`/songs/${songId}`)
  },
  put (song) {
    return Api().put(`/songs/${song.id}`, song)
  }
}
