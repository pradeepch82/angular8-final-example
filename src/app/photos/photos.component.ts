import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  title = 'Photos Table';

  photos: any;

  message = "";

  albumId=0;

  constructor(private ps: PhotosService,private route:ActivatedRoute) {
    console.log("  ######### PhotosComponent created ########");
  }

  ngOnInit() {
   this.albumId=this.route.snapshot.queryParams.albumId;


    if(this.albumId)
    this.getAllPhtosByAlbumId();
    else
    this.getAllPhotos();
    console.log("  ######### PhotosComponent initialized ########"+this.albumId);
  }
  ngOnDestroy() {
    console.log("  ######### PhotosComponent destroyed ########");
  }


  getAllPhotos() {
    this.ps.getAllPhotos()
      .subscribe(response => this.photos = response, error => this.message = error);
  }

  
  getAllPhtosByAlbumId() {
    this.ps.getAllPhotosByAlbumId(this.albumId)
      .subscribe(response => this.photos = response, error => this.message = error);
  }

}
