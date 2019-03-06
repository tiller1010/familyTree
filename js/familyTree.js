var familyCount=[];
var generation1Count=[];
var generation2Count=[];
var generation3Count=[];
var motherslisted=[];
var fatherslisted=[];
var gen2listedParents=[];
var gen3listedParents=[];

function person(name,gender,parenthood,generation,childOf){
    this.name=name;
    this.gender=gender;
    this.parenthood=parenthood;
    this.generation=generation;
    this.childOf=childOf;
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

let findFathers=function(){
    let fathers=[];
    let regEx=/Father/i;
    for(i=0;i<familyCount.length;i++){
        if(regEx.test(familyCount[i].parenthood)){
            fathers.push(familyCount[i].name);
        }
    }
    for(i=0;i<fathers.length;i++){
        if(fathers[i]!=fatherslisted[i]){
            document.getElementById("dadCount").innerHTML+=fathers[i]+'<br/>';
            fatherslisted.push(fathers[i]);
        }
    }
};

let findMothers=function(){
    let mothers=[];
    let regEx=/Mother/i;
    for(i=0;i<familyCount.length;i++){
        if(regEx.test(familyCount[i].parenthood)){
            mothers.push(familyCount[i].name);
        }
    }
    for(i=0;i<mothers.length;i++){
        if(mothers[i]!=motherslisted[i]){
            document.getElementById("momCount").innerHTML+=mothers[i]+'<br/>';
            motherslisted.push(mothers[i]);
        }
    }
};

window.onload=function(){

    //Updates options to select parents
    function updateParents(){
        const gen1Parents1=document.getElementById('2childOf1');
        const gen1Parents2=document.getElementById('2childOf2');
        const gen2Parents1=document.getElementById('3childOf1');
        const gen2Parents2=document.getElementById('3childOf2');
        for(i=0;i<generation1Count.length;i++){
            if(generation1Count[i]!=gen2listedParents[i]){
                let option=document.createElement('option');
                let parent=document.createTextNode(generation1Count[i].name);
                option.appendChild(parent);
                gen1Parents1.appendChild(option);
                gen1Parents2.appendChild(option.cloneNode(true));
                gen2listedParents.push(generation1Count[i]);
            }
        }
        for(i=0;i<generation2Count.length;i++){
            if(generation2Count[i]!=gen3listedParents[i]){
                let option=document.createElement('option');
                let parent=document.createTextNode(generation2Count[i].name);
                option.appendChild(parent);
                gen2Parents1.appendChild(option);
                gen2Parents2.appendChild(option.cloneNode(true));
                gen3listedParents.push(generation2Count[i]);
            }
        }
    }


    //canvas context and functions defined
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function clearCanvas(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function drawLines(startX, startY, endX, endY){
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    //Adds description animation, hide headers if any descriptions exist, and draw lines
    function slideAndHide(person){
        let personID=$('#'+person.name);
        personID.children().slideToggle(300);
        let descriptions=$('.description');
        setTimeout(function(){
            for(i=0; i<descriptions.length; i++){
                if(descriptions[i].style.display==='block'){
                    $('.tableHeader').css('visibility', 'hidden');
                    return;
                }
            }
            //Show headers if all descriptions are closed
            $('.tableHeader').css('visibility', 'visible');
        },400);

        //Draw lines to parent
        let offset=personID.offset();
        setTimeout(function(){
            if($('#'+personID[0].id + ' > .description').css('display')==='block'){
                drawLines(offset.left+55, offset.top-100, offset.left+55, offset.top-190);
            }
            else{
                clearCanvas();
                $('.description').css('display','none');
                $('.tableHeader').css('visibility', 'visible');
            }
        },400);
    }

    //Adds ability to toggle creation table
    $(function(){
        $(".addPerson").click(function(){
            $(this).next().toggle();
        });
    });

    //Checks for spouse checkmark
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

    //Define all radio buttons and input options
    const imageRadio1_1 = document.getElementById('1imageRadio1');
    const uploadRadio1_1 = document.getElementById('1uploadRadio1');
    const urlRadio1_1 = document.getElementById('1urlRadio1');
    const uploadImageBox1_1 = document.getElementById('1uploadImageBox1');
    const imageBox1_1 = document.getElementById('1imageBox1');

    const imageRadio1_2 = document.getElementById('1imageRadio2');
    const uploadRadio1_2 = document.getElementById('1uploadRadio2');
    const urlRadio1_2 = document.getElementById('1urlRadio2');
    const uploadImageBox1_2 = document.getElementById('1uploadImageBox2');
    const imageBox1_2 = document.getElementById('1imageBox2');

    const imageRadio2_1 = document.getElementById('2imageRadio1');
    const uploadRadio2_1 = document.getElementById('2uploadRadio1');
    const urlRadio2_1 = document.getElementById('2urlRadio1');
    const uploadImageBox2_1 = document.getElementById('2uploadImageBox1');
    const imageBox2_1 = document.getElementById('2imageBox1');

    const imageRadio2_2 = document.getElementById('2imageRadio2');
    const uploadRadio2_2 = document.getElementById('2uploadRadio2');
    const urlRadio2_2 = document.getElementById('2urlRadio2');
    const uploadImageBox2_2 = document.getElementById('2uploadImageBox2');
    const imageBox2_2 = document.getElementById('2imageBox2');

    const imageRadio3_1 = document.getElementById('3imageRadio1');
    const uploadRadio3_1 = document.getElementById('3uploadRadio1');
    const urlRadio3_1 = document.getElementById('3urlRadio1');
    const uploadImageBox3_1 = document.getElementById('3uploadImageBox1');
    const imageBox3_1 = document.getElementById('3imageBox1');

    const imageRadio3_2 = document.getElementById('3imageRadio2');
    const uploadRadio3_2 = document.getElementById('3uploadRadio2');
    const urlRadio3_2 = document.getElementById('3urlRadio2');
    const uploadImageBox3_2 = document.getElementById('3uploadImageBox2');
    const imageBox3_2 = document.getElementById('3imageBox2');


    //Show or hide upload options
    imageRadio1_1.addEventListener('change',function(){
    	if(uploadRadio1_1.checked){
    		uploadImageBox1_1.style.visibility='visible';
    		imageBox1_1.style.visibility='hidden';
    	}
    	if(urlRadio1_1.checked){
    		imageBox1_1.style.visibility='visible';
    		uploadImageBox1_1.style.visibility='hidden';
    	}
    })

    imageRadio1_2.addEventListener('change',function(){
    	if(uploadRadio1_2.checked){
    		uploadImageBox1_2.style.visibility='visible';
    		imageBox1_2.style.visibility='hidden';
    	}
    	if(urlRadio1_2.checked){
    		imageBox1_2.style.visibility='visible';
    		uploadImageBox1_2.style.visibility='hidden';
    	}
    })
    
    imageRadio2_1.addEventListener('change',function(){
    	if(uploadRadio2_1.checked){
    		uploadImageBox2_1.style.visibility='visible';
    		imageBox2_1.style.visibility='hidden';
    	}
    	if(urlRadio2_1.checked){
    		imageBox2_1.style.visibility='visible';
    		uploadImageBox2_1.style.visibility='hidden';
    	}
    })

    imageRadio2_2.addEventListener('change',function(){
    	if(uploadRadio2_2.checked){
    		uploadImageBox2_2.style.visibility='visible';
    		imageBox2_2.style.visibility='hidden';
    	}
    	if(urlRadio2_2.checked){
    		imageBox2_2.style.visibility='visible';
    		uploadImageBox2_2.style.visibility='hidden';
    	}
    })

    imageRadio3_1.addEventListener('change',function(){
    	if(uploadRadio3_1.checked){
    		uploadImageBox3_1.style.visibility='visible';
    		imageBox3_1.style.visibility='hidden';
    	}
    	if(urlRadio3_1.checked){
    		imageBox3_1.style.visibility='visible';
    		uploadImageBox3_1.style.visibility='hidden';
    	}
    })

    imageRadio3_2.addEventListener('change',function(){
    	if(uploadRadio3_2.checked){
    		uploadImageBox3_2.style.visibility='visible';
    		imageBox3_2.style.visibility='hidden';
    	}
    	if(urlRadio3_2.checked){
    		imageBox3_2.style.visibility='visible';
    		uploadImageBox3_2.style.visibility='hidden';
    	}
    })

    // File reader to read user uploaded images on type: file and event listeners
	reader1_1 = new FileReader();
	reader1_2 = new FileReader();
	reader2_1 = new FileReader();
	reader2_2 = new FileReader();
	reader3_1 = new FileReader();
	reader3_2 = new FileReader();

	uploadImageBox1_1.addEventListener('change',function() {
		if(this.files[0]){
	  		reader1_1.readAsDataURL(this.files[0]);
	  	}
	})
	uploadImageBox1_2.addEventListener('change',function() {
		if(this.files[0]){
	  		reader1_2.readAsDataURL(this.files[0]);
	  	}
	})
	uploadImageBox2_1.addEventListener('change',function() {
		if(this.files[0]){
	  		reader2_1.readAsDataURL(this.files[0]);
	  	}
	})
	uploadImageBox2_2.addEventListener('change',function() {
		if(this.files[0]){
	  		reader2_2.readAsDataURL(this.files[0]);
	  	}
	})
	uploadImageBox3_1.addEventListener('change',function() {
		if(this.files[0]){
	  		reader3_1.readAsDataURL(this.files[0]);
	  	}
	})
	uploadImageBox3_2.addEventListener('change',function() {
		if(this.files[0]){
	  		reader3_2.readAsDataURL(this.files[0]);
	  	}
	})

	

    //Event listeners for mothers and fathers
	let momButton = document.getElementById("momBtn");
	momButton.addEventListener("click",findMothers,false);

    let dadButton = document.getElementById("dadBtn");
    dadButton.addEventListener("click",findFathers,false);


    //Creating a new person(s) and adding event listeners
    let gen1CreateButton = document.getElementById("create1");
    let gen2CreateButton = document.getElementById("create2");
    let gen3CreateButton = document.getElementById("create3");

    let personCreator=function(generation){
        let name1=document.getElementById(generation+"nameBox1").value;
        let gender1=document.getElementById(generation+"genderBox1").value;
        let parenthood1=document.getElementById(generation+"parentBox1").value;
        let image1='';

        //Read image from URL or uploaded file
        if(document.getElementById(generation+'uploadRadio1').checked){
        	image1=eval('reader'+generation+'_1').result;
        }
        if(document.getElementById(generation+'urlRadio1').checked){
        	image1=document.getElementById(generation+"imageBox1").value;
        }

        try{
            if(!document.getElementById(generation+"childOf1")) throw "No parent";
            var childOf1=document.getElementById(generation+"childOf1").value;
        }
        catch(error){
            var childOf1=error;
        }
        let newPerson=new person(name1,gender1,parenthood1,generation,childOf1);
        let childOfDescription1=newPerson.childOf=="No parent"?"":"<br/>Child of "+newPerson.childOf;
        var newFrame=$("<td id='"+newPerson.name+"' class='personBox' style='background-image:url("+image1+"); background-size: 100px 100px;'><div class='description'>This is "+newPerson.name+"<br/>"+newPerson.gender+childOfDescription1+"</div></td>").on('click',function(){slideAndHide(newPerson)});

        let spouseCheck=document.getElementById("spouseCheck"+generation);
        if(spouseCheck.checked){ 
            let name2=document.getElementById(generation+"nameBox2").value;
            let gender2=document.getElementById(generation+"genderBox2").value;
            let parenthood2=document.getElementById(generation+"parentBox2").value;
            let image2='';

	        //Read image from URL or uploaded file for spouse
	        if(document.getElementById(generation+'uploadRadio2').checked){
	        	image2=eval('reader'+generation+'_2').result;
	        }
	        if(document.getElementById(generation+'urlRadio2').checked){
	        	image2=document.getElementById(generation+"imageBox2").value;
       		}

            try{
                if(!document.getElementById(generation+"childOf2")) throw "No parent";
                var childOf2=document.getElementById(generation+"childOf2").value;
            }
            catch(error){
                var childOf2=error;
            }
            let newSpouse=new person(name2,gender2,parenthood2,generation,childOf2);
            let childOfDescription2=newSpouse.childOf=="No parent"?"":"<br/>Child of "+newSpouse.childOf;
            var spouseFrame=$("<td id='"+newSpouse.name+"' class='personBox' style='background-image:url("+image2+"); background-size: 100px 100px;'><div class='description'>This is "+newSpouse.name+"<br/>"+newSpouse.gender+childOfDescription2+"</div></td>").on('click',function(){slideAndHide(newSpouse)});
        }
        

        //Clear file readers
    	document.getElementById(generation+'uploadImageBox1').value='';
    	document.getElementById(generation+'uploadImageBox2').value='';
    	eval('reader'+generation+'_1 = new FileReader()');
    	eval('reader'+generation+'_2 = new FileReader()');

        //Append the frames to the document
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
}

