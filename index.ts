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

function pdfDownload() {
    const element = document.getElementById('resumeoutput');
    
    if (element.style.display !== "none") { 
      const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().from(element).set(opt).save();
    } else {
      alert("Please generate the resume first.");
    }
  }

  function generateSharableLink() {
    const element = document.getElementById('resumeoutput');
    
    if (element.style.display !== "none") { 
      const blob = new Blob([element.innerHTML], { type: 'text/html' });
      const sharableLink = URL.createObjectURL(blob);
  
      
      const linkOutput = document.createElement('input');
      linkOutput.type = 'text';
      linkOutput.value = sharableLink;
      linkOutput.readOnly = true;
      document.body.appendChild(linkOutput);
  
      linkOutput.select();
      document.execCommand('copy');
      alert("Sharable link has been copied to clipboard: " );
  
      // Clean up the input field after copy
      setTimeout(() => linkOutput.remove(), 5000);
    } else {
      alert("Please generate the resume first.");
    }
  }


