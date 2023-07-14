import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-api-key-dialog',
  templateUrl: './api-key-dialog.component.html',
  styleUrls: ['./api-key-dialog.component.css']
})
export class ApiKeyDialogComponent implements OnInit {

  owner?: string;
  apiKey?: string;

  constructor(public dialogRef: MatDialogRef<ApiKeyDialogComponent>) {}

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    // Hier können Sie die Logik implementieren, um den API-Schlüssel zu speichern und zu verwenden
    console.log('API Key:', this.apiKey);
    console.log('Owner:', this.owner);
    this.dialogRef.close({"api": this.apiKey, "owner": this.owner});
  }
}
