let selection = document.getElementById("sellang");
$("#hidefn").hide()
$("#hideFn1").hide()
$("#hideFn2").hide()
let startingValue, newValue;
let k;
let replaceWords;
let valueToBeDisplay = "";
function buttonDisplay(id, value) {
    document.getElementById("fn3").innerHTML = "Formed Sentence (after selecting words):";
    valueToBeDisplay += value + " ";
    document.getElementById("fn4").innerHTML = valueToBeDisplay;
    $("#hidefn").show()
    document.getElementById(id).style.display = "none";
    startingValue++; 
     if(startingValue == newValue){
        $("#hideFn1").show()
     }
}
function ranvalue(data) {
    var mix = data.split(" ");
    var i = mix.length, temp, index;
    while (0 !== i) {
        index = Math.floor(Math.random() * i);
        i --;
        temp = mix[i];
        mix[i] = mix[index];
        mix[index] = temp;
    }
    return mix;
}
  let firstHindiSentence = ['राम और श्याम बाजार गयें',
            'राम और श्याम गयें बाजार',
            'बाजार गयें राम और श्याम',
            'गयें बाजार राम और श्याम'
            ];
        let secondHindiSentence = ['राम सोया और श्याम भी',
            'श्याम सोया और राम भी',
            'सोया श्याम और राम भी',
            'सोया राम और श्याम भी'
            ];
        let thirdHindiSentence = ['मैंने उसे बताया कि राम सो रहा है',
            'मैंने उसे बताया कि सो रहा है राम',
            'उसे मैंने बताया कि राम सो रहा है',
            'उसे मैंने बताया कि सो रहा है राम',
            'मैंने बताया उसे कि राम सो रहा है',
            'मैंने बताया उसे कि सो रहा है राम',
            'उसे बताया मैंने कि राम सो रहा है',
            'उसे बताया मैंने कि सो रहा है राम',
            'बताया मैंने उसे कि राम सो रहा है',
            'बताया मैंने उसे कि सो रहा है राम',
            'बताया उसे मैंने कि राम सो रहा है',
            'बताया उसे मैंने कि सो रहा है राम'
            ];
        let fourthHindiSentence = ['राम खाकर सोया',
            'खाकर राम सोया',
            'राम सोया खाकर',
            'खाकर सोया राम',
            'सोया राम खाकर',
            'सोया खाकर राम'
            ];
        let fifthHindiSentence = ['बिल्लियों को मारकर कुत्ता सो गया ',
            'मारकर बिल्लियों को कुत्ता सो गया',
            'बिल्लियों को मारकर सो गया कुत्ता',
            'मारकर बिल्लियों को सो गया कुत्ता',
            'कुत्ता सो गया बिल्लियों को मारकर',
            'कुत्ता सो गया मारकर बिल्लियों को',
            'सो गया कुत्ता बिल्लियों को मारकर',
            'सो गया कुत्ता मारकर बिल्लियों को'
            ];
        let sixthHindiSentence = ['एक लाल किताब वहाँ है',
            'एक लाल किताब है वहाँ',
            'वहाँ है एक लाल किताब',
            'है वहाँ एक लाल किताब'
            ];
        let seventhHindiSentence = ['एक बड़ी सी किताब वहाँ है',
            'एक बड़ी सी किताब है वहाँ',
            'बड़ी सी एक किताब वहाँ है',
            'बड़ी सी एक किताब है वहाँ',
            'वहाँ है एक बड़ी सी किताब',
            'वहाँ है बड़ी सी एक किताब',
            'है वहाँ एक बड़ी सी किताब',
            'है वहाँ बड़ी सी एक किताब'
            ];
        let hindiArray = [firstHindiSentence,secondHindiSentence,thirdHindiSentence,fourthHindiSentence,
            fifthHindiSentence,sixthHindiSentence,seventhHindiSentence];


    let firstEnglishSentence = ['John ate an apple before afternoon',
        'before afternoon John ate an apple',
        'John before afternoon ate an apple'
        ];
    let secondEnglishSentence = ['some students like to study in the night',
        'at night some students like to study'
        ];
    let thirdEnglishSentence = ['John and Mary went to church',
        'Mary and John went to church'
        ];
    let fourthEnglishSentence = ['John went to church after eating',
        'after eating John went to church',
        'John after eating went to church'
        ];
    let fifthEnglishSentence = ['did he go to market',
        'he did go to market'
        ];
    let sixthEnglishSentence = ['the woman who called my sister sells cosmetics',
        'the woman who sells cosmetics called my sister',
        'my sister who sells cosmetics called the woman',
        'my sister who called the woman sells cosmetics'
        ];
    let seventhEnglishSentence = ['John goes to the library and studies',
        'John studies and goes to the library'
        ];
    let eightEnglishSentence = ['John ate an apple so did she',
        'she ate an apple so did John'
        ];
    let ninethEnglishSentence = ['the teacher returned the book after she noticed the error',
        'the teacher noticed the error after she returned the book',
        'after the teacher returned the book she noticed the error',
        'after the teacher noticed the error she returned the book',
        'she returned the book after the teacher noticed the error',
        'she noticed the error after the teacher returned the book',
        'after she returned the book the teacher noticed the error',
        'after she noticed the error the teacher returned the book'
        ];
    let tenthEnglishSentence = ['I told her that I bought a book yesterday',
        'I told her yesterday that I bought a book',
        'yesterday I told her that I bought a book',
        'I bought a book that I told her yesterday',
        'I bought a book yesterday that I told her',
        'yesterday I bought a book that I told her'
       ];
    let englishArray = [firstEnglishSentence,secondEnglishSentence,thirdEnglishSentence,fourthEnglishSentence,
        fifthEnglishSentence,sixthEnglishSentence,seventhEnglishSentence,eightEnglishSentence,ninethEnglishSentence,tenthEnglishSentence];
    run = function () {
    if (selection.value === "english") {
    document.getElementById("fn1").innerHTML = "(select the buttons in proper order)"
    document.getElementById("fn2").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
    replaceWords = Math.floor(Math.random()*englishArray.length)
    document.getElementById("fn3").innerHTML = ""
    document.getElementById("fn4").innerHTML = ""
    document.getElementById("fn5").innerHTML = ""
    document.getElementById("fn6").innerHTML = ""
    document.getElementById("fn7").innerHTML = ""
    disAns = ""
    valueToBeDisplay=""
    $("#hidefn").hide()
    $("#hideFn1").hide()
    let gettingValue = englishArray[replaceWords][0];
    k = ranvalue(gettingValue);
    startingValue = 0;
    newValue =0;
    let n = "";
    for (i = 0; i <= k.length - 1; i++) {
        val = k[i];
    let m = "  <button style= 'font-size:16px ; padding:4px ; margin-right:4px ' id='btn1" + i + "' onclick='buttonDisplay(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
        n += m;
        newValue++;
    }
    document.getElementById("val").innerHTML = n 
    }

else if (selection.value === "hindi") {
    
    document.getElementById("fn1").innerHTML = "(select the buttons in proper order)"
    document.getElementById("fn2").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
    replaceWords = Math.floor(Math.random()*hindiArray.length)
    document.getElementById("fn3").innerHTML = ""
    document.getElementById("fn4").innerHTML = ""
    document.getElementById("fn5").innerHTML = ""
    document.getElementById("fn6").innerHTML = ""
    document.getElementById("fn7").innerHTML = ""
    disANS = ""
    valueToBeDisplay = "";
    $("#hidefn").hide()
    $("#hideFn1").hide()
    let gettingValue = hindiArray[replaceWords][0];
    k = ranvalue(gettingValue);
    startingValue = 0;
    newValue = 0;
    let n = "";
    for (i = 0; i <= k.length - 1; i++) {
        val = k[i];
    let m = "  <button style= 'font-size:16px ; padding:4px ; margin-right:4px ' id='btn1" + i + "' onclick='buttonDisplay(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
        n += m;
        newValue++;
    }
    document.getElementById("val").innerHTML = n
} else {
    document.getElementById("fn1").innerHTML = ""
    document.getElementById("fn2").innerHTML = ""
    document.getElementById("val").innerHTML = ""
    document.getElementById("fn3").innerHTML = ""
    document.getElementById("fn4").innerHTML = ""
    document.getElementById("fn5").innerHTML = ""
    document.getElementById("fn6").innerHTML = ""
    document.getElementById("fn7").innerHTML = ""
    $("#hidefn").hide()
    $("#hideFn1").hide()
    disAns = ""
    alert("Please choose any language")
    }
}
function reset() {
    for (i = 0; i <= k.length - 1; i++) {
        document.getElementById('btn1' + i).style.display = "";
    }
    document.getElementById("fn3").innerHTML = ""
    document.getElementById("fn4").innerHTML = ""
    document.getElementById("fn5").innerHTML = ""
    document.getElementById("fn6").innerHTML = ""
    document.getElementById("fn7").innerHTML = ""
    valueToBeDisplay = ""
    startingValue=0;
    disAns = ""
    $("#hidefn").hide()
    $("#hideFn1").hide()
}
let answerKeyValue = ['John ate an apple before afternoon',
'before afternoon John ate an apple',
'John before afternoon ate an apple',
'some students like to study in the night',
'at night some students like to study'
    ,'John and Mary went to church',
    'Mary and John went to church',
    'John went to church after eating', 
    'after eating John went to church',
    'John after eating went to church',
    'did he go to market',
    'he did go to market',
    'the woman who called my sister sells cosmetics',
    'the woman who sells cosmetics called my sister',
    'my sister who sells cosmetics called the woman',
    'my sister who called the woman sells cosmetics',
    'John goes to the library and studies', 'John studies and goes to the library',
    'John ate an apple so did she', 'she ate an apple so did John',
    'the teacher returned the book after she noticed the error',
    'the teacher noticed the error after she returned the book',
    'after the teacher returned the book she noticed the error',
    'after the teacher noticed the error she returned the book',
    'she returned the book after the teacher noticed the error',
    'she noticed the error after the teacher returned the book',
    'after she returned the book the teacher noticed the error',    
    'after she noticed the error the teacher returned the book',
    'I told her that I bought a book yesterday',    
    'I told her yesterday that I bought a book',
    'yesterday I told her that I bought a book', 
    'I bought a book that I told her yesterday',
    'I bought a book yesterday that I told her',
    'yesterday I bought a book that I told her',
    'राम और श्याम बाजार गयें',
    'राम और श्याम गयें बाजार',
    'बाजार गयें राम और श्याम',
    'गयें बाजार राम और श्याम',
    'राम सोया और श्याम भी',
    'श्याम सोया और राम भी',
    'सोया श्याम और राम भी',
    'सोया राम और श्याम भी',
    'मैंने उसे बताया कि राम सो रहा है',
    'मैंने उसे बताया कि सो रहा है राम',
    'उसे मैंने बताया कि राम सो रहा है',
    'उसे मैंने बताया कि सो रहा है राम',
    'मैंने बताया उसे कि राम सो रहा है',
    'मैंने बताया उसे कि सो रहा है राम',
    'उसे बताया मैंने कि राम सो रहा है',
    'उसे बताया मैंने कि सो रहा है राम',
    'बताया मैंने उसे कि राम सो रहा है',
    'बताया मैंने उसे कि सो रहा है राम',
    'बताया उसे मैंने कि राम सो रहा है',
    'बताया उसे मैंने कि सो रहा है राम',
    'राम खाकर सोया',
    'खाकर राम सोया',
    'राम सोया खाकर',
    'खाकर सोया राम',
    'सोया राम खाकर',
    'सोया खाकर राम',
    'बिल्लियों को मारकर कुत्ता सो गया',
    'मारकर बिल्लियों को कुत्ता सो गया',
    'बिल्लियों को मारकर सो गया कुत्ता',
    'मारकर बिल्लियों को सो गया कुत्ता',
    'कुत्ता सो गया बिल्लियों को मारकर',
    'कुत्ता सो गया मारकर बिल्लियों को',
    'सो गया कुत्ता बिल्लियों को मारकर',
    'सो गया कुत्ता मारकर बिल्लियों को',
    'एक लाल किताब वहाँ है',
    'एक लाल किताब है वहाँ',
    'वहाँ है एक लाल किताब',
    'है वहाँ एक लाल किताब',
    'एक बड़ी सी किताब वहाँ है',
    'एक बड़ी सी किताब है वहाँ',
    'बड़ी सी एक किताब वहाँ है',
    'बड़ी सी एक किताब है वहाँ',
    'वहाँ है एक बड़ी सी किताब',
    'वहाँ है बड़ी सी एक किताब',
    'है वहाँ एक बड़ी सी किताब',
    'है वहाँ बड़ी सी एक किताब'
     ];
