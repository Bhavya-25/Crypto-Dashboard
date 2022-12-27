import { KYCLIST } from '../constants/index'

const kycList = (kycList = [], action) => {
    switch (action.type) {
        case KYCLIST:
            if (action.payload.status === 200) {
                let data = {kycList : action.payload.data}
                return data
                
            }
            break
        default:
            return kycList
    }

}

export default kycList;