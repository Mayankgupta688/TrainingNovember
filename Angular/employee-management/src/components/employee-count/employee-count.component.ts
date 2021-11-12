import { Component, OnInit } from '@angular/core';
import DataOtherService from 'src/services/data.other.service';
import DataService from 'src/services/data.service';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent {

  empCount: number = 0
  empCountOther: number = 0;

  constructor(private _data: DataService, private _dataOther: DataOtherService) { 
    this.empCount = this._data.employeeList.length;
    this.empCountOther = this._dataOther.employeeListOther.length;
  }

}
