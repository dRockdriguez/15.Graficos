import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: []
})
export class RadarComponent{

  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

   public radarChartData:any = [
     {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
     {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
   ];
   public radarChartType:string = 'radar';

   // events
   public chartClicked(e:any):void {
     console.log(e);
   }

   public chartHovered(e:any):void {
     console.log(e);
   }

   public lineChartColors:Array<any> = [
    { // grey
      backgroundColor:'rgba(10,159,177,0.8)'
      borderColor: 'yellow'
    },
    {
        backgroundColor:'rgba(148,159,177,0.8)'
        borderColor:' green'
    }
  ];

}
