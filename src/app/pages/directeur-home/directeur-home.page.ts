import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { DirecteurService } from 'src/app/services/directeur.service';
import { ToastService } from 'src/app/toasts/toast.service';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-directeur-home',
  templateUrl: './directeur-home.page.html',
  styleUrls: ['./directeur-home.page.scss'],
})
export class DirecteurHomePage implements OnInit {
  data = {
    jour: "الخميس",
    zone: "حي رحمة 1",
    responsable: "عمر",
    vendeur: "عبد القادر",
    noteJour: 1200,
    nbrTotalConso: 500,
    consoValide: 450,
    consoAttente: 48,
    consoRefuse: 2,
    demande: [
      {
        nomConso: "محمد",
        noteDemande: 40,
        prixDemande: 500,
        etatDemande: "V"
      },
      {
        nomConso: "محسين",
        noteDemande: 35,
        prixDemande: 350.60,
        etatDemande: "V"
      },
      {
        nomConso: "عادل",
        noteDemande: 0,
        prixDemande: 0,
        etatDemande: "A"
      },
      {
        nomConso: "طارق",
        noteDemande: 0,
        prixDemande: 0,
        etatDemande: "A"
      },
      {
        nomConso: "معاد",
        noteDemande: 0,
        prixDemande: 0,
        etatDemande: "R"
      },
    ]
  }

  data2:any[] = []


  // role1 = "V";
  // role2 = "R";
  // user = this.role1 == "V" ? true : false;

  isShow: boolean = false;
  numClickMenu: number = 0;
  detail: boolean = false;
  url = environment.url;
  role: any;
  constructor(private toast: ToastService, private route: Router, private storage: StorageService, private userService: UserService, private menu: MenuController, private directeurService: DirecteurService) {
    this.data.jour = new Date().toLocaleDateString('ar-EG-u-nu-latn', { weekday: 'long' });
    this.getDashboard()
  }

  getDashboard() {
    this.directeurService.getResponsableByDirecteur().subscribe((res: any) => {
      this.data2 = res
    }, err => {
      console.log(err);
    })
  }
  doRefresh(event:any) {
    this.getDashboard()
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.getDashboard()

  }

  ionViewWillEnter() {
    this.menu.enable(true, 'directeur-menu')
    this.getDashboard()

  }
  ionViewWillLeave() {
    this.menu.enable(false, 'directeur-menu')
  }

  async goTo(responsable:any) {
    this.role = await this.storage.get('role')
    if (this.role == 'D') {
      this.userService.login({ responsable }).subscribe({next: async (res: any) => {
        this.storage.set('token', res.token)
        this.route.navigate(["responsable-home"])
      }, error: (err) => {
        this.toast.presentErrorToast('', 3000)
      }})
    }
  }

}
