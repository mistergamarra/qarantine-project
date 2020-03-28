import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  tittle = 'Create Account';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createAccount() {
    console.log('Create Account');
    this.router.navigate(['/login']);
  }

}
