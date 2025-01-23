import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-competition-create',
  templateUrl: './competition-create.component.html',
  styleUrls: ['./competition-create.component.css'],
})
export class CompetitionCreateComponent {
  competition = { name: '', date: '' };

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    this.apiService.createCompetition(this.competition).subscribe((response) => {
      console.log('Compétition créée', response);
    });
  }
}
