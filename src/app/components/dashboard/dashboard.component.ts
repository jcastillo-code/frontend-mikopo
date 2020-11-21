import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public Highcharts = Highcharts;
  public chartOptions:any;
  public dataGraphic:any;

  constructor(private _productService: ProductService) { 
    this.dataGraphic = [];
  }

  ngOnInit(): void {

    this._productService.dataGraphic().subscribe( (data:any)=>{

      data.forEach( elem =>{
        this.dataGraphic.push({name: elem.name, y: parseInt(elem.y)});
      });

      this.buildGraphic();
    });

    

  }

  buildGraphic(){

      let componentScope = this;

      this.chartOptions = {

        chart: {
          type: 'column'
        },
        title: {
            text: 'Ventas 2020'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total ventas por producto'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.f}</b> <br/>'
        },

        series: [
            {
                name: "Ventas",
                colorByPoint: true,
                data: this.dataGraphic
            }
        ]
      };
      

    }
}

