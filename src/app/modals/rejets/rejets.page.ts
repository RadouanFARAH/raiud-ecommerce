import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ParametresService } from 'src/app/services/parametres.service';

@Component({
  selector: 'app-rejets',
  templateUrl: './rejets.page.html',
  styleUrls: ['./rejets.page.scss'],
})
export class RejetsPage implements OnInit {
  motif: any;
  custom_motif: any;
  chosen_number: any;
  constructor(public modalController: ModalController, private paramService: ParametresService, public toastController: ToastController) { }
  idconsommateur: any;
  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  radioGroupChange(e: any) {
    this.chosen_number = e.target.value
  }
  sendMofitRejectOreder() {
    let data = {
      idconsommateur: this.idconsommateur,
      number:this.chosen_number,
      motif: this.custom_motif
    }
    // console.log(data);
    
    this.paramService.sendMofitRejectOreder(data).subscribe(async (res) => {
      const toast = await this.toastController.create({
        message: 'تمت العملية بنجاح',
        duration: 2000,
        position: 'top',
        cssClass: "successtoastclass"
      });
      toast.present();
      this.dismiss();

    }, async err => {
      const toast = await this.toastController.create({
        message: 'وقع خطأ المرجو اعادة المحاولة',
        duration: 2000,
        position: 'top',
        cssClass: 'failedtoastclass'
      });
      toast.present();
    })
    
  }

}
