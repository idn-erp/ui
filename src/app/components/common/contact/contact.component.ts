import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/common/api.service';
import { ContactService } from 'src/app/services/common/contact.service';
import { CountryService } from 'src/app/services/common/country.service';
import { contact, country } from 'src/app/types/interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent  implements OnInit {

  constructor(
    private api: ApiService,
    private acr: ActivatedRoute,
    private mdc: ModalController,
    private cnt: ContactService,
    private ctr: CountryService
  ) { }

  @Input() object_type: string = ""
  @Input() object_id_key: string = ""
  object_id: string = ""

  ln: any = this.api.ln.data;
  ngOnInit() {
    this.acr.queryParams.subscribe(
      p=>{
        this.object_id = p[this.object_id_key]
        this.load()
      }
    )
  }

  all: contact[] = []
  load(){
    if(this.object_id)
      this.cnt.search(this.object_type, this.object_id).then(
      (r:any)=>{
        console.log(r)
        this.all = r;
      }
    );
  }

  is_act_open: boolean = false
  act_contact: contact = {}
  act_type: string = "add"
  countries: country[] = []
  act_init( t: string = "add", c: contact = {} ){
    this.act_type = t
    this.act_contact = {
      object_type : this.object_type,
      object_id : this.object_id,
      type : "personal"
    }
    if(c.id) this.act_contact = {...c}
    this.ctr.getall().then(a=>this.countries = a)
    this.is_act_open = true
  }
  async act_process(){
    if(!this.act_contact.object_type || !this.act_contact.object_id || !this.act_contact.full_name || !this.act_contact.country_id){
      this.api.Toast(this.ln.name_country_mandate || "Name and Country is mandatory")
      return;
    }
    await this.api.showLoader(this.ln.saving || "Saving contact...")
    let res: any = {ok:false}
    if(this.act_type=="add") res = await this.cnt.save(this.act_contact)
    else res = await this.cnt.update(this.act_contact)
    this.api.hideLoader()
    if(res.ok){
      this.api.Toast(this.ln.saved || "Saved")
      this.all = res.data
      this.act_contact = {}
      this.is_act_open = false
    }else{
      this.api.Toast(this.ln.cannot_save || "Cannot save")
    }
  }

  async remove( c: contact ){
    const a = await this.api.confirm(
      this.ln.delete_contact || "Delete Contact?",
      this.ln.do_you_want_to_delete_contact || "Do you want to delete this contact?",
      this.ln.delete || "Delete",
      this.ln.no || "No"
    )
    if(a){
      await this.api.showLoader(this.ln.removing || "Removing")
      const res: any = await this.cnt.remove(c)
      this.api.hideLoader()
      if(res.ok){
        this.all = res.data
        this.api.Toast(this.ln.contact_removed || "Contact removed")
      }else this.api.Toast(this.ln.contact_removed || "Contact cannot be removed")
    }
  }

}
