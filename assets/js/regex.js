$(document).ready(function() {
    function ktemailLogin(){
        let email = $("#emailLogin").val()
        if(email===""){
            $("#erremailLogin").html("Email cannot be empty")
            return false
        }else{
            $("#erremailLogin").html("*")
            return true
        }
    }

    function ktpasswordLogin(){
        let password = $("#passwordLogin").val()
        let regex = /^.{8}$/
        if(password===""){
            $("#errpasswordLogin").html("Password cannot be empty")
            return false
        }else if(regex.test(password)){
            $("#errpasswordLogin").html("*")
            return true
        }else{
            $("#errpasswordLogin").html("Password invalid. Password has more than 8 characters")
            return false
        }
    }

    function ktfirstname(){
        let firstname = $("#firstname").val();
        let regex= /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/
        if(firstname===""){
            $("#errfirstname").html("Firstname cannot be empty")
            return false
        }else if(regex.test(firstname)){
            $("#errfirstname").html("*")
            return true
        }else{
            $("#errfirstname").html("Firstname invalid")
            return false
        }
    }

    function ktlastname(){
        let lastname = $("#lastname").val();
        let regex= /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/
        if(lastname===""){
            $("#errlastname").html("Lastname cannot be empty")
            return false
        }else if(regex.test(lastname)){
            $("#errlastname").html("*")
            return true
        }else{
            $("#errlastname").html("Lastname invalid")
            return false
        }
    }
    
    function ktEmailcreateacc(){
        let email = $("#Emailcreateacc").val();
        let regex= /^[\w\.-]+@gmail\.com$/
        if(email===""){
            $("#errEmailcreateacc").html("Email cannot be empty")
            return false
        }else if(regex.test(email)){
            $("#errEmailcreateacc").html("*")
            return true
        }else{
            $("#errEmailcreateacc").html("Email invalid, email format is XXX@gmail.com")
            return false
        }
    }
    

    function ktpasswordcreateacc(){
        let password = $("#passwordcreateacc").val();
        let regex= /^.{8,}$/
        if(password===""){
            $("#errpasswordcreateacc").html("Password cannot be empty")
            return false
        }else if(regex.test(password)){
            $("#errpasswordcreateacc").html("*")
            return true
        }else{
            $("#errpasswordcreateacc").html("Password invalid")
            return false
    }}

    function ktconfirmpassword(){
        let password = $("#passwordcreateacc").val();
        let confirmpassword = $("#confirmpassword").val();
        if(confirmpassword===""){
            $("#errconfirmpassword").html("Password confirm cannot be empty")
            return false
        }else if(password===confirmpassword){
            $("#errconfirmpassword").html("*")
            return true
        }else{
            $("#errconfirmpassword").html("Confirm password is not the same as password")
            return false

    }}

    




    $("#emailLogin").blur(function(){
        ktemailLogin()
    })

    $("#passwordLogin").blur(function(){
        ktpasswordLogin()
    })

    $("#firstname").blur(function(){
        ktfirstname()
    })

    $("#lastname").blur(function(){
        ktlastname()
    })

    $("#Emailcreateacc").blur(function(){
        ktEmailcreateacc()
    })

    $("#passwordcreateacc").blur(function(){
        ktpasswordcreateacc()
    })

    $("#confirmpassword").blur(function(){
        ktconfirmpassword()
    })


    $("#signin").on("click",function(event){
        event.preventDefault();
        if(ktemailLogin() && ktpasswordLogin()){
            window.location.href = "./index.html";
            
        }else{
            alert("Information invalid")
        }
    })

    $("#createaccount").on("click",function(event){
        event.preventDefault();
        if(ktfirstname() && ktlastname() && ktEmailcreateacc() && ktpasswordcreateacc() && ktconfirmpassword()){
            window.location.href = "./signin.html";
        }else{
            alert("Information invalid")
        }
    })
    

})