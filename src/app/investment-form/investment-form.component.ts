import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css']
})
export class InvestmentFormComponent {
  public investmentForm : FormGroup

  constructor(private fb: FormBuilder){
    this.investmentForm = this.fb.group({
      asset: new FormControl("", [Validators.required]),
      quantity: new FormControl("", [Validators.min(1)]),
      purchase_price: new FormControl("", [Validators.min(1)]),
      date: new FormControl("", [Validators.required]),
    })
  }

  public onSubmit(){
    if(this.investmentForm.valid){
      console.log(this.investmentForm.value);
    }
  }
}
