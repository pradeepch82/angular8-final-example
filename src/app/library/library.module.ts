import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [BookComponent, MemberComponent],
  imports: [
    CommonModule
  ],
  bootstrap:[BookComponent]
})
export class LibraryModule {

  constructor(){
    console.log("LibraryModule created...");
    
  }

 }
