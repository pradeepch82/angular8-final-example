import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

private baseURL="https://jsonplaceholder.typicode.com/photos";


  constructor(private http:HttpClient) {
    console.log("......PhotosService created.......");
   }

  getAllPhotos():Observable<any>{
    return this.http.get(this.baseURL);
  }


  getPhotoById(photoId:number):Observable<any>{
    return this.http.get(this.baseURL+"/"+photoId);
  }


  getAllPhotosByAlbumId(albumId:number):Observable<any>{
    return this.http.get(this.baseURL+"?albumId="+albumId);
  }

}
