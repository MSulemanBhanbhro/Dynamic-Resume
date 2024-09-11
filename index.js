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
