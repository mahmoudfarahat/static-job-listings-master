


let btnfilter = document.querySelectorAll(".btn")
let myInput = document.getElementById("myInput")

let filter_jobs = [];

btnfilter.forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target.getAttribute("data-nav"))
        let data_nav = e.target.getAttribute("data-nav");
        let filertinput = document.getElementById('filertinput');
        filertinput.value = data_nav;
        filter_jobs.push(data_nav);
        let text = filter_jobs.join(' ');
        // filertinput.value = filter_jobs[0];
        filertinput.value = text
        // console.log(data_nav);
        /////////////////////
        let newliElement = document.createElement("div");


        
        let closeBtn = document.createElement("button");
        closeBtn.className = 'btn-close'

        closeBtn.onclick = function () {
            // console.log(newliElement);
            // console.log(e.target)
            console.log(newliElement.innerText)

            var carIndex = filter_jobs.indexOf(newliElement.innerText);//get  "car" index
            
            console.log(carIndex);

            filter_jobs.splice(carIndex, 1);
            
            console.log(filter_jobs)
               newliElement.remove();

        }
        newliElement.className = 'btn m-2 px-2 mb-2 mb-md-0 filter-style'
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
    })

    let closeButton = document.querySelectorAll('.btn-close')
    // console.log(closeButton)


    closeButton.forEach((ele) => {


        ele.addEventListener('click', (e) => {

            console.log(e.target)
            // console.log(closeButton)

        })


    })





});



