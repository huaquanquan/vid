function htmltoubb(){
    str = pattern(document.getElementById("Hsource").value);
    document.getElementById("Uresult").value=str;
}

function pattern(str){
    //str = str.replace(/(\r\n|\n|\r)/ig, '');

    str = str.replace(/<br[^>]*>/ig,'\n');
    str = str.replace(/<p[^>\/]*\/>/ig,'\n');
    //str = str.replace(/\[code\](.+?)\[\/code\]/ig, function($1, $2) {return phpcode($2);});

    str = str.replace(/\son[\w]{3,16}\s?=\s*([\'\"]).+?\1/ig,'');

    str = str.replace(/<hr[^>]*>/ig,'[hr]');
    str = str.replace(/<(sub|sup|u|strike|b|i|pre)>/ig,'[$1]');
    str = str.replace(/<\/(sub|sup|u|strike|b|i|pre)>/ig,'[/$1]');
    str = str.replace(/<(\/)?strong>/ig,'[$1b]');
    str = str.replace(/<(\/)?em>/ig,'[$1i]');
    str = str.replace(/<(\/)?blockquote([^>]*)>/ig,'[$1blockquote]');

    str = str.replace(/<img[^>]*smile=\"(\d+)\"[^>]*>/ig,'[s:$1]');
    str = str.replace(/<img[^>]*src=[\'\"\s]*([^\s\'\"]+)[^>]*>/ig,'[img]'+'$1'+'[/img]');
    str = str.replace(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/ig,'[url=$1]'+'$2'+'[/url]');
    //str = str.replace(/<h([1-6]+)([^>]*)>(.*?)<\/h\1>/ig,function($1,$2,$3,$4){return h($3,$4,$2);});


    str = str.replace(/<[^>]*?>/ig, '');
    str = str.replace(/&amp;/ig, '&');
    str = str.replace(/&lt;/ig, '<');
    str = str.replace(/&gt;/ig, '>');

    return str;
}

function up(str){

    str = str.replace(/</ig,'&lt;');
    str = str.replace(/>/ig,'&gt;');
    str = str.replace(/\n/ig,'<br />');
    str = str.replace(/\[code\](.+?)\[\/code\]/ig, function($1, $2) {return phpcode($2);});

    str = str.replace(/\[hr\]/ig,'<hr />');
    str = str.replace(/\[\/(size|color|font|backcolor)\]/ig,'</font>');
    str = str.replace(/\[(sub|sup|u|i|strike|b|blockquote|li)\]/ig,'<$1>');
    str = str.replace(/\[\/(sub|sup|u|i|strike|b|blockquote|li)\]/ig,'</$1>');
    str = str.replace(/\[\/align\]/ig,'</p>');
    str = str.replace(/\[(\/)?h([1-6])\]/ig,'<$1h$2>');

    str = str.replace(/\[align=(left|center|right|justify)\]/ig,'<p align="$1">');
    str = str.replace(/\[size=(\d+?)\]/ig,'<font size="$1">');
    str = str.replace(/\[color=([^\[\<]+?)\]/ig, '<font color="$1">');
    str = str.replace(/\[backcolor=([^\[\<]+?)\]/ig, '<font style="background-color:$1">');
    str = str.replace(/\[font=([^\[\<]+?)\]/ig, '<font face="$1">');
    str = str.replace(/\[list=(a|A|1)\](.+?)\[\/list\]/ig,'<ol type="$1">$2</ol>');
    str = str.replace(/\[(\/)?list\]/ig,'<$1ul>');

    str = str.replace(/\[s:(\d+)\]/ig,function($1,$2){ return smilepath($2);});
    str = str.replace(/\[img\]([^\[]*)\[\/img\]/ig,'<img src="$1" border="0" />');
    str = str.replace(/\[url=([^\]]+)\]([^\[]+)\[\/url\]/ig, '<a href="$1">'+'$2'+'</a>');
    str = str.replace(/\[url\]([^\[]+)\[\/url\]/ig, '<a href="$1">'+'$1'+'</a>');
    return str;
}

function ubbtohtml(){
    str = up(document.getElementById("Usource").value);
    document.getElementById("Hresult").value=str;
}