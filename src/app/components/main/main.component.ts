import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  age:number = 25;
  weight:number = 60;
  height:number = 170;
  sex:string = "M";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  changeHeight(event:any){
    this.height = event.target.value;
  }

  m(){
    this.sex = "M";
  }

  f(){
    this.sex = "F";
  }

  calculateBMI(){
    const BMI = this.weight / Math.pow(this.height/100, 2)
    this.router.navigate(['/result', BMI.toFixed(1)]);
  }
}
