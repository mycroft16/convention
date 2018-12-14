import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { IConvention } from '../../shared/interfaces/convention.interface';

@Injectable()
export class ConventionsService {
    constructor(private apiService: ApiService) { }

    public loadConventions(): Observable<IConvention[]> {
        return this.apiService.get(
            'Conventions/Get',
            {
                params: { }
            }
        );
    }
}