import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MockInvestmentService } from '../mock-investment.service';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chart: any;

  constructor(private mockInvestmentService: MockInvestmentService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData(): void {
    this.mockInvestmentService.getInvestmentData().subscribe(data => {
      this.mockInvestmentService.getInvestmentLabels().subscribe(labels => {
        this.createChart(data, labels);
      });
    });
  }

  createChart(data: number[], labels: string[]): void {
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          }
        }
      }
    });
  }
}
