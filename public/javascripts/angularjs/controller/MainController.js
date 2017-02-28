app.controller('MainCtrl', function($scope, $interval) {
    $scope.pageTitle= "TEST";
    $scope.lastName= "Chayut";
    Clear();
    
    var hidenWord = "_";
    var init1 = 'อัอึอำอัอีอ้อ่อิอือ์อ่อ๋อ็อ๊';
    var init2 = 'อูอุ';

    var saraUper = init1.split('อ');
    var saraLower= init2.split('อ');

    var word = 'ศูนย์ประชุมแห่งชาติศิริกิติ์';
    var wordTransform = [];
    var wordCorrect = [];
    var jsonstrExample = { "words" : [{"charecter":"v", "isCorrect":"N"},{"charecter":"x", "isCorrect":"N"}]};
    
    wordTransform['wholeword'] = convertToJSON(word);
    renderForJSON(word);
    $interval(renderAgain, 2000);

    //doRandomRange(wordTransform['wholeword']);
   // renderForJSON(word);
   // renderAgain();

    // var tt;
    // wordTransform['wholeword'].forEach(function(element) {
    //     tt += element.charecter;

    //     //console.log(element.charecter);
    // }, this);
    // console.log(wordTransform['wholeword']);

    

    // function
    function renderForArray(words)
    {
        wordTransform['words'] = [];
        wordTransform['vowel-upper1'] = [];
        wordTransform['vowel-upper2'] = [];
        wordTransform['vowel-lower'] = [];
        var charPos = -1;
        var isUpperOnce = false;
        for(var index=0;index<words.length;index++)
        {
            var charecter = words[index];
            var charCorrect = 'N';
            // check correct
            if(wordTransform['wholeword'][index].isCorrect == 'Y')
                charCorrect = 'Y';
            //console.log(charecter);
            if(checkExistigSaraUpper(charecter)){
                //this is sara upper
                if(isUpperOnce){
                    wordTransform['vowel-upper2'].push({"charecter":charecter, "type":"upper2", "isCorrect":charCorrect, "position":charPos, "class":"hideword-vowel"});                    
                    isUpperOnce = false;
                }else {
                    wordTransform['vowel-upper1'].push({"charecter":charecter, "type":"upper1", "isCorrect":charCorrect, "position":charPos, "class":"hideword-vowel"});
                    isUpperOnce = true;
                }
            }else if(checkExistigSaraLower(charecter)){
                //this is sara lower
                wordTransform['vowel-lower'].push({"charecter":charecter, "type":"lower", "isCorrect":charCorrect, "position":charPos, "class":"hideword-vowel"});
                isUpperOnce = false;
            }else{
                //this is other
                wordTransform['words'].push({"charecter":charecter, "type":"normal", "isCorrect":charCorrect, "position":charPos, "class":"hideword"});
                charPos = charPos + 1;
                isUpperOnce = false;
            }
        }
        assignValueToScope(wordTransform);
        //console.log(wordTransform);
    }
    function renderAgain() {
        var isSuccess = checkSuccess(wordTransform['wholeword']);
        //console.log(isSuccess);
        if(!isSuccess){
            wordTransform['wholeword'] = doRandomRange(wordTransform['wholeword']);
            renderForJSON(word);
        }
        
    }

    function checkSuccess(words) {
        for(var index=0;index<words.length;index++){
            if(words[index] != undefined && words[index].isCorrect == 'N')
                return false;
        }
        return true;
    }

    function convertToJSON(word) {
        var charPos = 0;
        wordTransform['wholeword'] = [];
        for(var index=0;index<word.length;index++){
            wordTransform['wholeword'].push({"charecter":word[index], "type":"wholeword", "isCorrect":"N", "position":charPos, "class":"hideword"});
            charPos = charPos + 1;
        }
        return wordTransform['wholeword'];
    }

    function doRandomRange(answerArray) {

        do{
            var index = Math.round((Math.random() * answerArray.length));
        }while( answerArray[index].isCorrect == 'Y' );
        //console.log(index);
        answerArray[index].isCorrect = 'Y';
        return answerArray;
    }
    function assignValueToScope(wordTransform){
        //console.log(wordTransform['words']);
        $scope.charecters  = wordTransform['words'];
        $scope.vowelUpper1 = rearrange(wordTransform, 'vowel-upper1','upper1');
        $scope.vowelUpper2 = rearrange(wordTransform, 'vowel-upper2','upper2');
        $scope.vowelLower  = rearrange(wordTransform, 'vowel-lower','lower');
    }
    function rearrange(wordTransform, indexkey, key){
        var temp = [];
        temp[indexkey] = [];
        for(var index = 0; index < wordTransform['words'].length ; index++){
            var isFind = false;
            wordTransform[indexkey].forEach(function(element) {
                if(index==element.position){
                    temp[indexkey].push({"charecter":element.charecter, "type":key, "isCorrect":"N", "position":index, "class":"hideword-vowel"});
                    isFind = true;
                }
            }, this);
            if(!isFind){
                temp[indexkey].push({"charecter":" ", "type":key, "isCorrect":"Y", "position":index, "class":"invisibleword"});
            }
            //console.log(wordTransform[indexkey][index]);
            //debugger;
        }
        return temp[indexkey];
    }

    function renderForJSON(words)
    {
        wordTransform['words'] = [];
        wordTransform['vowel-upper1'] = [];
        wordTransform['vowel-upper2'] = [];
        wordTransform['vowel-lower'] = [];
        var charPos = -1;
        var isUpperOnce = false;
        var blankChar = ' ';
        for(var index=0;index<words.length;index++)
        {
            var charecter = words[index];
            var charCorrect = false;
            //check correct or not
            if(wordTransform['wholeword'][index].isCorrect == 'Y')
                charCorrect = true;

            //debugger;
            //console.log(charecter);
            if(checkExistigSaraUpper(charecter)){
                //this is sara upper
                if(isUpperOnce){
                    wordTransform['vowel-upper2'].push({"charecter":charCorrect?charecter:blankChar, "type":"upper2", "isCorrect":charCorrect, "position":charPos, "class":"hideword-vowel"});                    
                    isUpperOnce = false;
                }else {
                    wordTransform['vowel-upper1'].push({"charecter":charCorrect?charecter:blankChar, "type":"upper1", "isCorrect":charCorrect, "position":charPos, "class":"hideword-vowel"});
                    isUpperOnce = true;
                }
            }else if(checkExistigSaraLower(charecter)){
                //this is sara lower
                wordTransform['vowel-lower'].push({"charecter":charCorrect?charecter:blankChar, "type":"lower", "isCorrect":charCorrect, "position":charPos, "class":"hideword-vowel"});
                isUpperOnce = false;
            }else{
                //this is other
                wordTransform['words'].push({"charecter":charCorrect?charecter:blankChar, "type":"normal", "isCorrect":charCorrect, "position":charPos, "class":"hideword"});
                charPos = charPos + 1;
                isUpperOnce = false;
            }
        }
        assignValueToScope(wordTransform);
        //console.log(wordTransform);
    }

    function checkExistigSaraUpper(charecter)
    {
        //console.log(charecter);
        return saraUper.indexOf(charecter) > -1;
    }

    function checkExistigSaraLower(charecter)
    {
        //console.log(charecter);
        return saraLower.indexOf(charecter) > -1;
    }
    function Clear()
    {
        wordTransform = [];
        wordCorrect = [];
        $scope.charecters = [];
        $scope.vowelUpper1 = [];
        $scope.vowelUpper2 = [];
        $scope.vowelLower = [];
    }

});

