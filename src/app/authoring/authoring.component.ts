import { Component, ViewEncapsulation } from '@angular/core';
import { MdCard } from '@angular/material/card';
import { MdButton } from '@angular/material/button';
import { MdInput } from '@angular/material/input';
//import {NewsletterComponent} from "./newsletter/newsletter.component";
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from "@angular/forms";


@Component({
  selector: 'app-authoring',
  templateUrl: './authoring.component.html',
  styleUrls: ['./authoring.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthoringComponent {
  form: FormGroup;
  answers: FormArray;
  questionaire: string;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      question: '',
      answers: this.buildArray(),
      answer: '',
    });
  }

  buildArray(): FormArray {
    this.answers = this._fb.array([
      this.buildGroup()
    ]);
    return this.answers;
  }

  buildGroup(): FormGroup {
    return this._fb.group({
       answer: '',
    });
  }

  add() {
    this.answers.push(this.buildGroup());
  }

  submit() {
   
      this.answers.get.apply(res => {
          this.questionaire = res.data;
      });
  }
}