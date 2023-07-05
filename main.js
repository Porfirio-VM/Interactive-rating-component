window.onload = () =>{
    const form = document.getElementById("form");
    const elementos = document.querySelectorAll(".rating_list li");
    
    let selected;
    elementos.forEach((elemento, i) =>{
      elemento.addEventListener('click', () =>{
        elementos.forEach((item) => {
            item.classList.remove('selected');
          });
        elemento.classList.add('selected');
        selected = elemento.textContent;
      })
    })

    form.onsubmit = (e) =>{
        e.preventDefault();
        if(typeof selected !== 'undefined'){
            const container = document.querySelector(".container");
            container.innerHTML = '';
            container.classList.add("triger");
            const img = document.createElement("img");
            img.src = "images/illustration-thank-you.svg"
            img.classList.add("image");
      
            const parraf = document.createElement("p");
            parraf.textContent = `You selected ${selected} out of 5`;
            parraf.classList.add("parraf");
            
            const thnx = document.createElement("h1");
            thnx.textContent = "Thank you!"

            const p = document.createElement("p");
            p.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
            

            container.appendChild(img);
            container.appendChild(parraf);
            container.appendChild(thnx);
            container.appendChild(p)
        }else{
            alert('Please rate us');
        }
    }
}