


let btnfilter = document.querySelectorAll(".btn")
// let myInput = document.getElementById("myInput")
let jobBox = document.querySelectorAll(".job-box")
let filter_jobs = [];
// console.log(filter_jobs)
btnfilter.forEach((element) => {

// console.log(element.getAttribute("data-nav"))

 
let dataNav =element.getAttribute("data-nav")




    element.addEventListener('click', (e) => {

       

        
        // console.log(e.target.getAttribute("data-nav"))
        let data_nav = e.target.getAttribute("data-nav");
        let filertinput = document.getElementById('filertinput');
        // filertinput.value = data_nav;
        filter_jobs.push(data_nav);

        console.log(filter_jobs)

        
        // let text = filter_jobs.join(' ');
        // filertinput.value = filter_jobs[0];
        // filertinput.value = text
        // console.log(data_nav);
        /////////////////////
        let newliElement = document.createElement("div");

         
        
        let closeBtn = document.createElement("button");
        closeBtn.className = 'btn-close'

        closeBtn.onclick = function () {
            // console.log(newliElement);
            // console.log(e.target)
            // console.log(newliElement.innerText)

            var carIndex = filter_jobs.indexOf(newliElement.innerText);//get  "car" index
            
            // console.log(carIndex);

            filter_jobs.splice(carIndex, 1);
            
            // console.log(filter_jobs)
               newliElement.remove();
               showItem2s()
               const includesTwenty = filter_jobs.includes('Frontend');
        
        // console.log(includesTwenty)//true 

        }

        newliElement.className = 'btn  mx-1      filter-style  d-flex align-items-center'
        let liText = document.createTextNode(data_nav)
        // console.log(liText)
        // filertinput.value = document.getAttribute("data-nav");
        // newliElement.value = document.getAttribute("data-nav");
        newliElement.appendChild(liText);
        newliElement.appendChild(closeBtn);

        document.getElementById("myInput").appendChild(newliElement)
        // myInput.appendChild(newliElement)
        // console.log(filertinput.value)
        // filertinput.appendChild(liText);
        // document.body.appendChild(newliElement)
        // console.log(newliElement)

     

        const includesTwenty = filter_jobs.includes('Frontend');
        
        // console.log(includesTwenty)//true


        if (includesTwenty){




        }
        function showItem2s(){



            if (filter_jobs.length == 0){
            
                jobBox.forEach(el => {el.classList.remove("d-none")  })



            }else   {
                 
                jobBox.forEach(el => {el.classList.add("d-none")  })
                
                // jobBox.forEach(el => {
                //     el.classList.add("d-none")  })
                // element.parentNode.parentNode.parentNode.classList.add("d-none");

             
                let data_Nav = document.querySelectorAll('a')
 
                data_Nav.forEach(element => {
                


                    let dataNav =element.getAttribute("data-nav")
                
                    const result = filter_jobs.includes(dataNav);
                
                    if (result){
                
                
                        // console.log(element)
                        console.log(element.parentNode.parentNode.parentNode)
                
                        element.parentNode.parentNode.parentNode.classList.remove("d-none");
                
                        
                    }
                    

                    
                    
                // console.log(dataNav)
                // const result = filter_jobs.filter(ele => ele.includes(dataNav));
                
                    // console.log(element.getAttribute("data-nav"))
                
                
                });







            }
            
            }


            showItem2s();

       


      

        if (filter_jobs.includes(dataNav)){
            
            // console.log(filter_jobs.includes(dataNav))

 


            } else{
                console.log('not')
            }
    })

  
    // console.log(closeButton)


    
////////







});

// let jobBox = document.querySelectorAll('.job-box')
// document.getElementById("myDIV").classList.add("mystyle");
// jobBox.classList.add('d-none')

// jobBox.forEach((element)=>{
//     // element.classList.add('d-none')
// })


 
  

// jobBox.forEach((element)=>{
//     console.log(element.getAttribute("data_nav"))
// var result = element.hasAttribute('data_nav');


// console.log(result)
// })



function showItems(){



if (filter_jobs.length == 0){

    jobBox.forEach(element => {
        element.classList.remove("d-none")
console.log('d')
        // console.log(element)
    })
}

}
showItems();

let data_Nav = document.querySelectorAll('a')
 
data_Nav.forEach(element => {

    let dataNav =element.getAttribute("data-nav")

    const result = filter_jobs.includes(dataNav);

    if (result){


        // console.log(element)
        // console.log(element.parentNode.parentNode.parentNode)

        // element.parentNode.parentNode.parentNode.classList.add("d-none");


    }
    
    
// console.log(dataNav)
// const result = filter_jobs.filter(ele => ele.includes(dataNav));

    // console.log(element.getAttribute("data-nav"))


});


// const result = btnfilter.filter(ele => ele.includes(dataNav));



//  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//         const result = words.filter(word => word.length > 6);
        
//         console.log(result);