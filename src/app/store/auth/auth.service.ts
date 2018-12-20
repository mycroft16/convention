import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private apiService: ApiService) { }

    public getAuthToken(): Observable<string> {
        return this.apiService.get(
            'Auth/GetAuthToken',
            {
                params: { }
            }
        );
    }

    public getLoginToken(username: string, password: string): Observable<string> {
        return this.apiService.get(
            'Auth/GetLoginToken',
            {
                params: { username: username, password: password }
            }
        ).pipe(
            map(response => this.storeToken(response))
        );
    }

    storeToken(response: string) {
        localStorage.setItem('token', response);
        return response;
    }
}