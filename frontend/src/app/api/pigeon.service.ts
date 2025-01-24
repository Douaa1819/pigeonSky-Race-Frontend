import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PigeonRequestDTO, PigeonResponseDTO } from '../models/pigeon.model';

@Injectable({
  providedIn: 'root',
})
export class PigeonService {
  private apiUrl = 'http://localhost:8081/api/v3/pigeons';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const username = 'douaa';
    const password = 'douaa123';
    const authHeader = 'Basic ' + btoa(username + ':' + password);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: authHeader,
    });
  }

  createPigeon(pigeon: PigeonRequestDTO): Observable<PigeonResponseDTO> {
    return this.http.post<PigeonResponseDTO>(this.apiUrl, pigeon, {
      headers: this.getHeaders(),
    });
  }

  getAllPigeons(): Observable<PigeonResponseDTO[]> {
    return this.http.get<PigeonResponseDTO[]>(this.apiUrl, {
      headers: this.getHeaders(),
    });
  }

  getPigeonById(id: number): Observable<PigeonResponseDTO> {
    return this.http.get<PigeonResponseDTO>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }

}
