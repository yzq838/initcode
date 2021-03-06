// 模块化式的开发 
// 把所有与用户相关的功能全写在一个对象中

// $.post(),$.get(),$.ajax() 得到都是一个对象
// 这个对象上有then方法，then()的功能是获取返回的数据
// $.post( ).then(function(res){  res 就是接口返回的数据 })

var user = {
    // 用户登陆
    login: (name, password) =>
        // 函数的返回值就是一个promise对象。
        // $.post()是一个函数，它的结果是一个promise对象
        $.post(APILIST.user_login, {
            name,
            password
        })
    ,





    // 用户退出
    // logout: function() {
    //     return $.post(APILIST.user_logout)
    // },
    logout: () =>
        $.post(APILIST.user_logout)
    ,

    // 获取信息
    getInfo: function () {
        var t = $.get(APILIST.user_getInfo)
        console.log(t)
        return t
    }


}
