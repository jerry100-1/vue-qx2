import { Request } from '../../common/request.js'

// 获取每日金币
const getDailyTask = obj => Request('App/Task/getPageList', 'GET', obj)

export default {
    getDailyTask
}
