
import moment from 'moment'

moment.locale("zh-cn");        
//格式化时间
const formatTime = {

    getTime:(data)=>{
        //
        return moment(data).format('YYYY/MM/DD');
    }
}

export default formatTime