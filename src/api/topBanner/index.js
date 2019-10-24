import { Request } from '../../common/request.js'

// 获取用户优惠券列表
const getTopBannerList = obj => Request('App/Adv/getInfoByCateTag', 'POST', obj)

export default {
    getTopBannerList
}
