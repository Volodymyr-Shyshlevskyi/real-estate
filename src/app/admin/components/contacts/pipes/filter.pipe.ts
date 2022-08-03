import { Pipe, PipeTransform } from '@angular/core';
import { iContact } from 'src/app/admin/components/contacts/models/i-contact';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: iContact[], search: string = ''): iContact[] {
    if (!search.trim()) {
      return users;
    }
    return users.filter (user => {
      return user.name.toLowerCase().includes(search.toLocaleLowerCase())
    })
  }

}
