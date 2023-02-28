import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'appservice',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  name = 'Angular';
  constructor(private route: Router) {}
  onform() {
    this.route.navigateByUrl('/formcomp');
  }
}
