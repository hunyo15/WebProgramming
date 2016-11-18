// Code goes here


function setup() {
    var preval="" //��������
       preval=document.getElementById("preselectedValue").value; //value = 1s 
        if (preval!="")  {  //preval ������ �ƴϸ� 
            restartDemo(preval)
            var x=document.getElementsByTagName("input") //x = input�±�
            var l=x.length  //l = input�±� ���� 
            for (i=0;i<l;i++) {  //input �±� ���̸�ŭ �ݺ�
                if (x[i].value==preval)  { // x[i] value �� preval�ϰ� ������ 
                        x[i].checked=true // x[i]�� üũ�Ѵ� 
                }
            }
            document.getElementById("rootContainer").style.display="block";
        }
}
/**
 * [getPropertyValue: retrieves the selected value and call restartDemo function]
 * @param  {[Object]} obj [DOM object that user selects]
 */
function getPropertyValue(obj) { //obj�� input �ڱ��ڽ� this
    restartDemo(obj.value); //input �� value �� ex)1s , 2s , 5s, 10s, 500ms
}

/**
 * [restartDemo description]
 * @param  {[string]} value [value that user selects]
 */
 
function restartDemo(value) { //value = obj.value �� input value��
 
    document.getElementById("demoDIV").className = "my" + value; //���� demodiv ������ Ŭ���� ���� ���� ex)my2s
    var x =  document.getElementById("resultView");  // x = resultView div 
    var y=document.getElementById("resultDIV").cloneNode(true); //y = resultDIV ��� ����
     var cc;
    x.removeChild(document.getElementById("resultDIV")); //resultView div�� �ڽĳ�带 �����. 
    x.appendChild(y);  //resultView div�� �ڽĳ�带 �߰��Ѵ�. 
    
    document.getElementById("demoDIV").style.animationDuration = value; //animationDuration �� ���� 
    document.getElementById("demoDIV").style.animationIterationCount = value; //animationIterationCount �� ���� 
    document.getElementById("demoDIV").style.animationTimingFunction = value; //animationTimingFunction  �� ���� 
    
    var pName = document.getElementById("propertyTitle").innerHTML; //propertyTitle �� animation-duration: 
    var x = pName + "<span id='enlargeCSSProp'>" + value  + "</span>"; // x = animation-duration: + input value�� 
    var y="#demoDIV {<br>    ###CSSPROP###;<br>}<br>"; // y = #demoDIV {<br>    ###CSSPROP###;<br>}<br>
    var z=y.replace("###CSSPROP###",x); // z= ###CSSPROP### �κ��� x�� ��ü�Ѵ�   

    document.getElementById("CSSCode").innerHTML = z; //CSSCode = z 

    document.getElementById("enlargeJSValue").innerHTML = value; //JavaScript Code: value ����
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
    var y=document.getElementById("resultDIV").cloneNode(true); //y = resultDIV ��� ����
    var cc;
    x.removeChild(document.getElementById("resultDIV")); //resultView div�� �ڽĳ�带 �����. 
    x.appendChild(y);  //resultView div�� �ڽĳ�带 �߰��Ѵ�. 
   
   document.getElementById("demoDIV").style.animation = "demomove infinite";
   document.getElementById("demoDIV").style.animationDuration = "1s";
   document.getElementsByTagName("input")[1].checked=true;
   
   var pName = document.getElementById("propertyTitle").innerHTML; //propertyTitle �� animation-duration: 
   var x = pName + "<span id='enlargeCSSProp'>" + "1s"  + "</span>"; // x = animation-duration: + input value�� 
   var y="#demoDIV {<br>    ###CSSPROP###;<br>}<br>"; // y = #demoDIV {<br>    ###CSSPROP###;<br>}<br>
   var z=y.replace("###CSSPROP###",x); // z= ###CSSPROP### �κ��� x�� ��ü�Ѵ�   

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
    var y=document.getElementById("resultDIV").cloneNode(true); //y = resultDIV ��� ����
    var cc;
    x.removeChild(document.getElementById("resultDIV")); //resultView div�� �ڽĳ�带 �����. 
    x.appendChild(y);  //resultView div�� �ڽĳ�带 �߰��Ѵ�. 
   
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