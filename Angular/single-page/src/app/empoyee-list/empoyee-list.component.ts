import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empoyee-list',
  templateUrl: './empoyee-list.component.html',
  styleUrls: ['./empoyee-list.component.css']
})
export class EmpoyeeListComponent implements OnInit {
  employeeList: any = [];
  constructor(private _route: ActivatedRoute, private router: Router) { 
    this.employeeList = this._route.snapshot.data.employeeObservable;
  }

  redirectToDetails(id: string) {
    this.router.navigate(["details", id, "Mayank"])
  }

  ngOnInit(): void {
  }

}
