import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css'],
})
export class CompetitionListComponent implements OnInit {
  competitions: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCompetitions().subscribe((data) => {
      this.competitions = data;
    });
  }
}
