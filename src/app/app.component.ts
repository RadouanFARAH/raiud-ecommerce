import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SharedService } from './shared.service';

import {
  Platform,
  AlertController,
  IonRouterOutlet,
  ToastController,
} from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { ToastService } from './toasts/toast.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ParametresService } from './services/parametres.service';
import { environment } from 'src/environments/environment';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  name: string = '';
  id: any;
  role: any;
  profileURL: any = '';
  image: any;
  newProfileURL!: SafeUrl;
  connectedID: any;
  url: string = environment.url;
  subscription: any;
  hasBoss: any= true;
  constructor(
    private userService: UserService,
    private platform: Platform,
    private router: Router,
    private paramService: ParametresService,
    private toast: ToastService,
    private sanitizer: DomSanitizer,
    private helper: JwtHelperService,
    private storage:StorageService,
    private route: ActivatedRoute,
    private geolocation: Geolocation,
    private sharedService: SharedService
  ) {
    console.log("**************************************************************TEST***************************************************************************");
    this.userService.test().subscribe({
      next:(res:any)=>{
        console.log("result: ",res);
      },
      error:(error:any)=>{
        console.log("error: ",error);
      }
    })
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log();
    });
    this.userService.name.subscribe((n) => {
      this.name = n;
    });
    this.userService.role.subscribe((n) => {
      this.role = n;
    });

    this.initializeApp();

  }
  updateVariableValue(newValue: boolean) {
    this.sharedService.setVariableValue(newValue);
  }
  async ngOnInit() {
    // await this.storage.create();
    this.storage.get('role')?.then((role) => {
      if (role) {
        this.role = role;
      }
    });
    this.storage.get('hasBoss')?.then((value) => {
      console.log("hasBoss", value);
      
      this.hasBoss = value
    })
    this.storage.get('id')?.then((id) => {
      if (id) {
        this.connectedID = id;
        console.log(
          this.url + '/images/image_profile_image_' +
          id +
          '.png'
        );

        this.profileURL =
          this.url + '/images/image_profile_image_' +
          id +
          '.png';
      }
    });
    this.storage.get('username')?.then((username) => {
      if (username) {
        this.name = username;
      }
    });
    this.userService.name.subscribe((n) => {
      this.name = n;
    });
  }
  ionViewWillEnter() {
    this.userService.name.subscribe((n) => {
      this.name = n;
    });
  }
  logout(d:any) {

    if (d === 'C') {
      this.storage.get('tokenV')?.then((tokenV) => {
        if (tokenV) {
          this.storage.set('token', tokenV);
          this.router.navigate(['/vendeur-home']).then(() => {
          });
        } else {
          this.storage.get('tokenR')?.then((tokenR) => {
            if (tokenR) {
              this.storage.set('token', tokenR);
              this.router.navigate(['/responsable-home']).then(() => {
              });
            } else {
              this.storage.clear()?.then((e) => {
                this.storage.set('visited', true);
                this.router.navigate(['/login']).then(() => {
                });
              });
            }
          })
        }
      });
    } else if (d == 'V') {
      this.storage.get('tokenR')?.then((tokenR) => {
        if (tokenR) {
          this.storage.set('token', tokenR);
          this.router.navigate(['/responsable-home']).then(() => {
          });
        } else {
          this.storage.clear()?.then((e) => {
            this.storage.set('visited', true);
            this.router.navigate(['/login']).then(() => {
            });
          });
        }
      });
    } else if (d == 'R') {
      this.storage.get('tokenD')?.then((tokenD) => {
        if (tokenD) {
          this.storage.set('token', tokenD);
          this.router.navigate(['/directeur-home']).then(() => {
          });
        } else {
          this.storage.clear()?.then((e) => {
            this.storage.set('visited', true);
            this.router.navigate(['/login']).then(() => {
            });
          });
        }
      });
    } else if (d == 'D') {
      this.storage.clear()?.then((e) => {
        this.storage.set('visited', true);
        this.router.navigate(['/login']).then(() => {
        });
      });
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setStyle({style:Style.Default}).catch(()=>{});

      SplashScreen.hide().catch(()=>{});;
      this.platform.backButton.subscribeWithPriority(9999, () => {
        // do nothing
      });
      this.storage.get('role')?.then((role) => {
        console.log(" route ************** ", this.router.url)

        if (this.router.url == "/policy") {
          this.router.navigate(["/policy"]).then(() => {
          });
        }
        else if (this.router.url == "/slide") {
          this.router.navigate(["/slide"]).then(() => {
          });
        }
        else if (role == 'C') {
          this.router.navigate(['categories']);
        } else if (role == 'V') {
          this.router.navigate(['vendeur-home']);
        } else if (role == 'R') {
          this.router.navigate(['responsable-home']);
        } else if (role == 'D') {
          this.router.navigate(['directeur-home']);
        }
      });
      // this.storage.get('visited').then((isVisited) => {
      //   console.log(" route ************** ",this.router.url)

      //   if (this.router.url == "/policy"){
      //     this.router.navigate(["/policy"]).then(() => {
      //     });
      //   }
      //   else if (!isVisited) {
      //     this.router.navigate(['/logaccount']).then(() => {
      //       this.storage.set('visited', true);
      //     });
      //   }else{
      //     this.storage.get('role').then((role) => {
      //       if (this.router.url == "/policy"){
      //         this.router.navigate(["/policy"]).then(() => {
      //         });
      //       }else if (role == 'C') {
      //         this.router.navigate(['categories']);
      //       } else if (role == 'V') {
      //         this.router.navigate(['vendeur-home']);
      //       } else if (role == 'R') {
      //         this.router.navigate(['responsable-home']);
      //       } else if (role == 'D') {
      //         this.router.navigate(['directeur-home']);
      //       }else{
      //         this.router.navigate([this.router.url]).then(() => {
      //         });
      //       }

      //     });
      //   }
      // });
    });
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  showing = 'إخفاء'

  toggleValue: boolean = false;
  toggleChanged() {
    this.updateVariableValue(this.toggleValue)
    if (this.toggleValue) {
      this.showing = 'إخفاء'
      this.requestLocalizationPermission()
    } else {
      this.showing = 'إظهار'
      this.undoLocalizationPermission()
    }
  }
  undoLocalizationPermission() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  requestLocalizationPermission() {
    const options: PositionOptions = {
      enableHighAccuracy: true,  // Enable high accuracy mode
      timeout: 5000,             // Set a timeout value in milliseconds
      maximumAge: 0              // Set the maximum age for cached location
    };

    this.subscription = Geolocation.watchPosition({},()=>{}).catch(()=>{})
  }







  onChange(e:any) {
    if (e.target.files[0].size > 10000000) {
      this.toast.presentErrorToast('حجم الصورة كبير جدا', 5000);
      return;
    } else {
      this.profileURL = this.sanitizeImageUrl(
        URL.createObjectURL(e.target.files[0])
      );
      this.image = e.target.files[0];
      const formData = new FormData();
      if (this.image) {
        formData.append(
          'image',
          this.image,
          'profile_image_' +
          this.connectedID +
          '.' +
          this.image.name.split('.')[1]
        );
        // console.log("profile image file name is ","profile_image_" + res.id + '.' + this.image.name.split('.')[1]);

        this.paramService.setProfileImage(formData).subscribe(
          (res: any) => {
            console.log('profile image uploaded with success');
          },
          async (err) => {
            console.log(err);
          }
        );
      }
    }
  }
}
