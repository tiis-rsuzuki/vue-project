import Api from '@/service/api'

export default {
  index (search) {
    return Api().get('orders', {
      params: {
        search: search
      }
    })
  },
  show (id) {
    return Api().get('order/', {
        params: {
            id: id
        }
    })
  },
  post (order) {
    return Api().post('order', order)
  },
  put (order) {
    return Api().put(`order/${order.id}`, order)
  }
}
