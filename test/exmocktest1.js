const data = [
    {
        id:"1",
        question:"TO place the image into a HTML file ...... attribute is used in IMG tag",
        option1:"URL",
        option2:"ALT",
        option3:"SRC",
        option4:"HREF",
        ansid:"3"
    }
    ,{
        id:"2",
        question:"The elements of a record are.......",
        option1:"Homogeneous",
        option2:"Similar",
        option3:"Non-Homogeneous",
        option4:"Identical",
        ansid:"3"
    },
    {
        id:"3",
        question:"Windows NT is ....... operating system.",
        option1:"Multiuser",
        option2:"Multitasking",
        option3:"Multithreading",
        option4:"All of the above",
        ansid:"4"
    },
    {
        id:"4",
        question:"The ability to take more than one form is called ...... in object oriented programming.",
        option1:"Inheritance",
        option2:"Encapsulation",
        option3:"Polymorphism",
        option4:"Data abstraction",
        ansid:"3"
    },{
        id:"5",
        question:"Is not a operating system ?",
        option1:"UNIX",
        option2:"LINUX",
        option3:"MS-DOS",
        option4:"C++",
        ansid:"4"
    },{
        id:"6",
        question:"The most efficient search algorithm.",
        option1:"Binary search",
        option2:"Reverse search",
        option3:"Linear search",
        option4:"Pointer search",
        ansid:"1"
    },{
        id:"7",
        question:"VBScript can be executed in ..... web browser",
        option1:"Netscape navigator",
        option2:"Internet explorer",
        option3:"Both",
        option4:"None of these",
        ansid:"4"
    },{
        id:"8",
        question:"Bulleted list in HTML is created by ..... tag.",
        option1:"<UL>",
        option2:"<OL>",
        option3:"<B>",
        option4:"<Br>",
        ansid:"1"
    },{
        id:"9",
        question:"..... is very useful in situation when data is to be stored and retrieved in reverse order.",
        option1:"Stack",
        option2:"Queue",
        option3:"Linked List",
        option4:"Tree",
        ansid:"1"
    },{
        id:"10",
        question:"What will be the value of x after execution of following expression in c++? X= ++m+n+ +; where m=10 and n=15.",
        option1:"25",
        option2:"27",
        option3:"26",
        option4:"28",
        ansid:"3"
    },{
        id:"11",
        question:"...... is free softwear  (2019)",
        option1:"UNIX",
        option2:"WINDOWS",
        option3:"LINUX",
        option4:"DOS",
        ansid:"3"
    },{
        id:"12",
        question:"Turning attentions of CPU from one processor to another is called as ........",
        option1:"Reference",
        option2:"Context Switching",
        option3:"process Scheduling",
        option4:"Multithreading",
        ansid:"2"
    },{
        id:"13",
        question:"If lower bound = 0 and upperbound = 15 then midterm is ..... in binary search method.",
        option1:"6",
        option2:"7",
        option3:"8",
        option4:"9",
        ansid:"3"
    },{
        id:"14",
        question:"..... system is used to declare destructor function in c++.",
        option1:"@",
        option2:"#",
        option3:"~",
        option4:"!",
        ansid:"3"
    },{
        id:"15",
        question:".... tag is uses to write the defination list?",
        option1:"<ul>",
        option2:"<dl>",
        option3:"<ol>",
        option4:"<dl>",
        ansid:"2"
    },{
        id:"16",
        question:"Data items that are divided into subitems is called is ........ ",
        option1:"Group items",
        option2:"Elementary items",
        option3:"Nodes",
        option4:"Array",
        ansid:"1"
    },{
        id:"17",
        question:"Object is a .........",
        option1:"Variables",
        option2:"Data Types",
        option3:"Run time Entity",
        option4:"None of these",
        ansid:"3"
    },{
        id:"18",
        question:"In HTML for Red color , RGB code is .........",
        option1:"#000000",
        option2:"#ff0000",
        option3:"#00ff00",
        option4:"#0000ff",
        ansid:"3"
    },{
        id:"19",
        question:"...... is the only non-linear data structure from the following list .",
        option1:"Array",
        option2:"Linked list",
        option3:"Stack",
        option4:"Tree",
        ansid:"4"
    },{
        id:"20",
        question:"The attributes BORDER in <TABLE> tag has the default value of ........",
        option1:"2",
        option2:"1",
        option3:"0",
        option4:"None of These",
        ansid:"2"
    },{
        id:"21",
        question:"Ability take more than one form is called ......",
        option1:"Class",
        option2:"Polymorphism",
        option3:"Inheritance",
        option4:"Overloading",
        ansid:"2"
    },{
        id:"22",
        question:"...... are the operating system programs.",
        option1:"User Program",
        option2:"Anti-virus programs",
        option3:"Process Management programs",
        option4:"#00 00 ff",
        ansid:"3"
    },{
        id:"23",
        question:"If a complete binary tree (tn) has n =100 nodes , then its depth (dn) is .........",
        option1:"10",
        option2:"20",
        option3:"50",
        option4:"100",
        ansid:"1"
    },{
        id:"24",
        question:"The size of GIF format file is .......",
        option1:"Greater than BMP format file ",
        option2:"Less than BMF format file",
        option3:"Equal to BMF format file",
        option4:"Greater than JPEG file",
        ansid:"2"
    },{
        id:"25",
        question:"Context switching is the term related to ......... management.",
        option1:"Process",
        option2:"Memory",
        option3:"Information",
        option4:"Device",
        ansid:"1"
    }
];

