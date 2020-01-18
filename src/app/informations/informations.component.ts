import { InformationModel } from './../admin/admin.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  informationList: Array<InformationModel> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllInformations();
  }

  getAllInformations() {
    const url = 'http://localhost:8080/informations/all';
    this.http.get<Array<InformationModel>>(url).subscribe(
      res => {
        this.informationList = res;
        console.log(this.informationList)
      },
      err => {
        console.log("Wystapił problem przy pobieraniu danych.")
      }
    );
  }
}
