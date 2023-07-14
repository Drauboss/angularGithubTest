import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  
  private dialogOpened = false;
  
  owner = "";
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

  setOwner(owner: any) {
    this.owner = owner;
  }

  getOwner() {
    return this.owner;
  }

  setDialogOpened(value: boolean): void {
    this.dialogOpened = value;
  }
}
