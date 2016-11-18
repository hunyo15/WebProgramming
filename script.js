// Code goes here


function setup() {
    var preval="" //변수선언
       preval=document.getElementById("preselectedValue").value; //value = 1s 
        if (preval!="")  {  //preval 변수가 아니면 
            restartDemo(preval)
            var x=document.getElementsByTagName("input") //x = input태그
            var l=x.length  //l = input태그 길이 
            for (i=0;i<l;i++) {  //input 태그 길이만큼 반복
                if (x[i].value==preval)  { // x[i] value 가 preval하고 같으면 
                        x[i].checked=true // x[i]에 체크한다 
                }
            }
            document.getElementById("rootContainer").style.display="block";
        }
}
/**
 * [getPropertyValue: retrieves the selected value and call restartDemo function]
 * @param  {[Object]} obj [DOM object that user selects]
 */
function getPropertyValue(obj) { //obj은 input 자기자신 this
    restartDemo(obj.value); //input 의 value 값 ex)1s , 2s , 5s, 10s, 500ms
}

/**
 * [restartDemo description]
 * @param  {[string]} value [value that user selects]
 */
 
function restartDemo(value) { //value = obj.value 즉 input value값
 
    document.getElementById("demoDIV").className = "my" + value; //빨강 demodiv 상자의 클래스 네임 변경 ex)my2s
    var x =  document.getElementById("resultView");  // x = resultView div 
    var y=document.getElementById("resultDIV").cloneNode(true); //y = resultDIV 노드 복사
     var cc;
    x.removeChild(document.getElementById("resultDIV")); //resultView div의 자식노드를 지운다. 
    x.appendChild(y);  //resultView div의 자식노드를 추가한다. 
    
    document.getElementById("demoDIV").style.animationDuration = value; //animationDuration 값 변경 
    document.getElementById("demoDIV").style.animationIterationCount = value; //animationIterationCount 값 변경 
    document.getElementById("demoDIV").style.animationTimingFunction = value; //animationTimingFunction  값 변경 
    
    var pName = document.getElementById("propertyTitle").innerHTML; //propertyTitle 즉 animation-duration: 
    var x = pName + "<span id='enlargeCSSProp'>" + value  + "</span>"; // x = animation-duration: + input value값 
    var y="#demoDIV {<br>    ###CSSPROP###;<br>}<br>"; // y = #demoDIV {<br>    ###CSSPROP###;<br>}<br>
    var z=y.replace("###CSSPROP###",x); // z= ###CSSPROP### 부분을 x로 교체한다   

    document.getElementById("CSSCode").innerHTML = z; //CSSCode = z 

    document.getElementById("enlargeJSValue").innerHTML = value; //JavaScript Code: value 변경
}

function cssbut1(){
   document.getElementById("propertyTitle").innerHTML = "animationDuration:";
   document.getElementById("label1").innerHTML = "1s";
   document.getElementById("value_1").setAttribute("value", "1s");
   document.getElementById("label2").innerHTML = "2s";
   document.getElementById("value_2").setAttribute("value", "2s");
   document.getElementById("label3").innerHTML = "5s";
   document.getElementById("value_3").setAttribute("value", "5s");
   document.getElementById("label4").innerHTML = "10s";
   document.getElementById("value_4").setAttribute("value", "10s");
   document.getElementById("label5").innerHTML = "500ms";
   document.getElementById("value_5").setAttribute("value", "500ms");
   document.getElementById("propertyName").innerHTML = "animationDuration";
   document.getElementById("enlargeJSValue").innerHTML = "1";
   
    var x =  document.getElementById("resultView");  // x = resultView div 
    var y=document.getElementById("resultDIV").cloneNode(true); //y = resultDIV 노드 복사
    var cc;
    x.removeChild(document.getElementById("resultDIV")); //resultView div의 자식노드를 지운다. 
    x.appendChild(y);  //resultView div의 자식노드를 추가한다. 
   
   document.getElementById("demoDIV").style.animation = "demomove infinite";
   document.getElementById("demoDIV").style.animationDuration = "1s";
   document.getElementsByTagName("input")[1].checked=true;
   
   var pName = document.getElementById("propertyTitle").innerHTML; //propertyTitle 즉 animation-duration: 
   var x = pName + "<span id='enlargeCSSProp'>" + "1s"  + "</span>"; // x = animation-duration: + input value값 
   var y="#demoDIV {<br>    ###CSSPROP###;<br>}<br>"; // y = #demoDIV {<br>    ###CSSPROP###;<br>}<br>
   var z=y.replace("###CSSPROP###",x); // z= ###CSSPROP### 부분을 x로 교체한다   

    document.getElementById("CSSCode").innerHTML = z; //CSSCode = z
}

