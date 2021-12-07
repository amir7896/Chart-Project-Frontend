import { Component, OnDestroy, OnInit } from '@angular/core';
import { GraphsService } from 'src/app/services/Graphs/graphs.service';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions, ChartType , RadialChartOptions} from 'chart.js';
import { Color, BaseChartDirective, Label ,MultiDataSet, SingleDataSet} from 'ng2-charts';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {


  // ============
  // Bar Chart
  // ============
  data: any;
  chart: any[] = [];
  // =================
  // Doughunt Chart
  // =================
  chartdoughunt: any[] = [];
  datadoughunt: any;
  // ==============
  // Pie Chart
  // ==============
  chartpie: any[] = [];
  datapie: any;
  // ================
  // Radar Chart
  // ================
  chartradar: any[] = [];
  dataradar: any;
  // ==================
  // Line Chart
  // ==================
  chartline: any[] = [];
  dataline:any;
    // ==================
  // Polar Chart
  // ==================
  chartpolar: any[] = [];
  datapolar: any;
 
  constructor(private graphService: GraphsService
    ) { }


  ngOnInit(): void {
    this.barChart();
    this.getlinechart();
    this.getpieChart();
    this.getradarChart();
    this.polarChart();
    this.getdoughuntChart();
    
    // showing bar
    
  }

    // ====================
  // Bar Chart Chart
  // ====================
  barChart(){
    this.graphService.getBarChart().subscribe(res => {                                                                                                                                                                                      
      this.data = res;
      console.log(this.data);
     
      let barChartData = res.list[0].data;
      let barChartLabels = res.list[0].graphlabels;
      let barLabel = res.list[0].label;

      this.chart.push(new Chart('canvasbar', { 
        type: 'bar',
         data : {
          labels: barChartLabels,
          datasets: [
            {
              label:barLabel,
              data: barChartData,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0,0,0)',
                '#ffC0CB',
                ' #964B00',
                'blue'

              ],
            },
          ]
        },
        options: {
          responsive:true,
          plugins: {
            
          },
          legend:{
            position: 'top'
          }
        }
      }))
    })
  }

   // ======================
  // Line Chart
  // ======================
  getlinechart(){
    this.graphService.getLineChart().subscribe(res => {
      this.dataline = res;
      console.log(res);

      let lineChartData  = res.list[0].data;
      let lineChartLabel = res.list[0].label;
      let lineChartLabels = res.list[0].graphlabels;

      this.chartline.push(new Chart ('canvasline',{
        type:'line',
        data: {
          labels: lineChartLabels,
          datasets: [
            {
              label: lineChartLabel,
              data: lineChartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(0,128,0, 0.3)'
              ],
            }
          ]
        },
        options:{
          responsive: true,
          legend: {
            position: 'top'
          }
        }
      }))
    })
  }

  // ====================
  // Doughunt Chart
  // ====================
  getdoughuntChart(){
    this.graphService.getDoghuntChart().subscribe(res => {                                                                                                                                                                                      
      this.datadoughunt = res
      console.log(this.datadoughunt);

  
      let doughnutChartData = res.list[0].data;
      let doughnutChartLabels = res.list[0].graphlabels;
      let doughuntLabel = res.list[0].label;

      this.chartdoughunt.push(new Chart('canvas1', { 
        type: 'doughnut',
         data : {
          labels: doughnutChartLabels,
          datasets: [
            {
              label:doughuntLabel,
              data: doughnutChartData,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
            },
          ]
        },
        options: {
          responsive:true,
          plugins: {
          },
          legend:{
            position: 'top'
          }
        }
      }))
    })
  }
  // ====================
  // Pie Chart
  // ====================
  getpieChart(){
    this.graphService.getpieChart().subscribe(res => {                                                                                                                                                                                      
      this.datapie = res
      console.log(this.datapie);


      let pieChartData = res.list[0].data;
      let pieChartLabels = res.list[0].graphlabels;
      let pielabel = res.list[0].label;

      this.chartpie.push(new Chart('canvaspie', { 
        type: 'pie',
         data : {
          labels: pieChartLabels,
          datasets: [
            {
             
              label: pielabel,
              data: pieChartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(0,128,0, 0.3)'
              ],
            },
          ]
        },
        options: {
          responsive:true,
          plugins: {
            
          },
          legend:{
            position: 'top'
          }, 
          tooltips:{
            enabled:true,
            mode: 'single'
          }
        },
        
      }))
    })
  }

// ==================================
// Polar Chart
// ==================================
  polarChart(){
    this.graphService.getpolarChart().subscribe(res => {                                                                                                                                                                                      
      this.datapolar = res
      console.log(this.datapolar);


      let pieChartData = res.list[0].data;
      let pieChartLabels = res.list[0].graphlabels;
      let pielabel = res.list[0].label;

      this.chartpolar.push(new Chart('canvaspolar', { 
        type: 'polarArea',
         data : {
          labels: pieChartLabels,
          datasets: [
            {
             
              label: pielabel,
              data: pieChartData,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ],
            },

          ]
        },
        options: {
          responsive:true,
          plugins: {
            
          },
          legend:{
            position: 'top'
          }, 
          tooltips:{
            enabled:true,
            mode: 'single'
          }
        },
        
      }))
    })
  }

    // ====================
  // Radar Chart
  // ====================
  getradarChart(){
    this.graphService.getRadarChart().subscribe(res => {                                                                                                                                                                                      
      this.dataradar = res
      console.log(this.dataradar);


      let radarChartData = res.list[0].data;
      let radarChartLabels = res.list[0].graphlabels;
      let chartlabel=  res.list[0].label;

      this.chartradar.push(new Chart('canvasradar', { 
        type: 'radar',
         data : {
          labels: radarChartLabels,
          datasets: [
            {
              label: chartlabel,
              data: radarChartData,
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            },
            ],
        },
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      }))
    })
  }



}