function checkCorrectness(){
    let storeValue = valueToBeDisplay.trim()
    for(let i =0;i<answerKeyValue.length;i++){
        let temporary = answerKeyValue[i]
        let localValue = temporary.localeCompare(storeValue)
        if(localValue === 0){
            document.getElementById("fn5").innerHTML = "Right answer!!!"
            document.getElementById("fn5").style.color = "green"
            return  document.getElementById("fn5").innerHTML = "Right answer!!!"
            }
            document.getElementById("fn5").innerHTML = "Wrong answer!!!"
            document.getElementById("fn5").style.color = "red"
        }
          document.getElementById("fn6").innerHTML = "<button id='hideFn2' onclick='getAnswers();'>Get Correct Sentence</button>"
 }
let allAns,disAns;
 function getAnswers(){
    disAns=""
    allAns = 0
    document.getElementById("fn7").innerHTML = ""
    if(selection.value=='hindi'){
        allAns = hindiArray[replaceWords].length-1;
        document.getElementById('fn6').innerHTML = "<button id='hideFn2' onclick='hide()'>Hide the Correct Sentence</button>"
        for(i=0;i<=allAns;i++){
            disAns = disAns + hindiArray[replaceWords][i]+"<br/>"
        }
        document.getElementById("fn7").innerHTML = disAns;
    }else if (selection.value=='english'){
        allAns = englishArray[replaceWords].length-1;
        document.getElementById('fn6').innerHTML = "<button id='hideFn2' onclick='hide()'>Hide the Correct Sentence</button>"
        for(i=0;i<=allAns;i++){
            disAns = disAns + englishArray[replaceWords][i]+"<br/>"
        }
        document.getElementById("fn7").innerHTML = disAns;
    }
}
hide = function(){
    document.getElementById('fn6').innerHTML = "<button id='hideFn2' onclick='swapButton()'>Get Answers</button>"
    document.getElementById("fn7").innerHTML = "";
}
swapButton = function(){
    while(document.getElementById("fn7").innerHTML ==""){
        document.getElementById('fn6').innerHTML = "<button id='hideFn2' onclick='hide()'>Hide the Correct Sentence</button>"
        document.getElementById("fn7").innerHTML = disAns;
    }
} 