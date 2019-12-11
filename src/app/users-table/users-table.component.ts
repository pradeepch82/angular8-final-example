import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PagerService } from '../services/pager.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
 // providers:[UsersService]
})
export class UsersTableComponent implements OnInit {

  title="Users Table";
  users:any;
  message="";


  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private us:UsersService,private pagerService:PagerService) {
    console.log("#######UsersTableComponent created#########");
   }

  ngOnInit() {
 this.getAllUsers();

  console.log("#######UsersTableComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######UsersTableComponent destroyed#########");
   }


   getAllUsers(){
    this.us.getAllUsers()
           .subscribe(response=>{this.users=response;
            this.setPage(1)
           },error=>this.message=error);   
   }


   setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.users.length, page,5);

    // get current page of items
    this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
