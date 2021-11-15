import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empoyee-details',
  templateUrl: './empoyee-details.component.html',
  styleUrls: ['./empoyee-details.component.css']
})
export class EmpoyeeDetailsComponent implements OnInit {
  name: string;
  id: string;
  createdAt: string;
  constructor(private route: ActivatedRoute, private _http: HttpClient, private _router: Router) { 
    this.name = "";
    this.id = "";
    this.createdAt = "";
    this._http.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees/" + this.route.snapshot.params.id).subscribe((data: any) => {
      this.name = data.name;
      this.id = data.id
      this.createdAt = data.createdAt
    })
  }

  goBackToParent() {
    this._router.navigate(['employeelist']);
  }

  ngOnInit(): void {
  }

}