const no = document.querySelector(".no");
const question = document.querySelector('.question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const ansid = document.getElementById('ansid');


const submit = document.querySelector('.submitbtn');
const submitexambtn = document.querySelector('.submitexambtn')
// console.log(submitexambtn)
// console.log(submit)




const popup = document.querySelector(".modalcontainer");
// console.log(screen.width)
if(screen.width < 600){
    // console.log("yess got it")
    popup.classList.add("demo");
    popup.classList.remove("modalcontainer");

}else{
    // console.log("no got it")
    popup.classList.add("modalcontainer");
    popup.classList.remove("demo");
}


const input = document.querySelectorAll(".input")

let mycurrentque = {};
let currenttime = 0 ;
// let mycurrentscore= {}
score = 0;
window.addEventListener("DOMContentLoaded",()=>{
    showquestion(currenttime);

})

 function disabledbutton(currentpara){
    console.log("cur value " + currentpara)
    if(Number.isNaN(currentpara)){
        currentpara = 0 ;  
    }
    let buttoncircle =  document.getElementById(currentpara-1) ;
     buttoncircle.disabled = true;
     console.log("dis")
     console.log(buttoncircle)
       console.log("button" + buttoncircle)
       console.log("current id " + currentpara)
}

function showquestion(currenttime){

    if(mycurrentque.currenttime > 25){
        mycurrentque.currenttime = 0;
    } 

//    console.log("question " + currenttime)
    const item = data[currenttime];
    no.textContent = item.id;
    question.textContent = item.question;
    option1.textContent = item.option1;
    option2.textContent = item.option2;
    option3.textContent = item.option3;
    option4.textContent = item.option4;
    ansid.textContent = item.ansid;
    
    document.getElementsByTagName("button")[0].tag = item.id;
    console.log(item.id)
    mycurrentque.currenttime = item.id;
    // console.log("question" +currenttime)
    // console.log(document.getElementsByTagName("button")[0].tag)
    // random(currenttime)
    deleselectall();
}

function fungetidofButton(id){ 
    showquestion(id)
}

    submit.addEventListener("click",()=>{

       
        // console.log("button")
       
        // console.log(mycurrentque.currenttime > 25)
        // console.log("after submit" + mycurrentque.currenttime);
        //  currenttime = 10
        colorcircle(mycurrentque.currenttime-1);
        getcheckanswer(mycurrentque.currenttime);

        disabledbutton(mycurrentque.currenttime);
        // currenttime++;
        deleselectall();
    
        // if(mycurrentque.currenttime >= data.length){
        //     popup();
        // }
        // else{
            // if(mycurrentque.currenttime > 25){
            //     mycurrentque.currenttime = 0;
            // }
            // console.log("updated " + mycurrentque.currenttime)
            showquestion(mycurrentque.currenttime);
        // }
     });


    submitexambtn.addEventListener("click",()=>{
        const modal = document.querySelector(".modal-overlay");
        modal.classList.add("open-modal")

        const marks = document.querySelector(".marks");
        const suggetion = document.querySelector(".suggetion");

        if(window.score == 25){
            suggetion.textContent = "Excellet score";
        }else if(window.score >= 10){
            suggetion.textContent = "good score";
        }else{
            suggetion.textContent = "bad score";
        }
        marks.textContent = window.score;
        // console.log(window.score == 0)
        
    });

function getcheckanswer(cur){
    let ans ;
    console.log("Question  :-"+cur)
    input.forEach((current)=>{
        if(current.checked){
            ans = current.id;
            // console.log("question " + current)
            
        }
    })
    // console.log("correct ans  " + data[cur-1].ansid)
    if(ans === data[cur-1].ansid){
       window.score++ ;
    //    console.log("your ans  " + ans)

        // console.log("your score  " + window.score)
     }
         console.log(cur)
       
    
};

 


const deleselectall =()=>{
    input.forEach((current) => {
        current.checked = false;
    });
};

// var score=0;
// function random(currenttime){
//     submit.addEventListener("click",()=>{
//         console.log(currenttime);
//        //  currenttime = 10
//        console.log("no"+currenttime)
//        let circle = document.querySelector(".no"+currenttime);
//        // console.log(circle)
//        circle.style.background = "rgb(12, 236, 12)";
//        let checkans = getcheckanswer();
//        if(checkans === data[currenttime].ansid){
//           score++;
//        }
//     //    currenttime++;
//        deleselectall();
//        if(currenttime >= data.length){
//            const modal = document.querySelector(".modal-overlay");
//            modal.classList.add("open-modal")
   
//            const marks = document.querySelector(".marks");
//            const suggetion = document.querySelector(".suggetion");
   
//            if(score == 25){
//                suggetion.textContent = "Excellet score";
//            }else if(score >= 10){
//                suggetion.textContent = "good score";
//            }else{
//                suggetion.textContent = "bad Score";
//            }
//            marks.textContent = score;
//            console.log(score);
//        }
//        else{
//            showquestion(currenttime);
//        }
//     });
// }

function colorcircle(currenttime){
    // console.log("no"+currenttime)
    let circle = document.querySelector(".no"+currenttime);
    // console.log(circle)
    circle.style.background = "rgb(12, 236, 12)";
}

function popupfunc(){
   
        const modal = document.querySelector(".modal-overlay");
        modal.classList.add("open-modal")

        const marks = document.querySelector(".marks");
        const suggetion = document.querySelector(".suggetion");

        if(score == 25){
            suggetion.textContent = "Excellet score";
        }else if(score >= 10){
            suggetion.textContent = "good score";
        }else{
            suggetion.textContent = "bad Score";
        }
        marks.textContent = score;
        // console.log(score);
   
}


function end(){
    sessionStorage.setItem("score",score);
   sessionStorage.setItem("total", data.length);
    // console.log("data array lenght" +v )
  }


//  submit.addEventListener("click",()=>{
//     console.log(currenttime);
//     //  currenttime = 10
//     colorcircle(currenttime);
//     getcheckanswer();
//     // currenttime++;
//     deleselectall();

//     if(currenttime >= data.length){
//         popup();
//     }
//     else{
//         showquestion(currenttime);
//     }
//  });



 var count = 1220;
 let sec = 60;
var interval = setInterval(function(){
    let time = Math.trunc(count / 60);
    
  document.getElementById('count').innerHTML="Time Left :- "+time+" : "+sec;
  count--;
  if(sec === 0){
      sec = 60;
  }
  else{
    sec--;
  }
  
  if (count === 1990){
    const modal = document.querySelector(".modal-overlay");
        modal.classList.add("open-modal")

        const marks = document.querySelector(".marks");
        const suggetion = document.querySelector(".suggetion");

        if(mycurrentque.score == 5){
            suggetion.textContent = "Excellet score";
        }else if(mycurrentque.score >= 3){
            suggetion.textContent = "good score";
        }else{
            suggetion.textContent = "bad Score";
        }
        marks.textContent = mycurrentque.score;
        // console.log(mycurrentque.score);
        clearInterval(interval);
  }
}, 1000);

