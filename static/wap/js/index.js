$(document).ready(function () {
    var newstitle = $(".news ul:nth-of-type(3) li div p");
    //news判断新闻标题长度并且给予省略号
    if (newstitle.text().length >= 20) {
        newstitle.text(newstitle.text().substring(0,20) + '...')
    }
})