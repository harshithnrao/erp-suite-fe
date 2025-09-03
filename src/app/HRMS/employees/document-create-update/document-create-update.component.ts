import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Utility } from 'src/app/common/Utility';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/permission.service';
import { HttpRequestModel } from 'src/app/common/common.model';
import { lastValueFrom } from 'rxjs';
import { Document } from './document.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fury-quotes-create-update',
  templateUrl: './document-create-update.component.html',
  styleUrls: ['./document-create-update.component.scss']
})
export class DocumentCreateUpdateComponent  {

  static id = 100;
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  quoteDetails: Document[] = [];
  documentForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialogRef: MatDialogRef<DocumentCreateUpdateComponent>
  ) {
    this.documentForm = this.fb.group({
      employeeId: [null, Validators.required],
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      issueDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      description: ['', Validators.required],
      createdBy:'admin',
      validFrom: ['', Validators.required],
      validTill: ['', Validators.required]
    });
  }

  onFileSelect(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.documentForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('data', JSON.stringify(this.documentForm.value));

      this.http.post('http://192.168.0.55:8080/api/v1/documents', formData).subscribe(
        (response) => {
          console.log('Document created successfully:', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error creating document:', error);
        }
      );
    } else {
      console.error('Form is invalid or file not selected');
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}