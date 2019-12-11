import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { PagerService } from '../services/pager.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  title="All Posts";
  posts:any;
  message="";
  
  userId=0;


  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];





  constructor(private ps:PostsService,private route:ActivatedRoute,private pagerService:PagerService) {
    console.log("#######PostsComponent created#########");
   }

  ngOnInit() {

    this.userId=this.route.snapshot.queryParams.userId;
    //this.userId=parseInt(this.route.snapshot.queryParamMap.get("userId"));

    console.log("User Id :"+this.userId);

if(this.userId)
this.getAllPostsByUserId();
else
this.getAllPosts();

  console.log("#######PostsComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######PostsComponent destroyed#########");
   }


   getAllPosts(){
    this.ps.getAllPosts()
           .subscribe(response=>{this.posts=response;
          this.setPage(1)
          },error=>this.message=error);   
   }

   getAllPostsByUserId(){
    this.ps.getAllPostsByUserId(this.userId)
           .subscribe(response=>{this.posts=response;
          this.setPage(1);
          },error=>this.message=error);   
   }


   setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.posts.length, page);

    // get current page of items
    this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
