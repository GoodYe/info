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
            mainObj = wepassAdmin;
            break;
        case '위패스 점주앱' : 
            mainObj = wepassAdminApp;
            break;
        case '이포포인트' : 
            mainObj = e4point;
            break;    
        case 'StartupLap 자막 Sync' : 
            mainObj = StartupLap;
            break;            
        case '어이브라더' : 
            mainObj = uheebrother;        
            break;
        case '어이시스터' : 
            mainObj = uheesister;        
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
}

///////////////////////////////////////////////////////////////////// potfolio object /////////////////////////////////////////////////////////////////////

var uheebrother = {
    devClient : "Android",
    lang :  "Linux / MongoDb / MySql / Node.js / express",
    client : 100,
    server : 100,
    serviceDes : "생활 축구를 즐기는 사람들을 위한 경기별점, 매칭 등의 맞춤형 서비스",
    reason : "생활 스포츠를 즐기는 인구는 계속 증가한다. 축구, 테니스 등의 단체경기는 필수적으로 함께 경기를 즐길 인원이 필요한데 아직도 포털의 카페 만을 이용하고 있다. 만나서 돈도 쓰고 있다. 모바일을 통해 최적화된 서비스를 제공하자.",
    review : "최소한 next stage에 진출할 때 까지 버틸 수 있는 시장규모가 있어야 사업을 시작할 수 있다.<br>사람들이 아직도 10년 전의 서비스를 이용하고 있다면 그 서비스를 깨기위해 10배 정도 좋은 서비스를 제공해야 한다.",
    devClientStory : "<b>객체 지향 중심의 개발</b> - 모든 유틸리티, UI 클래스 모듈화 관리, 같은 코드를 반복해서 작성하는 일 최소화<br><b>혼자 개발해도 알바보기 쉬운 코드</b> - 라이브러리 사용 시에도 쓸모 없는 코드는 모두 제거하고, 웬만한 UI 클래스는 직접 제작<br><b>Meterial Design 적용</b> - Lollipop 이전 버전에서도 작동할 수 있도록 애니메이션 라이브러리 제작<br><b>서버와의 통신 최소화</b> - SharedPreference 클래스와 Intent 활용을 극대화해서 한 번 받은 데이터를 반복적으로 다시 요청하지 않도록 작성<br><b>Global 대응</b> - 추후 해외로 진출했을 때 바로 다국어 지원 할 수 있도록 모든 문자 string.xml 파일 관리<br>",
    devServerStory : "<b>MongoDB와 MySql의 조화</b> - MongoDB를 통해 사건을 객체로서 관리한다. 대신 JOIN이 번거로운 불편함을 MySql을 통해 해결한다.<br><b>Callback 지옥</b> - 콜백을 보기 쉽게 표현하기 위해 최대한 Asnc 모듈을 활용하고 함수명을 지정해 사용한다.<br><b>웬만하면 죽는다</b> - Node.js 특성 상 조금만 소홀해도 죽는다. throw 문을 최대한 활용하고 죽지 않을 때 까지 디버깅한다.<br>",
    link : "https://play.google.com/store/apps/details?id=com.uheebrother.uheebrother",
    linkText : "구글플레이 바로가기",
    regdate : "2015 1月"
}

