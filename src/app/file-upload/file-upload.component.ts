import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {saveAs} from "file-saver";
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
@ViewChild('fileImage', {static: true}) fileimage: ElementRef
  constructor() { }

  ngOnInit() {
  }


  // onClickDownload(val){
  
  // }

  onClickDownload(val: any) {
    console.log(val);
    console.log(this.fileimage);
     const pdfPath ='./assets/sample.pdf';
    // const blob = new Blob([val], { type: 'text/csv' });
    // const url= window.URL.createObjectURL(blob);
    // window.open(url);
    saveAs(pdfPath , 'file')
  }

}
