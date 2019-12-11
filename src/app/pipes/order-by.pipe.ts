import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field?:string,descending?:boolean): any[] {

     var filedType=typeof(array[0][field]);
     console.log("Filed Name :"+field+"   Field Type :"+filedType);


     if(filedType=='number')
     array.sort((e1,e2)=>e1[field]-e2[field]);
     else if(filedType=='string')
     array.sort((e1,e2)=>e1[field].localeCompare(e2[field]));
     else if(filedType=='object')
     array.sort((e1,e2)=>e1[field].getTime()-e2[field].getTime());


     if(descending)
     array.reverse();


    return array;
  }

}
