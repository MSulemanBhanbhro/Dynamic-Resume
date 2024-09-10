var form = document.getElementById("form");
var Output = document.getElementById("resumecontent");
var resumeOutput = document.getElementById("resumeoutput");
var side = document.getElementById("side");
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var skill = document.getElementById("skill").value;
    var experience = document.getElementById("experience").value;
    var Content = "\n     \n    \n    <h3>Name: ".concat(name, "</h3>\n    <h3>Email: ").concat(email, "</h3>\n     <h3>Contact No: ").concat(contact, "</h3>\n      <h3>Skills: ").concat(skill, "</h3>\n       <h3>Experience: ").concat(experience, "</h3>\n    ");
    Output.innerHTML = Content;
    side.style.width = "50%";
    resumeOutput.style.display = "block";
});
