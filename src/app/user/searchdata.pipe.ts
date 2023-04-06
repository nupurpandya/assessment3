import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchdata'
})
export class SearchdataPipe implements PipeTransform {

  transform(value:any,searchTerm: any): any {

    if(!searchTerm){
      return value
    }
    return value.filter((search: any) => search.username.toLowerCase().indexOf(searchTerm.toLowerCase())> -1 ||  search.description.toLowerCase().indexOf(searchTerm.toLowerCase())> -1 || search.statusid.toString().toLowerCase().indexOf(searchTerm.toLowerCase())> -1 || search.rate.toString().toLowerCase().indexOf(searchTerm.toLowerCase())> -1 || search.balance.toString().toLowerCase().indexOf(searchTerm.toLowerCase())> -1 )
  }

}
