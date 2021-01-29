import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

    transform(value: string, ...args: any[]): any {
        if (value.length === 11) {
            console.log('11')
            return value.replace(/\D/g, '').replace(/(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4');
        }
    }


}
