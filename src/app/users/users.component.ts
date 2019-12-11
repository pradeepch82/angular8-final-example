import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { PagerService } from '../services/pager.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title="Users List";
  user:any;
  message="";
  userId=0;




  constructor(private us:UsersService,private route:ActivatedRoute) {
    console.log("#######UsersComponent created#########");
   }

  ngOnInit() {

 this.userId=this.route.snapshot.params.userId;
 console.log("userId  :"+this.userId);

 this.userId=parseInt(this.route.snapshot.paramMap.get("userId"));
 console.log("userId  :"+this.userId);
 
 if(this.userId)
 this.getUserById();

  console.log("#######UsersComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######UsersComponent destroyed#########");
   }


   getUserById(){
    this.us.getUserByUserId(this.userId)
           .subscribe(response=>this.user=response,error=>this.message=error);   
   }



}
