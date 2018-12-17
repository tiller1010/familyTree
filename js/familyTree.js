var familyCount=[];

function person(name,gender,parenthood,spouse){
    this.name=name;
    this.gender=gender;
    this.parenthood=parenthood;
    this.spouse=spouse;
    familyCount.push(this);
}

// let suzy = new person("Suzy","female","Mother");
// suzy.constructor=familyMember;

let findFathers=function(){
    let fathers=[];
    let regEx=/Father/i;
    for(i=0;i<familyCount.length;i++){
        if(regEx.test(familyCount[i].parenthood)){
            fathers.push(familyCount[i].name);
        }
    }
        document.getElementById("dadCount").innerHTML=fathers;
};

let findMothers=function(){
    let mothers=[];
    let regEx=/Mother/i;
    for(i=0;i<familyCount.length;i++){
        if(regEx.test(familyCount[i].parenthood)){
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

    $(function(){
        $(".addPerson").click(function(){
            $("#createPerson").toggle();
        });
    });

    const spouseCheck=document.getElementById('spouseCheck');
    const spouseWindow=document.getElementById('spouseCreate');
    spouseCheck.addEventListener('change',function(){
        if(this.checked){
            spouseWindow.style.display='block';
        }
        else{
            spouseWindow.style.display='none';
        }
    });

	let momButton = document.getElementById("momBtn");
	momButton.addEventListener("click",findMothers,false);

    let dadButton = document.getElementById("dadBtn");
    dadButton.addEventListener("click",findFathers,false);

    let createButton = document.getElementById("create");
    createButton.addEventListener("click",function(){
        let name1=document.getElementById("nameBox1").value;
        let gender1=document.getElementById("genderBox1").value;
        let parenthood1=document.getElementById("parentBox1").value;
        let image1=document.getElementById("imageBox1").value;
        let newPerson=new person(name1,gender1,parenthood1);
        var newFrame=$("<td class='personBox' style='background-image:url("+image1+");'><div class='description'>This is "+newPerson.name+"</div></td>").on('click',function(){
            $(this).children().slideToggle(300);
        });

        if(spouseCheck.checked){ 
            let name2=document.getElementById("nameBox2").value;
            let gender2=document.getElementById("genderBox2").value;
            let parenthood2=document.getElementById("parentBox2").value;
            let image2=document.getElementById("imageBox2").value;
            let newSpouse=new person(name2,gender2,parenthood2);
            var spouseFrame=$("<td class='personBox' style='background-image:url("+image2+");'><div class='description'>This is "+newSpouse.name+"</div></td>").on('click',function(){
                $(this).children().slideToggle(300);
            });
        }
        
        $("#creation1").before(newFrame);
        if(spouseCheck.checked){
            $("#creation1").before(spouseFrame);
        }
        document.getElementById("nameBox1").value='';
        document.getElementById("genderBox1").value='';
        document.getElementById("parentBox1").value='';
        document.getElementById("imageBox1").value='';
        document.getElementById("nameBox2").value='';
        document.getElementById("genderBox2").value='';
        document.getElementById("parentBox2").value='';
        document.getElementById("imageBox2").value='';
    },false);

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

