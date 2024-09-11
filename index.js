var form = document.getElementById("form");
var Output = document.getElementById("resumecontent");
var resumeOutput = document.getElementById("resumeoutput");
var side = document.getElementById("side");
var editResume = document.getElementById("editResume");
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var skill = document.getElementById("skill").value;
    ;
    var experience = document.getElementById("experience").value;
    var Content = "\n     \n    <img src=\"images/success.png\" alt=\"\">\n    <h3 contenteditable=\"true\">Name: ".concat(name, "</h3>\n    <h3 contenteditable=\"true\">Email: ").concat(email, "</h3>\n     <h3 contenteditable=\"true\">Contact No: ").concat(contact, "</h3>\n      <h3 contenteditable=\"true\">Skills: ").concat(skill, "</h3>\n       <h3 contenteditable=\"true\">Experience: ").concat(experience, "</h3>\n    ");
    Output.innerHTML = Content;
    if (side)
        side.style.width = "40%";
    if (resumeOutput)
        resumeOutput.style.display = "block";
});
editResume === null || editResume === void 0 ? void 0 : editResume.addEventListener('click', function () {
    if (side)
        side.style.width = "100%";
    if (resumeOutput)
        resumeOutput.style.display = "none";
});
function pdfDownload() {
    var element = document.getElementById('resumeoutput');
    if (element.style.display !== "none") {
        var opt = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    }
    else {
        alert("Please generate the resume first.");
    }
}
function generateSharableLink() {
    var element = document.getElementById('resumeoutput');
    if (element.style.display !== "none") {
        var blob = new Blob([element.innerHTML], { type: 'text/html' });
        var sharableLink = URL.createObjectURL(blob);
        var linkOutput_1 = document.createElement('input');
        linkOutput_1.type = 'text';
        linkOutput_1.value = sharableLink;
        linkOutput_1.readOnly = true;
        document.body.appendChild(linkOutput_1);
        linkOutput_1.select();
        document.execCommand('copy');
        alert("Sharable link has been copied to clipboard: ");
        // Clean up the input field after copy
        setTimeout(function () { return linkOutput_1.remove(); }, 5000);
    }
    else {
        alert("Please generate the resume first.");
    }
}
