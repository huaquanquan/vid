$(document).ready(function(){
    $(".btn-teal").click(function () {
        var text = $("#long").val();
        var type = $("#type").val();
        if(text == '' || text == undefined){
            alert("输入需要加密的密文");
            return ;
        }
        $.ajax({
            type: 'POST',
            url: "/tools/md5",
            data: {text:text,type:type},
            success:function(data){
                var data = JSON.parse(data);
                console.log(data.code)
                if(data.code == 1){
                    $("#bitlowercase_16").val(data.data.bitlowercase16)
                    $("#bituppercase_16").val(data.data.bituppercase16)
                    $("#bitlowercase_32").val(data.data.bitlowercase32)
                    $("#bituppercase_32").val(data.data.bituppercase32)
                }else{
                    alert(data.msg);
                }
            }
        });
    });
});
