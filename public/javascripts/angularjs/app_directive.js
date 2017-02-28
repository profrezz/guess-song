
//app.directive('charecter', );
var thaiContent = { 
    guess: 'สวัสดี', 
    option_1: 'ทายสิ เพลงนี้ชื่อว่าเพลงอะไร ? เดาชื่อเพลงให้ไวที่สุดเท่าที่จะเป็นไปได้', 
    option_desc_1: 'คุณเหลือเวลาอีก 40 วินาที',
    option_2: 'เวลานับถอยหลังแล้ว! เลขเวลาจะลดลงทุกวินาที', 
    option_desc_2: 'ตอนนี้คุณเหลือเวลาอยู่ {{totalseconds}} วินาที',
    option_3: 'พิมพ์คำตอบที่ถูกต้องลงไป แบบนี้', 
    option_desc_3: '',
    option_4: 'รับคะแนนไปเลย', 
    option_desc_4: 'เมื่อตอบคำถามถูกต้อง คุณจะได้รับคะแนนข้อละ 120 แต้ม และนาฬิกาจับเวลาจะหยุดชั่วคราวจนกว่าคำถามถัดไปจะแสดงขึ้นมา',
    random_title: 'สุ่มเพลงจากยู Youtube:',
    play_btn: 'เล่นเดี่ยวนี้'
};
var EnglishContent = { 
    guess: 'Guess', 
    option_1: "What's this song name ? guess the wording as fast as possible", 
    option_desc_1: 'You have 40 seconds left!',
    option_2: 'Stopwatch is running! timmer will be decreased every seconds', 
    option_desc_2: 'Now you have {{totalseconds}} seconds',
    option_3: 'Typing input form to answer the question, like this',
    option_desc_3: '', 
    option_4: 'Get Score', 
    option_desc_4: 'Once you answer correct question, you got score +120 peer answer and main stopwatch would be on hold until next question appear',
    random_title: 'Random Songs from Youtube:',
    play_btn: "Let's Play"
};
var translateContent;

app.directive('lang', ['$location', function(location) {
    return {
        restrict: 'A',
        //controller: 'AnnouncementDetailController',
        link: function (scope, element, attr) {
            if (attr.lang !== undefined && attr.lang !== '')
            { 
                var index = 1
                if(location.absUrl().search('/en') > -1){
                console.log(location);
                    
                    translateContent = EnglishContent;
                }else if(location.absUrl().search('/th') > -1){
                    translateContent = thaiContent;
                }
                angular.forEach(translateContent, function(value, key) {
                    if(key == attr.lang){
                        element.text(value); 
                    }
                });
                
            }
        }
    };
}])
.directive('compile', ['$compile', function ($compile) {
    return function (scope, element, attrs) {
        scope.$watch(
            function (scope) {
                //console.log(scope);
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
            },
            function (value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
            }
        );
    };
}]);