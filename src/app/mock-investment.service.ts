// mock-investment.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockInvestmentService {
  getInvestmentData(): Observable<number[]> {
    // Mock data for the chart
    return of([300, 500, 100]);
  }

  getInvestmentLabels(): Observable<string[]> {
    // Mock labels for the chart
    return of(['Stocks', 'Bonds', 'Real Estate']);
  }
}
