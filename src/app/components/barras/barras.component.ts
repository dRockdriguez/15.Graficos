import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html'
})
export class BarrasComponent {

  public barChartOptions:any = {
   scaleShowVerticalLines: false,
   responsive: true
   };
   public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2015'];
   public barChartType:string = 'bar';
   public barChartLegend:boolean = true;

   public barChartData:any[] = [
     {data: [65, 59, 80, 81, 56, 55, 40, 50], label: 'Series A'},
     {data: [28, 48, 40, 19, 86, 27, 90, 90], label: 'Series B'}
   ];

   // events
   public chartClicked(e:any):void {
     console.log(e);
   }

   public chartHovered(e:any):void {
     console.log(e);
   }

   public randomize():void {
     // Only Change 3 values
     /*let data = [
       Math.round(Math.random() * 100),
       59,
       80,
       (Math.random() * 100),
       56,
       (Math.random() * 100),
       40,
       (Math.random() * 100),
       10];*/
     let data = [10, 59, 80,10, 56, 10, 40, 10, 10];
     let clone = JSON.parse(JSON.stringify(this.barChartData));
     clone[0].data = data;
     clone[1].data = data;
     this.barChartData = clone;
     /**
      * (My guess), for Angular to recognize the change in the dataset
      * it has to change the dataset variable directly,
      * so one way around it, is to clone the data, change it and then
      * assign it;
      */
   }

   public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'red',
      borderColor: 'blue',
    },
    { // dark grey
      backgroundColor: 'green',
      borderColor: 'yellow',
    },
  ];

}
