let familyCount=[];

function person(name,gender,relation){
    this.name=name;
    this.gender=gender;
    this.relation=relation;
    familyCount.push(this);
}
person.prototype.sayName=function(){
    //console.log(this.name);
};

function familyMember(){}
familyMember.prototype=Object.create(person.prototype);

let suzy = new person("Suzy","female","Mother");
suzy.constructor=familyMember;

let meghan = new person("Meghan","female","Mother");
meghan.constructor=familyMember;

let dave = new person("Dave","male","Father");
dave.constructor=familyMember;

let findFathers=function(){
    let fathers=[];
    let regEx=/Father/i;
    for(i=0;i<familyCount.length;i++){
        if(regEx.test(familyCount[i].relation)){
            fathers.push(familyCount[i].name);
        }
    }
        document.getElementById("dadCount").innerHTML=fathers;
};

let findMothers=function(){
    let mothers=[];
    let regEx=/Mother/i;
    for(i=0;i<familyCount.length;i++){
        if(regEx.test(familyCount[i].relation)){
            mothers.push(familyCount[i].name);
        }
    }
    	document.getElementById("momCount").innerHTML=mothers;

};

window.onload=function(){
	let momButton = document.getElementById("momBtn");
	momButton.addEventListener("click",findMothers,false);
    let dadButton = document.getElementById("dadBtn");
    dadButton.addEventListener("click",findFathers,false);
    let createButton = document.getElementById("create");
    createButton.addEventListener("click",function(){
        new person(document.getElementById("nameBox").value,document.getElementById("genderBox").value,document.getElementById("relationBox").value);
        document.getElementById("nameBox").value='';
        document.getElementById("genderBox").value='';
        document.getElementById("relationBox").value='';
        $("#generation3").append("<div class='personBox' style='background-image:url("+document.getElementById("imageBox").value+");'</div>");
        document.getElementById("imageBox").value='';
    },false);
}