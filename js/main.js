(function () {

    $(document).ready(function () {
       //$('#portfolioModal').modal('show');
    });
}).call(this);


function showModal(obj) {
    var title = $(obj).children('.itemInfo').children('.item_title').children('.itemTitleString').text();
    $('#projectTitle').text(title);
    var mainObj = {};
    
    switch (title) {
        case '핫스페이스' : 
            mainObj = hotspace;        
            break;
        case '위패스' : 
            mainObj = wepass;
            break;            
        case '오늘의특급호텔' : 
            mainObj = hotelist;
            break;
        case '위패스 어드민' : 
            break;
        case '위패스 점주앱' : 
            break;
        case '어이브라더' : 
            mainObj = uheebrother;        
            break;
        case '어이시스터' : 
            break;            
    };
    $('#dev_client').html(mainObj.devClient);
    $('#potfolio_lang').html(mainObj.lang);
    $('#potfolio_client').html(mainObj.client);
    $('#potfolio_server').html(mainObj.server);
    $('#potfolio_service_des').html(mainObj.serviceDes);
    $('#potfolio_service_reason').html(mainObj.reason);
    $('#potfolio_service_review').html(mainObj.review);
    $('#dev_client_story').html(mainObj.devClientStory);
    $('#dev_server_story').html(mainObj.devServerStory);
    $('#potfolio_dev').html(mainObj.dev);
    $('#go_link').attr('href' , mainObj.link );
    $('#go_link').text(mainObj.linkText );
    $('#regdate').text(mainObj.regdate );
    
    $('#portfolioModal').modal('show');
    mainObj = {};
}

///////////////////////////////////////////////////////////////////// potfolio object /////////////////////////////////////////////////////////////////////

var uheebrother = {
    devClient : "Android",
    lang :  "Linux / MongoDb / MySql / Node.js / express",
    client : 100,
    server : 100,
    serviceDes : "생활 축구를 즐기는 사람들을 위한 경기별점, 매칭 등의 맞춤형 서비스",
    reason : "생활 스포츠를 즐기는 인구는 계속 증가한다. 축구, 테니스 등의 단체경기는 필수적으로 함께 경기를 즐길 인원이 필요한데 아직도 포털의 카페 만을 이용하고 있다. 만나서 돈도 쓰고 있다. 모바일을 통해 최적화된 서비스를 제공하자.",
    review : "아무리 작아도 최소한 다음 시장에 진출할 때 까지 버틸 수 있는 시장이어야 한다.<br>사람들이 아직도 10년전의 서비스를 이용하고 있다면 그 서비스를 깨기위해 10배 정도 좋은 서비스를 제공해야 한다.",
    devClientStory : "<b>객체 지향 중심의 개발</b> - 모든 유틸리티, UI 클래스 모듈화 관리, 같은 코드를 반복해서 작성하는 일 최소화<br><b>혼자 개발해도 알바보기 쉬운 코드</b> - 라이브러리 사용 시에도 쓸모 없는 코드는 모두 제거하고, 웬만한 UI 클래스는 직접 제작<br><b>Meterial Design 적용</b> - Lollipop 이전 버전에서도 작동할 수 있도록 애니메이션 라이브러리 제작<br><b>서버와의 통신 최소화</b> - SharedPreference 클래스와 Intent 활용을 극대화해서 한 번 받은 데이터를 반복적으로 다시 요청하지 않도록 작성<br><b>Global 대응</b> - 추후 해외로 진출했을 때 바로 다국어 지원 할 수 있도록 모든 문자 string.xml 파일 관리<br>",
    devServerStory : "<b>MongoDB와 MySql의 조화</b> - MongoDB를 통해 사건을 객체로서 관리한다. 대신 JOIN이 번거로운 불편함을 MySql을 통해 해결한다.<br><b>Callback 지옥</b> - 콜백을 보기 쉽게 표현하기 위해 최대한 Asnc 모듈을 활용하고 함수명을 지정해 사용한다.<br><b>웬만하면 죽는다</b> - Node.js 특성 상 조금만 소홀해도 죽는다. throw 문을 최대한 활용하고 죽지 않을 때 까지 디버깅한다.<br>",
    link : "https://play.google.com/store/apps/details?id=com.uheebrother.uheebrother",
    linkText : "구글플레이 바로가기",
    regdate : "2015 1月"
}

