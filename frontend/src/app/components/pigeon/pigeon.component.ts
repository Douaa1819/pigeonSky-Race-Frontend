import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PigeonService } from '../../api/pigeon.service';
import { PigeonRequestDTO, PigeonResponseDTO } from '../../models/pigeon.model';

@Component({
  selector: 'app-pigeon',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], 
  templateUrl: './pigeon.component.html',
  styleUrls: ['./pigeon.component.css'],
})
export class PigeonComponent implements OnInit {
  pigeons: PigeonResponseDTO[] = []; 
  newPigeon: PigeonRequestDTO = { numberBague: '', gender: '', color: '' , age:0  };   

  constructor(private pigeonService: PigeonService) {}

  ngOnInit(): void {
    this.loadPigeons(); 
  }

  
  loadPigeons(): void {
    this.pigeonService.getAllPigeons().subscribe({
      next: (pigeons) => {
        this.pigeons = pigeons; 
      },
      error: (err) => {
        console.error('Erreur lors du chargement des pigeons', err);
      },
    });
  }


  createPigeon(): void {
    this.pigeonService.createPigeon(this.newPigeon).subscribe({
      next: (response) => {
        console.log('Pigeon créé', response);
        this.loadPigeons();
        this.newPigeon = { numberBague: '', gender: '', color: '',age: 0};
      },
      error: (err) => {
        console.error('Erreur lors de la création du pigeon', err);
      },
    });
  }
}