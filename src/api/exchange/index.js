import { Request } from '../../common/request.js'

// 获取用户优惠券列表
const getExchangeList = obj => Request('App/Task/signInfo', 'GET', obj)

export default {
    getExchangeList
}
