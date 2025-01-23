import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8081/api'; 

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const username = 'user';
    const password = 'password';
    const authHeader = 'Basic ' + btoa(username + ':' + password);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: authHeader,
    });
  }


  getCompetitions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions`, {
      headers: this.getHeaders(),
    });
  }


  createCompetition(competition: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/competitions`, competition, {
      headers: this.getHeaders(),
    });
  }

}
