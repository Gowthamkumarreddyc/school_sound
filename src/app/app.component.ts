import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'school_sound';
  subscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubscribe(): void {
    if (this.subscriptionForm.valid) {
      // Handle the form submission
      console.log('Form Submitted!', this.subscriptionForm.value);
    } else {
      // Handle validation errors
      console.log('Form is invalid');
    }
  }
}
