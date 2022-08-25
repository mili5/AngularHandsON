import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any= sessionStorage.getItem('email');
  productList =[];
  productListChunks=[];

  constructor(private dashboardService: DashboardService) { }

  title= 'Card View Demo';
  gridColumns=3;

  toggleGridColumns(){
    this.gridColumns=this.gridColumns=== 3?4:3;
  }

  async ngOnInit() {
    let perChunk=3;
    await this.dashboardService.getAllData().subscribe((data:any)=>{
      console.log(data);
      this.productList=data;
    });
  }

    logout(){
      sessionStorage.clear();
 }
    
  

}
