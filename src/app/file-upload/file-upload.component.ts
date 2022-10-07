import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file
  uploadCard: boolean = true;

  // Inject service 
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event) {
      this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
      this.loading = !this.loading;
      console.log(this.file);
      this.fileUploadService.upload(this.file).subscribe(
          (response: any) => {
            let data = JSON.parse(response);
            if (data.status == 'OK'){
              //file uploaded to the server
              this.loading = false;
              this.uploadCard = false;
              let xdata = data.x;
              let ydata = data.y;
              let popt = data.params;
              console.log(xdata);
              console.log(ydata);
              console.log(popt);

            } else {
              console.error("Network Error")
            }
          }
      );
  }
}