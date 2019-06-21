import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';

function passwordMatcher(c: AbstractControl): {[key: string]: boolean} | null {
  let password = c.get('password');
  let repassword = c.get('repassword');
  return password.value === repassword.value ? null : {'passwordMatch': true};
}
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styles: []
})
export class UserformComponent implements OnInit {
  BIUForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.BIUForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(7), Validators.maxLength(9)]),
      Passwords: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)]),
        repassword: new FormControl('', [Validators.required])
      }, passwordMatcher),
      pet: new FormControl('', [Validators.required]),
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        building: new FormControl('', [Validators.pattern("[0-9]*.")]),
        flatNo: new FormControl('', [Validators.pattern("[0-9]*.")])
      }),
      consents: new FormGroup({
        newsletter: new FormControl(),
        sms: new FormControl()
      })
    });
  }

  onSubmit(): void {
    if (this.BIUForm.valid) {
      console.log(this.BIUForm.value);
    this.router.navigateByUrl('/calc');
    }else{
      console.log("Popraw dane");
    }
  }
}
