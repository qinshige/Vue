var Time = {
    //获取当前时间
    getUnix: function () {
        var date = new Date();
        return date.getTime();
    },
    //获取今天 0 点 0分 0秒的时间戳
    getTodayUnix : function () {
        var date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    //获取今年 1 月 1日 0点 0分 0 秒的时间戳
    getYearUnix : function () {
        var date = new Date();
        date.setMonth(0); //月
        date.setDate(1);//日
        date.setHours(0);// 时
        date.setMinutes(0);//分
        date.setSeconds(0);//秒
        date.setMilliseconds(0)
        return date.getTime();
    },
    //获取标准年月日
    getLastDate :function (time) {
        var date = new Date(time);
        //月
        var month = date.getMonth() + 1<10?'0'+(date.getMonth()+1) : date.getMonth()+1;
        return date.getFullYear() + "-"+ month + "-" + day;
    },
    //转换时间
    getFormateTime :function (timeres) {
        var now = this.getUnix(); // 当前时间戳
        var today = this.getTodayUnix(); // 今天 0点时间戳
        var year  = this.getYearUnix(); // 今年 0点时间爱你戳
        var timer = (now-timeres)/1000; //转化为秒级时间戳
        var tip = '';

        if (timer<=0){
            tip = "刚刚";
        } else if (Math.floor(timer/60) <= 0){
            tip = '刚刚';
        }else if (timer < 3600){
            tip = Math.floor(timer/60)+'分钟前';
        } else if (timer >= 3600 && (timeres - today >= 0)){
            tip = Math.floor(timer/3600) + '小时前';
        } else if (timer/86400 <= 31){
            tip = Math.ceil(timer/86400)+'天前';
        } else  {
            tip= this . getLastDate(timestamp);
        }
        return tip;
    }
}