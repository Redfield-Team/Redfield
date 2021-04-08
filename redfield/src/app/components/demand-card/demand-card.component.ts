import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import * as moment from 'moment';


@Component({
  selector: 'app-demand-card',
  templateUrl: './demand-card.component.html',
  styleUrls: ['./demand-card.component.css']
})
export class DemandCardComponent implements OnInit {
 
   humanized: string="";

  demands: any = [];

  constructor(private demandData: UserService) { 
    this.humanized = moment.duration(moment().diff("2021-04-07T05:43:23.840Z")).humanize();
   
  }
  getdate(date:string){
     return this.humanized = moment.duration(moment().diff(date)).humanize();

  }

  ngOnInit(): void {
    this.getDemands()
  }

  getDemands() {
    this.demandData.getAllDemand().subscribe(data => {
    //  let fixeData = data.map(e => {
      console.log("dataaaaaaaaaaaaaa",data)
    //  })
      this.demands=data
    })
  }

}
