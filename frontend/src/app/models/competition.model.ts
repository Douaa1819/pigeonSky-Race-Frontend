 export interface CompetitionRequestDTO{
  name: string;
  startTime : Date;
  endTime : Date;
  latitudeGPS : number;
  longitudeGPS : number;
  pigeonCount: number;
 }

 export interface CompetitionResponseDTO{
   id: number;
   name: string;
   startTime : Date;
   endTime : Date;
   latitudeGPS : number;
   longitudeGPS : number;
   pigeonCount: number;
   }