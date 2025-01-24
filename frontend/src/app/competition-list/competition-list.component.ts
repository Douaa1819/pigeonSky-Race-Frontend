import { CompetitionService } from '../api/competition.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competition-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], 
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css'],
})

export class CompetitionListComponent implements OnInit {
  competitions: any[] = [];

  constructor(private competitionService: CompetitionService) {}

  ngOnInit(): void {
    this.loadCompetition();
  }
  
  loadCompetition(): void {
    this.competitionService.getAllCompetitions().subscribe({
      next: (competition) => {
        this.competitions = competition; 
      },
      error: (err) => {
        console.error('Erreur lors du chargement des competition', err);
      },
    });
  }

}


