const form = document.getElementById("form") ;
const Output =  document.getElementById("resumecontent");
const resumeOutput = document.getElementById("resumeoutput");
const side = document.getElementById("side");

form?.addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("phone").value;
    const skill = document.getElementById("skill").value;
    const experience = document.getElementById("experience").value;

    const Content = `
     
    
    <h3>Name: ${name}</h3>
    <h3>Email: ${email}</h3>
     <h3>Contact No: ${contact}</h3>
      <h3>Skills: ${skill}</h3>
       <h3>Experience: ${experience}</h3>
    `;

    Output.innerHTML = Content;

    side.style.width = "50%";

    resumeOutput.style.display = "block"
})