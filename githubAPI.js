const baseURL = "http://api.github.com/repos/CajsaMartensson/";
const loader = document.querySelector(".loader");

const infoButtons = document.querySelectorAll(".openModal a")

infoButtons.forEach(button =>{
    button.addEventListener("click", async (event) =>{

        event.preventDefault();
        const targetId = button.getAttribute("href");

        if(targetId == "#modalOne"){
            await fetchGitHubInfo("Bibloteket");
        }
        else if (targetId == "#modalThree"){
            await fetchGitHubInfo("Labb3School_Cajsa-DATABASE");
        }
        else if (targetId == "#modalFour"){
            await fetchGitHubInfo("Spotify-logIn");
        }

        else if(targetId == "#modalTwo"){
            await fetchStarredGitHubInfo();
        }

        // Öppnar modalen när await är klar
        window.location.hash = targetId;
    })
})

async function fetchGitHubInfo(repo){
    loader.classList.add("loader-active");

    try{  
    //     //FAKE-PAUS
    // await new Promise(resolve => setTimeout(resolve, 3000));

        const response = await fetch(`${baseURL}${repo}`);
        
        if(!response.ok){
            console.log("Något gick fel");
            return;
        }
        const data = await response.json();
        loader.classList.remove("loader-active");
        
        console.log(data);

        if(repo == "Bibloteket"){
            showText(data.description, "libraryText");
            showName(data.name, "libraryName");
        }
        else if(repo == "Labb3School_Cajsa-DATABASE"){
            showText(data.description, "databaseText");
            showName(data.name, "databaseName");
        }
        else if(repo == "Spotify-logIn"){
            showName(data.name, "spotifyLogInName");
            showText(data.description, "spotifyLogInText");
        }
        else{
            console.log("Något gick fel");
        }
    } catch (error){
        console.log("Ett fel uppstod:" + error)
    } 
}

async function fetchStarredGitHubInfo(){
    loader.classList.add("loader-active");

    try{  
    //     //FAKE-PAUS
    // await new Promise(resolve => setTimeout(resolve, 3000));

        const response = await fetch(`http://api.github.com/users/CajsaMartensson/starred`);
        
        
        if(!response.ok){
            console.log("Något gick fel");
            return;
        }
        const data = await response.json();
        
        console.log(data);

        showName(data[0].name, "bankName");
        showText(data[0].description, "bankText");

    } catch (error){
        console.log("Ett fel uppstod:" + error)
    } finally{
        loader.classList.remove("loader-active");
    }
}

    function showText(text, id){
        const textListElement = document.getElementById(id);

        textListElement.innerHTML = `
            <p>${text}</p>`;
    }

    function showName (name, id){
        const nameListElement = document.getElementById(id);

        nameListElement.innerHTML = `
        <h2>${name}</h2>`;
    }