var uheesister = {
    devClient : "Web",
    lang :  "Linux / MongoDb / Node.js / express / sphinx",
    client : 100,
    server : 100,
    serviceDes : "립스틱 발색샷을 찾는 20-30대 여성 유저를 위한 발색샷 모음 서비스",
    reason : "지금 타겟들은 천송이 립스틱, 한예슬 립스틱 엄청나게 검색하고 있다. 검색을 통해 립스틱명을 알았다고 하더라고  립스틱을 발랐을 때의 정확한 색을 찾기 위해 수십명의 블로그의 발색샷을 검색하고 있다. 발색샷만 모아놓으면 검색이 쉽지 않을까?",
    review : "발색샷이 모여있는 서비스가 좋은것은 맞다. 하지만 킬러가 되기에는 부족하다. 리뷰, 사용성 등의 다양한 정보가 반드시 뒷받침 되어야한다.",
    devClientStory : "<b>반응형 웹</b> - Multi Device 환경을 지원하기 위해  twitter Bootstrap Grid system 문법을 도입한다. 이 외에 자주 사용되는 CSS Class를 정의한다.<br><b>Instagram API 호출</b> - HashTag 검색  Instagram API 를 호출해 사진을 립스틱 발색샷 사진, 리뷰 정보를 불러온다. 자연어 검색 알고리즘을 직접 구현해 발색샷 사진을 골라내고 부족하면 눈으로 확인해서 발색샷에 최적화된 사진을 골라낸다.<br><b>EJS 모듈 적용</b> - Bootstrap CSS 문법을 그대로 적용하기 위해,  EJS 모듈로 모든 페이지 작업<br><b>Global 대응</b> - 추후 해외로 진출했을 때 바로 다국어 지원 할 수 있도록 i18n 모듈로 문자열 관리<br>",
    devServerStory : "<b>Paging 관리</b> - 스크롤 시 바로 paging 될 수 있도록 Client와의 통신 할 때  현재 페이지의 index를 가지고 다닐 수 있도록 구현. 데이터는 MongoDB에서 쿼리 작업을 통해 불러올 수 있도록한다.<br><b>검색어 관리</b> - 브랜드명, 립스틱명으로 검색했을 때 검색어가 인덱싱 될 수 있도록 sphinx 엔진을 통한 검색 구현<br><b>Callback 지옥</b> - 콜백을 보기 쉽게 표현하기 위해 최대한 Asnc 모듈을 활용하고 함수명을 지정해 사용한다.<br><b>웬만하면 죽는다</b> - Node.js 특성 상 조금만 소홀해도 죽는다. throw 문을 최대한 활용하고 죽지 않을 때 까지 디버깅한다.<br>",
    link : "http://uheesister.com/",
    linkText : "어이시스터 바로가기",
    regdate : "2015 1月"
}

var hotspace = {
    devClient : "Android",
    lang :  "Linux / MySQL / PHP",
    client : 50,
    server : 0,
    serviceDes : "주점 전문 소셜커머스. 유저 간의 헌팅 기능을 제공한다",
    reason : "20대 초·중반의 타겟들은 일반적으로 술 마실때 헌팅을 시도한다. 10-20% 할인을 통해 헌팅을 포장 할 수 없을까?",
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
    review : "준비되지 않은 린스타트업 방법론은 때로는 위험할 수 있다. 20억도 한방이다. 플랫폼 비지니스는 분명하게 무게중심을 잡고 서비스 해야한다.",
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
    serviceDes : "위패스 사내 벤처. 당일 호텔 반값 할인 판매 서비스",
    reason : "호텔나우/데일리호텔을 통해 호텔이 당일 공실을 모바일로 판매 하는 것에 대해 긍적적임을 알게됐다. 위패스 영업사원들을 활용하면 따라잡을 수 있지 않을까?",
    review : "팀원들이 공감하지 못한 서비스는 지속 될 수 없다.",
    devClientStory : "<b>이미지 처리</b> - 커머스 특성상 많은 이미지가 사용된다. 가능한 낮은 byte의 이미지를 활용하고 File Cache, 강제 GC 등의 다양한 방법을 테스트 한 후에 UIL Image Library를 선택했다.<br><b>ListView 관리</b> - ViewHolder 클래스를 활용하면 스크롤 속도를 높일 수 있다. 룸 매진, 판매 중지 등을 리스트에서 다르게 표현하기 위해 여러 ViewHolder Class를 만들어 관리한다<br>",
    devServerStory : "<b>인덱스 관리</b> - PK, FK 관리 여부에 따라 쿼리 속도가 현저하게 다를 수 있다. ER-WIN 등의 3th party 프로그램을 통해 지속적으로 PK, FK 를 관리하고 인덱스가 되지 않는 Row가 있는지 확인한다.<br><b>쿼리최적화</b> - 인덱스 만큼 JOIN, APPLY 가 중요하다. 같은 데이터를 중접해서 불러오지 않도록 쿼리를 튜닝한다. String 값을 CONVERT 하는 것을 최소화해서 DB를 설계한다.",
    link : "",
    linkText : "서비스종료",
    regdate : "2013 12月"
}

