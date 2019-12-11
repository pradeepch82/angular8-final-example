import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { PagerService } from '../services/pager.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  title = 'Comments Table';

  comments: any;

  message = "";

  postId=0;

// pager object
pager: any = {};

// paged items
pagedItems: any[];

  constructor(private cs: CommentsService,private route:ActivatedRoute,private pagerService:PagerService ) {
    console.log("  ######### CommentsComponent created ########");
  }

  ngOnInit() {
   this.postId=this.route.snapshot.queryParams.postId;


    if(this.postId)
    this.getAllCommentsByPostId();
    else
    this.getAllComments();
    console.log("  ######### CommentsComponent initialized ########"+this.postId);
  }
  ngOnDestroy() {
    console.log("  ######### CommentsComponent destroyed ########");
  }


  getAllComments() {
    this.cs.getAllComments()
      .subscribe(response => {this.comments = response;
      this.setPage(1);

      
      }, error => this.message = error);
  }

  
  getAllCommentsByPostId() {
    this.cs.getAllCommentsByPostId(this.postId)
      .subscribe(response => {this.comments = response;
      this.setPage(1);
      }, error => this.message = error);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.comments.length, page);

    // get current page of items
    this.pagedItems = this.comments.slice(this.pager.startIndex, this.pager.endIndex + 1);
}



}
