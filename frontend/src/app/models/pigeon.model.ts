export interface PigeonRequestDTO {
  numberBague: string;
  gender: string;
  age : number ;
  color: string;
}

export interface PigeonResponseDTO {
  id: number;
  age: number;
  numberBague: string;
  gender: string;
  color: string;
}
