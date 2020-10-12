import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HelperService} from '../../helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public form: FormGroup;
  submitted = false;
  message = 'kishan';

  constructor(private formBuilder: FormBuilder, private router: Router, private helperService: HelperService) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.helperService.changeMessage(this.form.get('username').value);
      this.router.navigate(['/logout']);
    }
  }

}
