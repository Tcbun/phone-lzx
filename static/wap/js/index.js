$(document).ready(function () {
    (function () {
        alert(1);
        var newstitle = $(".news ul:nth-of-type(3) li div p");
        //news判断新闻标题长度并且给予省略号
        if (newstitle.text().length >= 50) {
            alert(true)
            newstitle.text(newstitle.text() + '...')
        } else {
            alert(false)
        }
    })
})