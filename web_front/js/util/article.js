// 把所有与文章相关的操作写在这里

var article = {
    /**
     * 获取主页中5条焦点图新闻
     */
    // getFouceFive:function(){
    //     // 因为只要5条数据，所以直接设置只获取5条
    //     return $.get(APILIST.article_get,{perpage: 5})
    // },
    getFouceFive: () => $.get(APILIST.article_get, { perpage: 5 }),
    // 因为只要5条数据，所以直接设置只获取5条


    /**
     * 根据id去获取文章的详情
     * @param {Number}} id 
     */
    // getById:function(id){
    //     return $.get(APILIST.article_get,{'id':id})
    // },
    getById: id => $.get(APILIST.article_get, { id }),


    /**
     * 获取文章排行
     * @param {*} type  文章类别编号 
     * 如果不传则在全部的类别中进行排行。
     */
    // getRank:function(type){
    //     return $.get(APILIST.article_rank,{'type':type})
    // },
    getRank: type => $.get(APILIST.article_rank, { type }),


    /**
     * 获取最新的文章
     */
    // getLastest:function(){
    //     return $.get(APILIST.article_last)
    // },
    getLastest: () => $.get(APILIST.article_last),


    /***
     * 在列表页中，用来获取文章列表数据
     * type: 文章类型编号
     * page: 当前第几页
     */
    // getList:function(type,page) {
    //     return $.get(APILIST.article_get,{'type':type,'page':page})
    // },
    getList: (type, page) => $.get(APILIST.article_get, { type, page }),
    /**
     * 获取文章详情
     * @param {*} id 文章编号
     */
    // getDetail:function(id){
    //     return $.get(APILIST.article_detail,{'id':id})
    // }
    getDetail: id => $.get(APILIST.article_detail, { id })


}
