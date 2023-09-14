import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/common/api.service';
import { AttachmentService } from 'src/app/services/common/attachment.service';
import { TokenService } from 'src/app/services/common/token.service';
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
    private ats: AttachmentService,
    private tkn: TokenService,
    private http: HttpClient
  ) { }

  env: any = environment;
  ln: any = this.api.ln.data;

  @Input() object_type: string = "";
  @Input() object_id_key: string = "";
  object_id: string = "";

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.object_id = params[this.object_id_key];
      this.load()
    });
  }

  all: attachment[] = []
  async load(){
    this.all = await this.ats.get(this.object_type, this.object_id)
  }

  is_add_open: boolean = false
  new_files: attachment[] = []
  add_init(){
    this.is_add_open = true
  }
  async on_select( ev: any ){
    const files = ev.target.files
    let i = 0
    while(i<files.length){
      const f: File = files[i]
      const a: attachment = {
        file: f,
        name: f.name,
        file_size : (f.size/1000).toFixed(0) + ' Kb',
        preview: "assets/icon/document-attach.png"
      }
      if(f.type.startsWith("image/")){
        const r = new FileReader()
        r.onload = ()=>{ a.preview = r.result }
        r.readAsDataURL(f)
      }
      this.new_files.push(a);
      i++
    }
  }
  add_remove(index:number) {
    this.new_files.splice(index, 1)
  }
  async add_process(){
    if(this.new_files.length==0)
      return this.api.Toast(this.ln.no_file_selected || "No files selected")
    await this.api.showLoader(this.ln.uploading || "Uploading" )
    while( this.new_files.length>0 ){
      let f = this.new_files[0]
      const fd = new FormData()
      fd.append("object_type", this.object_type)
      fd.append("object_id", this.object_id)
      fd.append("name", f.name as string)
      fd.append("info", f.info as string)
      fd.append("File", f.file as File, f.file?.name)
      f.busy = true
      const res: any = await this.api.post( 'attachment/save', fd, true )
      f.busy = false
      f.error = res.ok
      if(!res.ok) break
      else this.new_files.splice(0,1)
    }
    if(this.new_files.length>0) this.api.Toast( this.ln.file_error || "File Error" )
    else{
      this.load()
      this.api.Toast(this.ln.file_uploaded_successfully || "File uploaded successfully")
    }
    this.api.hideLoader()
    this.is_add_open = false
  }

  selected: attachment = {}
  view_idx: number = 0
  is_view_open: boolean = false
  async view_init(idx: number=0){
    this.view_idx = idx
    this.selected = this.all[idx]
    this.selected.preview = "/assets/icon/document-attach.png"
    if(this.selected.file_type?.startsWith('image/'))
      this.selected.preview = await this.ats.get_preview(this.selected)
    this.is_view_open = true
  }
  async download(){
    const p: string = await this.ats.get_preview(this.selected)
    this.api.download( this.selected.name as string, p )
  }

  async remove(a: attachment){
    const ans: boolean = await this.api.confirm(
      this.ln.delete_attachment || "Delete Attachment?",
      this.ln.do_you_want_to_delete_attachment || "Do you want to delete this attachment?",
      this.ln.delete || "Delete",
      this.ln.no || "No"
    )
    if(ans){
      const res: any = await this.ats.remove(a)
      if(res){
        this.api.Toast(this.ln.attachment_deleted || "Attachment Deleted")
        this.load()
      }else this.api.Toast(this.ln.unable_to_delete || "Unable to delete")
    }
  }



}