var wepassAdmin = {
    devClient : "Web",
    lang :  "Windows / MS-SQL / ASP",
    client : 100,
    server : 80,
    serviceDes : "위패스 점주들이 사용하는 점주용 어드민페이지, 위패스를 통해 수집되는 데이터 노출 , 쿠폰  발송 등의 기능제공",
    reason : "위패스를 이용하는 점주들에게 고객, 매장 관리 기능을 제공하기 위해",
    review : "모두를 만족시키기 위한 기획은 모두를 만족시키지 못 할 수도 있다. 내가 사용하기 쉽다고 남들도 사용하기 쉬운 것은 아니다.",
    devClientStory : "<b>반응형 웹</b> - Multi Device 환경을 지원하기 위해  twitter Bootstrap Grid system 문법을 도입한다. 이 외에 자주 사용되는 CSS Class를 정의한다.<br><b>라이브러리 관리</b> - 차트, 그래프  에 사용되는  Morris , Google Chart API ,  Pinterest UI 구현을 위해 iostope 라이브러리를 사용한다. 비 효율적인 코드를 삭제하고, 필요한 기능을 추가해 Customizing 해서 관리한다.<br><b>javascript 로딩</b> - 대부분의 점주들은 POS를 통해 어드민페이지를 접하기 때문에 접근 환경이 PC보다 떨어지게 된다. Login 단계에서 모든 javascript 파일을 로딩해 페이지 전환 시 새로 로딩하지 않도록 관리한다.<br>",
    devServerStory : "<b>인덱스 관리</b> - PK, FK 관리 여부에 따라 쿼리 속도가 현저하게 다를 수 있다. ER-WIN 등의 3th party 프로그램을 통해 지속적으로 PK, FK 를 관리하고 인덱스가 되지 않는 Row가 있는지 확인한다.<br><b>쿼리최적화</b> - 인덱스 만큼 JOIN, APPLY 가 중요하다. 같은 데이터를 중접해서 불러오지 않도록 쿼리를 튜닝한다. String 값을 CONVERT 하는 것을 최소화해서 DB를 설계한다.",
    link : "http://wepass.co.kr/newadmin/",
    linkText : "어드민 페이지",
    regdate : "2013 10月"
}
var wepassAdminApp= {
    devClient : "Android ",
    lang :  "Windows / MS-SQL / ASP",
    client : 100,
    server : 80,
    serviceDes : "위패스 점주들이 사용하는 점주용 어드민 앱, 위패스를 통해 수집되는 데이터 노출 , 쿠폰  발송 등의 기능제공",
    reason : "위패스를 이용하는 점주들에게 고객, 매장 관리 기능을 제공하기 위해",
    review : "모두를 만족시키기 위한 기획은 모두를 만족시키지 못 할 수도 있다. 내가 사용하기 쉽다고 남들도 사용하기 쉬운 것은 아니다.",
    devClientStory : "<b>Hybrid Android 개발</b> - 기존에 만들어진 어드민 페이지를 Android로 감싸야한다.  Login 시 매장의 아이디를 SharedPreference Class 에 저장하고 로그인에 저장된 매장 아이디를 기준으로 Webpage를 호출한다.  Webpage 이벤트가 각 Client ( Android, IOS , Web ) 에서 모두에서 동작 할 수 있도록 Plugin Object 를 만들어서 Device 별 이벤트 함수를 분리한다.<br>",
    devServerStory : "<b>인덱스 관리</b> - PK, FK 관리 여부에 따라 쿼리 속도가 현저하게 다를 수 있다. ER-WIN 등의 3th party 프로그램을 통해 지속적으로 PK, FK 를 관리하고 인덱스가 되지 않는 Row가 있는지 확인한다.<br><b>쿼리최적화</b> - 인덱스 만큼 JOIN, APPLY 가 중요하다. 같은 데이터를 중접해서 불러오지 않도록 쿼리를 튜닝한다. String 값을 CONVERT 하는 것을 최소화해서 DB를 설계한다.",
    link : "",
    linkText : "서비스종료",
    regdate : "2014 1月"
}

