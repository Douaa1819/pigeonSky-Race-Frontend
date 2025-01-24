import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompetitionRequestDTO, CompetitionResponseDTO } from '../models/competition.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private apiUrl = 'http://localhost:8081/api/v3/competition';

  constructor(private http:HttpClient) { }

  private getHeaders(): HttpHeaders {
    const username = 'douaa';
    const password = 'douaa123';
    const authHeader = 'Basic ' + btoa(username + ':' + password);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: authHeader,
    });
  }

  createCompetition(competition: CompetitionRequestDTO): Observable<CompetitionResponseDTO>  
  {
    return this.http.post<CompetitionResponseDTO>(this.apiUrl, competition, {
      headers: this.getHeaders(),
    });
  }

  getAllCompetitions(): Observable<CompetitionResponseDTO[]> {
    return this.http.get<CompetitionResponseDTO[]>(this.apiUrl, {
      headers: this.getHeaders(),
    });
  }
  getCompetitionById(id: number): Observable<CompetitionResponseDTO> {
    return this.http.get<CompetitionResponseDTO>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }
}
