/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){
    $("#b1").bind("click",click1);
    $("#b2").bind("click",click2);
    $("button").unbind("click",click1);
/*bind继承自on，推荐用on*/
    $("#b3").on("click",click1);
    $("#b4").on("click",click2);
    $("button").off("click",click1);


})
function click1(e){
    console.log("success1")
}
function click2(e){
    console.log("success2")
}

