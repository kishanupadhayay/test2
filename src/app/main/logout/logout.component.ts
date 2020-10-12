import {Component, OnInit} from '@angular/core';
import {HelperService} from '../../helper.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  message: string;

  constructor(private helperService: HelperService, private router: Router) {
  }

  ngOnInit(): void {
    this.helperService.currentMessage.subscribe(message => this.message = message);
    if (this.message === '') {
      this.router.navigate(['/home']);
    }
  }
  logout(){
    this.helperService.changeMessage('');
    this.router.navigate(['/home']);
  }

}