var e4point= {
    devClient : "Web / Android ",
    lang :  "Windows / MS-SQL / ASP / Node.js",
    client : 100,
    server : 80,
    serviceDes : "적립 서비스를 인도네시아에 수출하기 위해 (주)이포넷에서 추진했던 사업의 개발용역",
    reason : "-",
    review : "개발만큼 개발 문서도 중요하다. 외주는 힘들다.",
    devClientStory : "<b>Singleton 방식 개발</b> - Singleton 방식의 개발을 통해 javascript 로딩을 최소화 한다. 직접 Framework를 관리해야 하는 만큼 지속적인 관리가 필요하다.<br><b>Hybrid Android 개발</b> - Webpage 와의 통신을 범용으로 사용하기 위해 대부분의 경우에 javascript 함수명과 파라미터를 그대로 주고 받도록 하여 데이터 처리는 javascript를 통해 처리될 수 있도록 개발 .<br> Webpage 이벤트가 각 Client ( Android, IOS , Web ) 에서 모두에서 동작 할 수 있도록 Plugin Object 를 만들어서 Device 별 이벤트 함수를 분리한다.<br><b>Web socket</b> - socket.io 모듈을 통해  웹소켓 채팅 구현.  socket을 이용한 Node.js 로 구성된 서버와의 통신을 통해 실시간 채팅 기능 제공 <br>",
    devServerStory : "<b>인덱스 관리</b> - PK, FK 관리 여부에 따라 쿼리 속도가 현저하게 다를 수 있다. ER-WIN 등의 3th party 프로그램을 통해 지속적으로 PK, FK 를 관리하고 인덱스가 되지 않는 Row가 있는지 확인한다.<br><b>쿼리최적화</b> - 인덱스 만큼 JOIN, APPLY 가 중요하다. 같은 데이터를 중접해서 불러오지 않도록 쿼리를 튜닝한다. String 값을 CONVERT 하는 것을 최소화해서 DB를 설계한다.",
    link : "",
    linkText : "-",
    regdate : "2014 10月"
}

var StartupLap= {
    devClient : "Web",
    lang :  "Linux / Node.js",
    client : 100,
    server : 100,
    serviceDes : "StartupLap 에서 번역/서비스 중인 How to start a startup 자막 싱크 기술 제공",
    reason : "StartupLap을 통해 How to start a startup 동영상을 시청하고 있었는데,  전체 스크립트를 비교하면서 동영상을 시청하는 것이 불편하다고 생각. 전체 스크립트의 싱크를 맞출 수 있는 프로그램을 만들어 전달하면 보는사람들이 편하지 않을까? ",
    review : "-",
    devClientStory : "<b>Youtube API 분석</b> - Youtube API 를 통해 현재 동영상의 재생 상태, 재생 event 등을 분석<br><b>자막 싱크</b> - 서버에서 분석해서 넘겨받은 자막 데이터를 Youtube API 를 통해 전달받은 현재 재생 시간과 비교해서 뿌려준다.<br>",
    devServerStory : "<b>자막파일 parsing</b> - 자막 스크립트의 시간 문자열을 정규표현식을 parsing 해서 JSON 배열로 저장한다. Client 에서 요청하는 시간에 맞춰 JSON 데이터를 넘겨준다. ",
    link : "http://startuplab.co.kr/lessons/1/lectures/15",
    linkText : "싱크 기술 적용된 StartupLap 서비스 바로가기",
    regdate : "2015 1月"
}


///////////////////////////////////////////////////////////////////// potfolio object /////////////////////////////////////////////////////////////////////
