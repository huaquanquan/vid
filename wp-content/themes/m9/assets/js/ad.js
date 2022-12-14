var vip_gg_small_new = '<div class="small_vip_gg_new">';
vip_gg_small_new += '<a href="javascript:;" class="close_btn"></a>',
    vip_gg_small_new += '<a href="' + home_url + '/svip" target="_blank" class="link">',
    vip_gg_small_new += '<img src="' + home_url + '/wp-content/themes/m9/assets/images/vip_gg_small.gif" alt="" />',
    vip_gg_small_new += "</a>",
    vip_gg_small_new += "</div>";
var big_vip_gg_close = getcookie("big_vip_gg_close")
    , big_vip_gg_close_sem = getcookie("big_vip_gg_close_sem")
    , big_vip_gg_receive_sem = getcookie("big_vip_gg_receive_sem");
if ("undefined" != typeof current_project && "veer" != current_project && "chongzhi" != current_project && "order" != current_project && "bargain" != current_project && "company_index" != current_project && "undefined" == typeof pageName) {
    cookieinfo = getcookie("uchome_newauth");
    var viptimeout = null
        , utm_source = getcookie("utm_source");
    if ("undefined" != typeof cookieinfo && "" != cookieinfo)
        jQuery.ajax({
            type: "get",
            url: api_domain + "/Login/checkNewVip",
            data: {},
            dataType: "jsonp",
            jsonp: "jsoncallback",
            success: function(data) {
                var is_sem;
                if (1 != data)
                    if (1 == getcookie("is_sem"))
                        if (jQuery("body").append(vip_gg_small_new),
                        "shejigaoView" == current_project || "gaoduanView" == current_project || "freeView" == current_project || "sheyingView" == current_project)
                            "" == big_vip_gg_close_sem || 1 != big_vip_gg_close_sem ? jQuery("body").append(vip_gg_big_new) : $(".small_vip_gg_new").show();
                        else {
                            var nologin_visit = getcookie("nologin_visit");
                            "" == big_vip_gg_close_sem || 1 != big_vip_gg_close_sem ? jQuery("body").append(vip_gg_big_new) : $(".small_vip_gg_new").show()
                        }
                    else if (jQuery("body").append(vip_gg_small_new),
                    "shejigaoView" == current_project || "gaoduanView" == current_project || "freeView" == current_project || "sheyingView" == current_project)
                        "" == big_vip_gg_close_sem || 1 != big_vip_gg_close_sem ? jQuery("body").append(vip_gg_big_new) : $(".small_vip_gg_new").show();
                    else {
                        var nologin_visit = getcookie("nologin_visit");
                        "" == big_vip_gg_close_sem || 1 != big_vip_gg_close_sem ? jQuery("body").append(vip_gg_big_new) : $(".small_vip_gg_new").show()
                    }
            }
        });
    else {
        var nologin_visit = getcookie("nologin_visit");
        void 0 !== nologin_visit && nologin_visit >= 1 && ("baidu" == utm_source || "360" == utm_source ? ($(".big_vip_gg").hide(),
            jQuery(".small_vip_gg").hide(),
            jQuery("body").append(vip_gg_small_new),
        "shejigaoView" == current_project || "gaoduanView" == current_project || "freeView" == current_project || current_project,
            "" == big_vip_gg_close_sem || 1 != big_vip_gg_close_sem ? jQuery("body").append(vip_gg_big_new) : $(".small_vip_gg_new").show()) : (jQuery("body").append(vip_gg_small_new),
        "shejigaoView" == current_project || "gaoduanView" == current_project || "freeView" == current_project || current_project,
            "" == big_vip_gg_close_sem || 1 != big_vip_gg_close_sem ? jQuery("body").append(vip_gg_big_new) : $(".small_vip_gg_new").show()))
    }
    jQuery(document).on("click", ".big_vip_gg .close_btn", (function() {
            $(".big_vip_gg").animate({
                width: "0",
                height: "0",
                bottom: "320px"
            }, 300, (function() {
                    setcookie("big_vip_gg_close", 1, 86400, "/", "redocn.com"),
                        $(".small_vip_gg").show()
                }
            ))
        }
    )),
        jQuery(document).on("click", ".big_vip_gg .link", (function() {
                setcookie("big_vip_gg_close", 1, 86400, "/", "redocn.com")
            }
        )),
        jQuery(document).on("click", ".big_vip_gg_new .close_btn", (function() {
                $(".big_vip_gg_new").animate({
                    width: "0",
                    height: "0",
                    bottom: "364px"
                }, 300, (function() {
                        setcookie("big_vip_gg_close_sem", 1, 86400, "/", "redocn.com"),
                            $(".small_vip_gg_new").show()
                    }
                ))
            }
        )),
        jQuery(document).on("click", ".small_vip_gg_new .close_btn", (function() {
                jQuery(".small_vip_gg_new").hide()
            }
        )),
        jQuery(document).on("click", ".big_vip_gg_new .link", (function() {
                setcookie("big_vip_gg_close_sem", 1, 86400, "/", "redocn.com")
            }
        )),
        jQuery(document).on("click", ".big_vip_gg_new .receive", (function() {
                var myDate, receive_time = (new Date).getTime();
                setcookie("big_vip_gg_close_sem", 1, 86400, "/", "redocn.com"),
                    setcookie("big_vip_gg_receive_sem", receive_time, 86400, "/", "redocn.com")
            }
        ))
}