function cssbut2(){
   document.getElementById("propertyTitle").innerHTML = "animation-iteration-count:";
   document.getElementById("label1").innerHTML = "1";
   document.getElementById("value_1").setAttribute("value", "1");
   document.getElementById("label2").innerHTML = "2";
   document.getElementById("value_2").setAttribute("value", "2");
   document.getElementById("label3").innerHTML = "3";
   document.getElementById("value_3").setAttribute("value", "3");
   document.getElementById("label4").innerHTML = "4";
   document.getElementById("value_4").setAttribute("value", "4");
   document.getElementById("label5").innerHTML = "infinite";
   document.getElementById("value_5").setAttribute("value", "infinite");
   document.getElementById("propertyName").innerHTML = "animationIterationCount";
   document.getElementById("enlargeJSValue").innerHTML = "1";
   
    var x =  document.getElementById("resultView");  
    var y=document.getElementById("resultDIV").cloneNode(true); 
    var cc;
    x.removeChild(document.getElementById("resultDIV")); 
    x.appendChild(y);  
   
   document.getElementById("demoDIV").style.animation = "demomove2 2s infinite";
   document.getElementById("demoDIV").style.animationIterationCount = "1";
   document.getElementsByTagName("input")[1].checked=true;
   
   var pName = document.getElementById("propertyTitle").innerHTML; 
   var x = pName + "<span id='enlargeCSSProp'>" + "1"  + "</span>"; 
   var y="#demoDIV {<br>    ###CSSPROP###;<br>}<br>"; 
   var z=y.replace("###CSSPROP###",x);

    document.getElementById("CSSCode").innerHTML = z; //CSSCode = z
}

function cssbut3(){
   document.getElementById("propertyTitle").innerHTML = "animation-timing-function:";
   document.getElementById("label1").innerHTML = "linear";
   document.getElementById("value_1").setAttribute("value", "linear");
   document.getElementById("label2").innerHTML = "ease";
   document.getElementById("value_2").setAttribute("value", "ease");
   document.getElementById("label3").innerHTML = "ease-in";
   document.getElementById("value_3").setAttribute("value", "ease-in");
   document.getElementById("label4").innerHTML = "ease-out";
   document.getElementById("value_4").setAttribute("value", "ease-out");
   document.getElementById("label5").innerHTML = "ease-in-out";
   document.getElementById("value_5").setAttribute("value", "ease-in-out");
   document.getElementById("propertyName").innerHTML = "animationTimingFunction";
   document.getElementById("enlargeJSValue").innerHTML = "linear";
   
    var x =  document.getElementById("resultView");  // x = resultView div 
    var y=document.getElementById("resultDIV").cloneNode(true); //y = resultDIV 노드 복사
    var cc;
    x.removeChild(document.getElementById("resultDIV")); //resultView div의 자식노드를 지운다. 
    x.appendChild(y);  //resultView div의 자식노드를 추가한다. 
   
   document.getElementById("demoDIV").style.animation = "demomove2 2s infinite";
   document.getElementById("demoDIV").style.animationIterationCount = "linear";
   document.getElementsByTagName("input")[1].checked=true;
   
   var pName = document.getElementById("propertyTitle").innerHTML; 
   var x = pName + "<span id='enlargeCSSProp'>" + "linear"  + "</span>"; 
   var y="#demoDIV {<br>    ###CSSPROP###;<br>}<br>"; 
   var z=y.replace("###CSSPROP###",x); 

    document.getElementById("CSSCode").innerHTML = z; //CSSCode = z
}


if (!String.prototype.trim) {
   String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
}   