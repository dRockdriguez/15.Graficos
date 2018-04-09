import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html'
})
export class DonasComponent {

  // Doughnut
   public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'MiauMiauMiau'];
   public doughnutChartData:number[] = [350, 450, 600, 10000];
   public doughnutChartType:string = 'doughnut';

   // events
   public chartClicked(e:any):void {
     console.log(e);
   }

   public chartHovered(e:any):void {
     console.log(e);
   }

   public lineChartColors:Array<any> = [
    { // grey
      backgroundColor:['red', 'blue', 'yellow', 'orange'],
      borderColor: ['blue', 'green', 'red', 'pink']
    }
  ];

  public randomNumeros(){
    this.doughnutChartData = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }
}
