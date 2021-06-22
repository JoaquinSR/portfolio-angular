import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitForm = false;

  contactForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    email: [, [Validators.required, Validators.email]],
    subject: [, [Validators.required, Validators.minLength(2)]],
    message: [, [Validators.required, Validators.maxLength(270)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido( campo: string ) {

    return this.contactForm.controls[campo].errors 
            && this.contactForm.controls[campo].touched;
  }

  save() {

    if ( this.contactForm.invalid )  {
      this.contactForm.markAllAsTouched();
      this.submitForm = false;

      return;
    }


    console.log(this.contactForm.value);
    this.contactForm.reset();
    this.submitForm = true;
  }

}
