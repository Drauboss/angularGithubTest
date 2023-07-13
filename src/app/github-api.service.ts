import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  
  private dialogOpened = false;

  token = '';
  drawer: any;
  
  constructor() { }
  
  isDialogOpened(): boolean {
    return this.dialogOpened;
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
  }
  setDialogOpened(value: boolean): void {
    this.dialogOpened = value;
  }
}
