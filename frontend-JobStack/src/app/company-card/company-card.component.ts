import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {

  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  search= this.activatedRoute.snapshot.paramMap.get("name");
  company = [];
  path ='';

  ngOnInit() {
    if(this.search != undefined){
      this.searchService.search(this.search).subscribe(
        res => {
          console.log(res);
          this.company = res.company;
          if(res.company[0].companyName == 'WSO2'){
            this.path = 'wso2-profile'
          }
          else if(res.company[0].companyName == 'Sysco Labs'){
            this.path = 'syscolabs-profile'
          }
          else{
            this.path = 'virtusa-profile'
          }

        }
      )
    }
    else{
      this.searchService.search('all').subscribe(
        res => {
          console.log(res);
          this.company = res.company;
        }
      )
    }
  }

}
