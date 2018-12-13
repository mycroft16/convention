import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private apiService: ApiService) { }

    public getAuthToken(): Observable<string> {
        return this.apiService.get(
            'Auth/GetAuthToken',
            {
                params: { },
                loadingIndicator: true
            }
        );
    }
}