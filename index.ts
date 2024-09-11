const form = document.getElementById("form") as HTMLFormElement;
const Output = document.getElementById("resumecontent") as HTMLElement;
const resumeOutput = document.getElementById("resumeoutput") as HTMLElement;
const side = document.getElementById("side") as HTMLElement;
const editResume = document.getElementById("editResume") as HTMLButtonElement;



form?.addEventListener('submit', function (event: Event): void {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("phone") as HTMLInputElement).value;
    const skill = (document.getElementById("skill") as HTMLInputElement).value;;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;

    const Content = `
     
    <img src="images/success.png" alt="">
    <h3 contenteditable="true">Name: ${name}</h3>
    <h3 contenteditable="true">Email: ${email}</h3>
     <h3 contenteditable="true">Contact No: ${contact}</h3>
      <h3 contenteditable="true">Skills: ${skill}</h3>
       <h3 contenteditable="true">Experience: ${experience}</h3>
    `;

    Output.innerHTML = Content;

    if (side) side.style.width = "40%";

    if (resumeOutput) resumeOutput.style.display = "block"
});

editResume?.addEventListener('click', function (): void {
    if (side) side.style.width = "100%";
    if (resumeOutput) resumeOutput.style.display = "none";
});


