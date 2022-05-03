import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  BMI:number
  result:string = "";
  advice:string = "";
  constructor(private route:ActivatedRoute) { 
    this.BMI = +route.snapshot.paramMap.get('value')!;
  }

  ngOnInit(): void {
    this.getResult();
  }

  getResult(){
    if(this.BMI >= 25){
      this.result = "Sobre el Promedio";
      this.advice = "Mantener un peso saludable es importante para la salud. Aprender más en: https://www.argentina.gob.ar/salud/alimentacion-saludable";
    }else if(this.BMI >= 18.2){
      this.result = "Promedio";
      this.advice = "Mantener un peso saludable es importante para la salud. Aprender más en: https://www.argentina.gob.ar/salud/alimentacion-saludable"
    }else{
      this.result = "Por debajo del Promedio"
      this.advice = "Mantener un peso saludable es importante para la salud. Aprender más en: https://www.argentina.gob.ar/salud/alimentacion-saludable"
    }
  }
}
