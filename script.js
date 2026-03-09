async function GetData(){
    //lägg till try catch
    const response = await fetch("cv.json");
    if(!response.ok){
        throw new Error("Kunde inte hämta data: " + response.statusText);
    }
    const {jobs, education, skills} = await response.json();
    console.log(data);
    showJobExperience(jobs);
    showEducation(education);
    showSkills(skills);
}

GetData();

function showJobExperience(jobs){
    const jobListElement = document.getElementById("jobExperienceList");

    // if(!jobListElement){
    //     return;
    // }
    
    jobs.forEach((job) => {
        const jobElement = document.createElement("div");
        
        jobElement.innerHTML = `
        <li>${job.title} ${job.company} (${job.years})</li>
        `;
        
        jobListElement.appendChild(jobElement);
    })
}

function showEducation(educations){
    const educationListElement = document.getElementById("educationList");
    
        if(!educationListElement){
        return;
    }

    educations.forEach((education) => {
        const educationElement = document.createElement("div");
        
        educationElement.innerHTML = `
        <li>${education.name} - ${education.graduationYear})</li>
        `;
        
        educationListElement.appendChild(educationElement);
    })
}

function showSkills(skills){
    const skillListElemeent = document.getElementById("skillList");
    
    skills.forEach((skill) => {
        const skillElement = document.createElement("li");
        
        skillElement.innerHTML = `
        <li>${skill.name}</li>
        `;
        
        skillListElemeent.appendChild(skillElement);
    })
}


