function createlabel(tagname,attributename,attributevalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attributename,attributevalue);
    ele.innerHTML=content;
    return ele;
}
function inputele(tagname,attributename,attributevalue,attributename1,attributevalue1){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attributename,attributevalue);
    ele1.setAttribute(attributename1,attributevalue1);
    return ele1;

}
function br(tagname){
    var brele=document.createElement(tagname);
    return brele;
}

function button(tagname,attributename,attributevalue,content){
    var butt=document.createElement(tagname);
    butt.setAttribute(attributename,attributevalue)
    butt.innerHTML=content;
    return butt;
}
var fnamelabel=createlabel("label","for","fstname","FirstName:");
var br1=br("br");
var fnameinput=inputele("input","type","text","id","fstname");
var br2=br("br");

var mnamelabel=createlabel("label","for","fstname","MiddleName:");
var br3=br("br");
var mnameinput=inputele("input","type","text","id","fstname");
var br4=br("br");

var lnamelabel=createlabel("label","for","fstname","LastName:");
var br5=br("br");
var lnameinput=inputele("input","type","text","id","fstname");
var br6=br("br");

var emaillabel=createlabel("label","for","email","Email:");
var br7=br("br");
var emailinput=inputele("input","type","email","id","email");
var br8=br("br");

var pincodelabel=createlabel("label","for","code","Pincode:");
var br9=br("br");
var pincodeinput=inputele("input","type","number","id","code");
var br10=br("br");
var br11=br("br")

var submit=button("button","type","button","Submit");

document.body.append(fnamelabel,br1,fnameinput,br2,mnamelabel,br3,mnameinput,br4,lnamelabel,br5,lnameinput,br6,emaillabel,br7,emailinput,br8,pincodelabel,br9,pincodeinput,br10,br11,submit)



