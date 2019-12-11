import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

 
  title = 'Albums Table';

  albums: any;

  message = "";

  userId=0;

  constructor(private as: AlbumsService,private route:ActivatedRoute) {
    console.log("  ######### AlbumsComponent created ########");
  }

  ngOnInit() {
   this.userId=this.route.snapshot.queryParams.userId;


    if(this.userId)
    this.getAllAlbumsByUserId();
    else
    this.getAllAlbums();
    console.log("  ######### AlbumsComponent initialized ########"+this.userId);
  }
  ngOnDestroy() {
    console.log("  ######### AlbumsComponent destroyed ########");
  }


  getAllAlbums() {
    this.as.getAllAlbums()
      .subscribe(response => this.albums = response, error => this.message = error);
  }

  
  getAllAlbumsByUserId() {
    this.as.getAllAlbumsByUserId(this.userId)
      .subscribe(response => this.albums = response, error => this.message = error);
  }

}
