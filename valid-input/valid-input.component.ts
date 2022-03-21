import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-valid-input',
  templateUrl: './valid-input.component.html',
  styleUrls: ['./valid-input.component.css']
})
export class ValidInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() placeHolder:string;
  @Input() inputType: string='text';
  @Input() control: FormControl;


  showError()
  {
    const {touched, dirty, errors} = this.control;
    return touched && dirty && errors;
  }

}
