import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: [], searchText: string): any[] {
    if(!searchText) return items;
      searchText = searchText.toString();      
      var filters = { title: [searchText]};
      var filteredData = this.multiFilter(items, filters);
      return filteredData;
   }

   multiFilter(array, filters) {
    return array.filter(o => Object.keys(filters).every(k =>[].concat(filters[k]).some(v => o[k].includes(v))));
}
}
