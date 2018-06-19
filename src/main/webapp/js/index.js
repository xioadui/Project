
$(".func1 li").mouseenter(function () {
    if (!$(this).hasClass(".active")) {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $("#cont1 div").removeClass("showed");
        $("#cont1 div").eq($(this).index()).addClass("showed");

    }
});

$(".func2 li").mouseenter(function () {
    if (!$(this).hasClass(".active")) {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $("#cont2 div").removeClass("showed");
        $("#cont2 div").eq($(this).index()).addClass("showed");

    }
});

$(document).ready(function () {
    $.get('/inf/index', {
            category: '医疗医药保健'
        },
        function (data1) {
            $('#tab1_h4').append(data1.title);
            /*获得资讯名称*/
            $('#tab1_p').append(data1.digest + '...');
            /*获得资讯摘要*/
            $.get('/inf/index', {
                    category: 'IT与通讯'
                },
                function (data2) {
                    $('#tab2_h4').append(data2.title);
                    /*获得资讯名称*/
                    $('#tab2_p').append(data2.digest + '...');
                    /*获得资讯摘要*/
                    $.get('/inf/index', {
                            category: '机械电子'
                        },
                        function (data3) {
                            console.log(data3);
                            $('#tab3_h4').append(data3.title);
                            /*获得资讯名称*/
                            $('#tab3_p').append(data3.digest + '...');
                            /*获得资讯摘要*/
                            $.get('/inf/index', {
                                    category: '车辆交通'
                                },
                                function (data4) {
                                    console.log(data4);
                                    $('#tab4_h4').append(data4.title);
                                    /*获得资讯名称*/
                                    $('#tab4_p').append(data4.digest + '...');
                                    /*获得资讯摘要*/
                                    $.get('/inf/index', {
                                            category: '能源矿产'
                                        },
                                        function (data5) {
                                            console.log(data5);
                                            $('#tab5_h4').append(data5.title);
                                            /*获得资讯名称*/
                                            $('#tab5_p').append(data5.digest + '...');
                                            /*获得资讯摘要*/
                                        });
                                });
                        });
                });
        });

    $.get('/ind/index', {
            category: '医疗医药保健'
        },
        function (data1) {
            $('#tab6_h4').append(data1.title);
            /*获得行业数据名称*/
            $('#tab6_p').append(data1.digest + '...');
            /*获得行业数据摘要*/
            $.get('/ind/index', {
                    category: 'IT与通讯'
                },
                function (data2) {
                    $('#tab7_h4').append(data2.title);
                    /*获得行业数据名称*/
                    $('#tab7_p').append(data2.digest + '...');
                    /*获得行业数据摘要*/
                    $.get('/ind/index', {
                            category: '机械电子'
                        },
                        function (data3) {
                            $('#tab8_h4').append(data3.title);
                            /*获得行业数据名称*/
                            $('#tab8_p').append(data3.digest + '...');
                            /*获得行业数据摘要*/
                            $.get('/ind/index', {
                                    category: '车辆交通'
                                },
                                function (data4) {
                                    $('#tab9_h4').append(data4.title);
                                    /*获得行业数据名称*/
                                    $('#tab9_p').append(data4.digest + '...');
                                    /*获得行业数据摘要*/
                                    $.get('/ind/index', {
                                            category: '能源矿产'
                                        },
                                        function (data5) {
                                            $('#tab10_h4').append(data5.title);
                                            /*获得行业数据名称*/
                                            $('#tab10_p').append(data5.digest + '...');
                                            /*获得行业数据摘要*/
                                        })
                                });
                        });
                });
        });
});


$(document).ready(function() {
    $(".header").append(
        '<div class="banner">'+
        '<h2>Welcome to NEO </h2>'+
        '<p>在霓欧找到您的合作伙伴，协作共享，为您提供企业信息、业内资讯、市场动态、协作信息、服务资源、智能检索等服务</p>'+
        '</div>'
    );

});


