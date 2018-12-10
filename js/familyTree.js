let familyCount=[];
let familyID=2;

function person(name,gender,relation,spouse){
    this.name=name;
    this.gender=gender;
    this.relation=relation;
    this.spouse=spouse;
    familyCount.push(this);
}

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

    $(function(){
        $(".personBox").click(function(){
            $(this).children().slideToggle(300);
        });
    });

	let momButton = document.getElementById("momBtn");
	momButton.addEventListener("click",findMothers,false);

    let dadButton = document.getElementById("dadBtn");
    dadButton.addEventListener("click",findFathers,false);

    let createButton = document.getElementById("create");
    createButton.addEventListener("click",function(){
        familyID+=1;
        new person(document.getElementById("nameBox").value,document.getElementById("genderBox").value,document.getElementById("relationBox").value);
        document.getElementById("nameBox").value='';
        document.getElementById("genderBox").value='';
        document.getElementById("relationBox").value='';
        let newPerson=$("<div class='personBox' style='background-image:url("+document.getElementById("imageBox").value+");'><div class='description'>This is "+familyCount[familyID].name+"</div></div>").on('click',function(){
            $(this).children().slideToggle(300);
        });
        $("#generation3").append(newPerson);
        document.getElementById("imageBox").value='';
    },false);

    for(i=0;i<familyCount.length;i++){
	    let canvas = document.getElementById('lines'+i);
		let ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(90,0);
		ctx.lineTo(90,70);
		if(familyCount[i].relation==='Mother'){
			ctx.lineTo(250,70);
			ctx.stroke();
			console.log(familyCount[i]);
		}
		if(familyCount[i].relation==='Father'){
			ctx.lineTo(0,70);
			ctx.stroke();
			console.log(familyCount[i]);
		}
	}
}

