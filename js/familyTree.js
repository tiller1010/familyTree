var familyCount=[];
var generation1Count=[];
var generation2Count=[];
var generation3Count=[];

function person(name,gender,parenthood,generation){
    this.name=name;
    this.gender=gender;
    this.parenthood=parenthood;
    this.generation=generation;
    familyCount.push(this);
    switch(generation){
        case '1':
            generation1Count.push(this);
            break;
        case '2':
            generation2Count.push(this);
            break;
        case '3':
            generation3Count.push(this);
            break;
    }
}

// let suzy = new person("Suzy","female","Mother");
// suzy.constructor=familyMember;

let findFathers=function(){
    let fathers=[];
    let regEx=/Father/i;
    for(i=0;i<familyCount.length;i++){
        if(regEx.test(familyCount[i].parenthood)){
            fathers.push(familyCount[i].name+'<br/>');
        }
    }
        document.getElementById("dadCount").innerHTML=fathers;
};

let findMothers=function(){
    let mothers=[];
    let regEx=/Mother/i;
    for(i=0;i<familyCount.length;i++){
        if(regEx.test(familyCount[i].parenthood)){
            mothers.push(familyCount[i].name+'<br/>');
        }
    }
    	document.getElementById("momCount").innerHTML=mothers;

};

window.onload=function(){

    function updateParents(){
        const gen1Parents1=document.getElementById('2childOf1');
        const gen1Parents2=document.getElementById('2childOf2');
        const gen2Parents1=document.getElementById('3childOf1');
        const gen2Parents2=document.getElementById('3childOf2');
        for(i=0;i<generation1Count.length;i++){
            let option=document.createElement('option');
            let parent=document.createTextNode(generation1Count[i].name);
            option.appendChild(parent);
            gen1Parents1.appendChild(option);
            gen1Parents2.appendChild(option.cloneNode(true));
        }
        for(i=0;i<generation2Count.length;i++){
            let option=document.createElement('option');
            let parent=document.createTextNode(generation2Count[i].name);
            option.appendChild(parent);
            gen2Parents1.appendChild(option);
            gen2Parents2.appendChild(option.cloneNode(true));
        }
    }

    $(function(){
        $(".personBox").click(function(){
            $(this).children().slideToggle(300);
        });
    });

    $(function(){
        $(".addPerson").click(function(){
            $(this).next().toggle();
        });
    });

    const spouseCheck1=document.getElementById('spouseCheck1');
    const spouseWindow1=document.getElementById('spouseCreate1');
    const spouseCheck2=document.getElementById('spouseCheck2');
    const spouseWindow2=document.getElementById('spouseCreate2');
    const spouseCheck3=document.getElementById('spouseCheck3');
    const spouseWindow3=document.getElementById('spouseCreate3');
    spouseCheck1.addEventListener('change',function(){
        if(this.checked){
            spouseWindow1.style.display='block';
        }
        else{
            spouseWindow1.style.display='none';
        }
    });
    spouseCheck2.addEventListener('change',function(){
        if(this.checked){
            spouseWindow2.style.display='block';
        }
        else{
            spouseWindow2.style.display='none';
        }
    });
    spouseCheck3.addEventListener('change',function(){
        if(this.checked){
            spouseWindow3.style.display='block';
        }
        else{
            spouseWindow3.style.display='none';
        }
    });

	let momButton = document.getElementById("momBtn");
	momButton.addEventListener("click",findMothers,false);

    let dadButton = document.getElementById("dadBtn");
    dadButton.addEventListener("click",findFathers,false);

    let gen1CreateButton = document.getElementById("create1");
    let gen2CreateButton = document.getElementById("create2");
    let gen3CreateButton = document.getElementById("create3");

    let personCreator=function(generation){
        let name1=document.getElementById(generation+"nameBox1").value;
        let gender1=document.getElementById(generation+"genderBox1").value;
        let parenthood1=document.getElementById(generation+"parentBox1").value;
        let image1=document.getElementById(generation+"imageBox1").value;
        let newPerson=new person(name1,gender1,parenthood1,generation);
        var newFrame=$("<td class='personBox' style='background-image:url("+image1+");'><div class='description'>This is "+newPerson.name+"</div></td>").on('click',function(){
            $(this).children().slideToggle(300);
        });

        let spouseCheck=document.getElementById("spouseCheck"+generation);
        if(spouseCheck.checked){ 
            let name2=document.getElementById(generation+"nameBox2").value;
            let gender2=document.getElementById(generation+"genderBox2").value;
            let parenthood2=document.getElementById(generation+"parentBox2").value;
            let image2=document.getElementById(generation+"imageBox2").value;
            let newSpouse=new person(name2,gender2,parenthood2,generation);
            var spouseFrame=$("<td class='personBox' style='background-image:url("+image2+");'><div class='description'>This is "+newSpouse.name+"</div></td>").on('click',function(){
                $(this).children().slideToggle(300);
            });
        }
        
        $("#creation"+generation).before(newFrame);
        if(spouseCheck.checked){
            $("#creation"+generation).before(spouseFrame);
        }
        document.getElementById(generation+"nameBox1").value='';
        document.getElementById(generation+"genderBox1").value='';
        document.getElementById(generation+"parentBox1").value='';
        document.getElementById(generation+"imageBox1").value='';
        document.getElementById(generation+"nameBox2").value='';
        document.getElementById(generation+"genderBox2").value='';
        document.getElementById(generation+"parentBox2").value='';
        document.getElementById(generation+"imageBox2").value='';

        updateParents();
    }

    gen1CreateButton.addEventListener("click",function(){
        personCreator("1");
    });
    gen2CreateButton.addEventListener("click",function(){
        personCreator("2");
    });
    gen3CreateButton.addEventListener("click",function(){
        personCreator("3");
    });

 //    for(i=0;i<familyCount.length;i++){
	//     let canvas = document.getElementById('lines'+i);
	// 	let ctx = canvas.getContext('2d');
	// 	ctx.beginPath();
	// 	ctx.moveTo(90,0);
	// 	ctx.lineTo(90,70);
	// 	if(familyCount[i].relation==='Mother'){
	// 		ctx.lineTo(250,70);
	// 		ctx.stroke();
	// 		console.log(familyCount[i]);
	// 	}
	// 	if(familyCount[i].relation==='Father'){
	// 		ctx.lineTo(0,70);
	// 		ctx.stroke();
	// 		console.log(familyCount[i]);
	// 	}
	// }
}

