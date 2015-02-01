(function () {

    $(document).ready(function () {
       //$('#portfolioModal').modal('show');
    });
}).call(this);


function showModal(obj) {
    var title = $(obj).children('.itemInfo').children('.item_title').children('.itemTitleString').text();
    $('#projectTitle').text(title);
    //$('#portfolioModal').modal('show');
    var jqxhr = $.getJSON("/path/portfolio.json", function() {
      alert("success");
    })
    .success(function() { alert("second success"); })
    .error(function() { alert("error"); })
    .complete(function() { alert("complete"); });    
    switch (title) {
        case '핫스페이스' : 
            break;
        case '위패스' : 
            break;            
        case '오늘의특급호텔' : 
            break;
        case '위패스 어드민' : 
            break;
        case '위패스 점주앱' : 
            break;
        case '어이브라더' : 
            break;
        case '어이시스터' : 
            break;            
    }
}
