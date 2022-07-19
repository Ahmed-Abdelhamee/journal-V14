import { AbstractControl } from "@angular/forms";

export function checkpass (control:AbstractControl){
    const pass=control.get("password");
    const confirmPass=control.get("confirmPassword");

    if(pass?.pristine || pass?.pristine){
        return " ";
    }else{
        return pass&&confirmPass&&pass.value!=confirmPass.value ?
        {"notEqual" : true} : " ";
    }
        
}