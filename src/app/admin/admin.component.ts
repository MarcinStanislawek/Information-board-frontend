import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  model: InformationModel = {
    content: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addInformation(): void {
    const url = 'http://localhost:8080/informations/add';
    this.http.post(url, this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert("Wystąpił błąd podczas wysyłania");
      }
    );
  }

}

export interface InformationModel {
  content: string;
}
