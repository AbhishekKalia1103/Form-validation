var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    formData["secondName"] = document.getElementById("secondName").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.number;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.secondName;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("secondName").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("number").value = selectedRow.cells[2].innerHTML;
    document.getElementById("secondName").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.number;
    selectedRow.cells[3].innerHTML = formData.secondName;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;

    let firstName, secondName, number, email, psw, cnfpsw;
    firstName = document.getElementById("firstName").value;
    secondName = document.getElementById("secondName").value;
    number = document.getElementById("number").value;
    email = document.getElementById("email").value;
    psw = document.getElementById("psw").value;
    cnfpsw = document.getElementById("cnfpsw").value;


    if ( firstName == "") {
        isValid = false;
        document.getElementById('firstNameValidationError').innerHTML = "Required";
        document.getElementById("firstNameValidationError").classList.remove("hide");
        
    }
    else if((firstName.length <= 2) || (firstName.length > 20)) {
        isValid = false;
        document.getElementById('firstNameValidationError').innerHTML =" ** First name length must be between 3 and 20";
        document.getElementById("firstNameValidationError").classList.remove("hide");
    }
    else  if(!isNaN(firstName)){
        isValid = false;
        document.getElementById('firstNameValidationError').innerHTML =" ** only characters are allowed";
        document.getElementById("firstNameValidationError").classList.remove("hide");
    }
    
    else {
        isValid = true;
        if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
            document.getElementById("firstNameValidationError").classList.add("hide");
    }

     if(email == ""){
               isValid = false;
                document.getElementById('emailValidationError').innerHTML = "Required";
                document.getElementById("emailValidationError").classList.remove("hide");
            }
            else if(email.indexOf('@') <= 0 ){
                 isValid = false;
                document.getElementById('emailValidationError').innerHTML =" ** @ Invalid Position";
                document.getElementById("emailValidationError").classList.remove("hide");
            }

            else if((email.charAt(email.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
                isValid = false;
                document.getElementById('email').innerHTML =" ** . Invalid Position";
                document.getElementById("emailValidationError").classList.remove("hide");
            }
              else{
                isValid = true;
                if (!document.getElementById("emailValidationError").classList.contains("hide"))
                    document.getElementById("emailValidationError").classList.add("hide");
            }

    if(number == ""){
                isValid = false;
                document.getElementById('numberValidationError').innerHTML = "Required";
                document.getElementById("numberValidationError").classList.remove("hide");
            }
           else if(isNaN(number)){
                isValid = false;
                document.getElementById('numberValidationError').innerHTML =" ** user must write digits only not characters";
                document.getElementById("numberValidationError").classList.remove("hide");
            }
           else if(number.length!=10){
                isValid = false;
                document.getElementById('numberValidationError').innerHTML =" ** Mobile Number must be 10 digits only";
                document.getElementById("numberValidationError").classList.remove("hide");
            }
            else{
                isValid = true;
                if (!document.getElementById("numberValidationError").classList.contains("hide"))
                    document.getElementById("numberValidationError").classList.add("hide");
            }

    if (secondName == "") {
        isValid = false;
        document.getElementById('secondNameValidationError').innerHTML = "Required";
        document.getElementById("secondNameValidationError").classList.remove("hide");
    } 
    else if((secondName.length <= 2) || (secondName.length > 20)) {
        isValid = false;
        document.getElementById('secondNameValidationError').innerHTML =" ** Second name length must be between 3 and 20";
        document.getElementById("secondNameValidationError").classList.remove("hide");  
    }
    else  if(!isNaN(secondName)){
        document.getElementById('secondNameValidationError').innerHTML =" ** only characters are allowed";
         document.getElementById("secondNameValidationError").classList.remove("hide");  
        isValid = false; 
    }

    else {
        isValid = true;
        if (!document.getElementById("secondNameValidationError").classList.contains("hide"))
            document.getElementById("secondNameValidationError").classList.add("hide");
    }

    if(psw == ""){
         isValid = false;
        document.getElementById('pswValidationError').innerHTML = "Required";
        document.getElementById("pswValidationError").classList.remove("hide");
    }
    else if((psw.length < 5) || (psw.length > 20)) {
         isValid = false;
        document.getElementById('pswValidationError').innerHTML =" ** Passwords lenght must be between  5 and 20";
        document.getElementById("pswValidationError").classList.remove("hide");   
    }
    else if(psw != document.getElementById("cnfpsw").value){
        isValid = false;
        document.getElementById('pswValidationError').innerHTML =" ** Password does not match the confirm password";
        document.getElementById("pswValidationError").classList.remove("hide"); 
    }
    else{
        isValid = true;
        if (!document.getElementById("pswValidationError").classList.contains("hide"))
            document.getElementById("pswValidationError").classList.add("hide");
    }
    return isValid;


}