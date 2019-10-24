import { Request } from '../../common/request.js'

// 获取每日金币
const getRecommendTask = obj => Request('App/Task/getPageList', 'GET', obj)

export default {
    getRecommendTask
}
