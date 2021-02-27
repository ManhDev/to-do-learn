import { FormControl, ValidationErrors } from '@angular/forms';
// Custom Validator

export class CustomTextValidator {
    static specialCharacters(control: FormControl): ValidationErrors | null {
        const specialCharacter = "#S%!()+-";
        let value = control.value;
        for (let sc of specialCharacter.split('')) {
            if (value.indexOf(sc) > -1) {
                // return { specialCharacters: true } //object khi được trả về vào function specialCharacters
                return {
                    specialCharacters: {
                        invalidCharacters: sc
                    }
                }
            }
        }
        return null


    }
}