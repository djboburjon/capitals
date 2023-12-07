const dak_mode = document.querySelector(".dak_mode")
const dak_mode2 = document.querySelector(".dak_mode2")
const section = document.querySelector(".section")
const body = document.querySelector("body")

const country = new URLSearchParams(window.location.search).get("name")
var api_link = `https://restcountries.com/v3.1/name/${country}`;



const getData = async (link) => {
  
  const req = await fetch(link);
  const data = await req.json();

  writeCountry(data[0])

};

getData(api_link)

dak_mode.addEventListener("click", () => {
    body.classList.add("active");
    dak_mode2.style = "display: flex;";
    dak_mode.style = "display: none;";
  });
  
  dak_mode2.addEventListener("click", () => {
    body.classList.remove("active");
    dak_mode2.style = "display: none;";
    dak_mode.style = "display: flex;";
  });


  const writeCountry = (data)=>{
        section.innerHTML +=`
        <div class="box">
                <div class="image">
                    <img src="${data.flags.png}" alt="">
                </div>
                <div class="content">
                    <h1 class="name">${data.name.common}</h1>
                    <div class="about_country">
                       <div class="left">
                       <p>
                       Official Name: 
                       <span class="n_name">${data.name.official}</span>
                   </p>
                        <p>
                            Population: 
                            <span class="population">${data.population}</span>
                        </p>
                        <p>
                            Region:  
                            <span class="region">${data.region}</span>
                        </p>
                        <p>
                            Sub Region:
                            <span class="sub_region"> ${data.subregion} </span>
                        </p>
                        
                       </div>
                       <div class="right">
                       <p>
                       Top Level Domain: 
                       <span class="level_domain">${data.tld}</span>
                     </p>
                      <p>
                            Capital: 
                            <span class="capital">${data.capital}</span>
                        </p>
                    </div>   
                    </div>
                    <p class="text">
                     Border Countries: 
                     <span class="borders">${data.borders}</span>
                    </p>
                </div>
            </div>
        `

}





