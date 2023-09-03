import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { attachment } from 'src/app/types/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss'],
})
export class AttachmentComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  env: any = environment;
  ln: any = this.api.ln.data;

  @Input() object_type: string = ""; // The type of the object to attach files to
  @Input() object_id_key: string = ""; // The key of the object id in the url params
  object_id: string = ""; // The id of the object to attach files to
  attachments: attachment[] = []; // The array of attachment objects
  uploadProgress: number = 0; // The progress of the upload in percentage
  uploadStatus: string = ''; // The status of the upload

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.object_id = params[this.object_id_key];
    });
  }


  onFileChange(event:any) {
    // This function is called when files are selected
    const files = event.target.files; // Get the files from the event
    for (let i = 0; i < files.length; i++) {
      const file = files[i]; // Get each file
      const reader = new FileReader(); // Create a file reader
      reader.onload = () => {
        // When the reader is loaded
        const attachment: attachment = {
          // Create an attachment object
          file: file, // Set the file object
          name: file.name, // Set the name as the file name
          info: '', // Set the info as empty string
          preview: reader.result, // Set the preview as the reader result
        };
        if (!file.type.startsWith('image/')) {
          // If the file is not an image
          attachment.preview =
            'assets/icon/document-attach.png'; // Set the preview as an icon
        }
        this.attachments.push(attachment); // Push the attachment to the array
      };
      reader.readAsDataURL(file); // Read the file as data url
    }
  }

  removeAttachment(index:number) {
    // This function is called when an attachment is removed
    this.attachments.splice(index, 1); // Remove the attachment from the array by index
  }

  saveAttachments() {
    // This function is called when the save button is clicked
    const formData = new FormData(); // Create a form data object
    formData.append('object_type', this.object_type); // Append the object type to the form data
    formData.append('object_id', this.object_id); // Append the object id to the form data
    for (let i = 0; i < this.attachments.length; i++) {
      // For each attachment in the array
      const att = this.attachments[i]; // Get the attachment object
      formData.append('files', att.file as any); // Append the file to the form data with key 'files'
      formData.append('names', att.name as string); // Append the name to the form data with key 'names'
      formData.append('infos', att.info as string); // Append the info to the form data with key 'infos'
    }
    this.http.post(this.env.api_url + 'attachment/save', formData, { observe: 'events' }).subscribe(
      (event: HttpEvent<any>) => {
        // Post the form data to the server using http client and subscribe to the events
        switch (event.type) {
          case HttpEventType.Sent:
            // When the request is sent
            this.uploadStatus = 'Uploading...'; // Set the upload status as 'Uploading...'
            break;
          case HttpEventType.Response:
            // When a response is received
            this.uploadStatus = 'Upload completed.'; // Set the upload status as 'Upload completed.'
            break;
          case HttpEventType.UploadProgress:
            // When an upload progress event is received
            this.uploadProgress = Math.round(
              (100 * event.loaded) / (event.total || 1),
            ); // Calculate and set the upload progress in percentage
            break;
        }
      },
      (error) => {
        // When an error occurs
        this.uploadStatus = 'Upload failed.'; // Set the upload status as 'Upload failed.'
        console.error(error); // Log the error to the console
      },
    );
  }
}