var hotspace = {
    devClient : "Android",
    lang :  "Linux / MySQL / PHP",
    client : 50,
    server : 0,
    serviceDes : "주점 전문 소셜커머스. 유저간의 헌팅 기능을 제공한다",
    reason : "20대 초·중반의 타겟들은 일반적으로 술 마실때 헌팅을 시도한다. 10-20% 할인을 통해 헌팅을 포장 할 수 없을까?!",
    review : "원초적인 Needs를 자극하는 것은 확실한 만큼 많은 위험성이 존재한다. 사업적 경험이 필요하다. 팀을 구할때는 완전 신중하게.",
    devClientStory : "<b>빠른 개발</b> - Hybrid Android 개발 방식으로 빠르게 개발. 당장의 성능을 보기 보다는 빠른 피드백<br>",
    devServerStory : "-",
    link : "https://play.google.com/store/apps/details?id=com.motionj.ax.hotspace",
    linkText : "구글플레이 바로가기",
    regdate : "2012 2月"
}

var wepass = {
    devClient : "Android",
    lang :  "Windows / MS-SQL / ASP",
    client : 70,
    server : 70,
    serviceDes : "모바일 공동적립카드. 커피숍, 음식점들에서 적립 기능을 제공하고 쿠폰 발송 등의 소통 Admin을 제공한다",
    reason : "적립은 일반적인 행동이다. 상점주는 최소한 적립 카드 만드는 비용은 지불하고 있다. 경험많은 팀이 만드는 서비스이기 때문에 배울점이 많다.",
    review : "준비되지 않은 린스타트업 방법론은 때로는 위험할 수 있다. 20억도 한방이다. 플랫폼 비지니스는 분명하게 무게중심을 잡고 서비스해야한다.",
    devClientStory : "<b>빠른 개발</b> - Hybrid Android 개발 방식으로 빠르게 개발. 당장의 성능을 보기 보다는 빠른 피드백<br><b>협업하는 방식</b> - 나 혼자 개발하지 않는다. 최대한 코딩스타일을 맞추고, 특히 함수명에 많은 신경을 쓴다. 버그는 발견 즉시 처리해야 큰 서비스를 유지 할 수 있다.<br><b>Singleton 방식 개발</b> - 같은 Hybrid 어플리케이션이라도 Singleton 방식의 개발을 통해 javascript 로딩을 최소화 할 수 있다. 직접 Framework를 관리해야 하는 만큼 지속적인 관리가 필요하다<br>",
    devServerStory : "<b>인덱스 관리</b> - PK, FK 관리 여부에 따라 쿼리 속도가 현저하게 다를 수 있다. ER-WIN 등의 3th party 프로그램을 통해 지속적으로 PK, FK 를 관리하고 인덱스가 되지 않는 Row가 있는지 확인한다.<br><b>쿼리최적화</b> - 인덱스 만큼 JOIN, APPLY 가 중요하다. 같은 데이터를 중접해서 불러오지 않도록 쿼리를 튜닝한다. String 값을 CONVERT 하는 것을 최소화해서 DB를 설계한다.",
    link : "https://play.google.com/store/apps/details?id=com.wepass.punched",
    linkText : "구글플레이 바로가기",
    regdate : "2013 1月"
}

var hotelist = {
    devClient : "Android",
    lang :  "Windows / MS-SQL / ASP",
    client : 100,
    server : 80,
    serviceDes : "위패스 사내 벤처. 당일 호텔 반값서비스",
    reason : "호텔나우/데일리호텔을 통해 호텔이 당일 공실을 모바일로 판매 하는 것에 대해 긍적적임을 알게됐다. 위패스 영업사원들을 활용하면 따라잡을 수 있지 않을까?",
    review : "팀원들이 공감하지 못한 서비스는 지속 될 수 없다.",
    devClientStory : "<b>이미지 처리</b> - 커머스 특성상 많은 이미지가 사용된다. 가능한 낮은 byte의 이미지를 활용하고 File Cache, 강제 GC 등의 다양한 방법을 테스트 한 후에 UIL Image Library를 선택했다.<br><b>ListView 관리</b> - ViewHolder 클래스를 활용하면 스크롤 속도를 높일 수 있다. 룸 매진, 판매 중지 등을 리스트에서 다르게 표현하기 위해 여러 ViewHolder Class를 만들어 관리한다<br>",
    devServerStory : "<b>인덱스 관리</b> - PK, FK 관리 여부에 따라 쿼리 속도가 현저하게 다를 수 있다. ER-WIN 등의 3th party 프로그램을 통해 지속적으로 PK, FK 를 관리하고 인덱스가 되지 않는 Row가 있는지 확인한다.<br><b>쿼리최적화</b> - 인덱스 만큼 JOIN, APPLY 가 중요하다. 같은 데이터를 중접해서 불러오지 않도록 쿼리를 튜닝한다. String 값을 CONVERT 하는 것을 최소화해서 DB를 설계한다.",
    link : "",
    linkText : "서비스종료",
    regdate : "2013 12月"
}

///////////////////////////////////////////////////////////////////// potfolio object /////////////////////////////////////////////////////////////////////
