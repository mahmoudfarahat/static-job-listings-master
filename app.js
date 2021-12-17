


let btnfilter = document.querySelectorAll(".btn")


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

         

        // let newliElement=document.createElement("div");

        // let liText = document.createTextNode(data_nav)

        // filertinput.value = document.getAttribute("data-nav");
        // newliElement.appendChild(liText);


        console.log(filertinput.value)
        // console.log(filertinput.value)
        // filertinput.appendChild(liText);

        // document.body.appendChild(newliElement)

        // console.log(newliElement)
    })
});

