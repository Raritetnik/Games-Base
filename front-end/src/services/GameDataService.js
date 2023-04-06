import http from '../http-common'
class GameDataService {
  getAll () {
    return http.get('/game')
  }

  create (data) {
    return http.post('/game', data)
  }

  get (id) {
    return http.get(`/game/${id}`)
  }

  delete (id) {
    return http.delete(`/game/${id}`)
  }

  update (id, data) {
    return http.put(`/game/${id}`, data)
  }
}
export default new GameDataService()
