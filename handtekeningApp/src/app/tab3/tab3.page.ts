import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  password:string = "Admin0000";
  pass:string = "";
  passwordShown:boolean = false;
  passwordType:string = "password";
  
  

  constructor(public router: Router, public alertCtrl: AlertController) {}

  async failNoPassAlert() {
    const alert = await this.alertCtrl.create({
    subHeader: 'ERR_N_PASS',
    message: 'Het heeft echt een wachtwoord hoor...',
    buttons: ['OK']
   });
   await alert.present(); 
  }


  async failPassAlert() {
    const alert = await this.alertCtrl.create({
    subHeader: 'ERR_F_PASS',
    message: 'U bent niet ingelogd, fout wachtwoord.',
    buttons: ['OK']
   });
   await alert.present(); 
  }
  
  async presentAlert() {
    const alert = await this.alertCtrl.create({
    subHeader: 'Succes',
    message: 'U bent ingelogd!',
    buttons: ['OK']
   });
   await alert.present(); 
  }
    public togglePass(){
      if (this.passwordShown) {
        this.passwordShown = false;
        this.passwordType = "password"; 
      } else {
        this.passwordShown = true;
        this.passwordType = "text"; 
      }
    }
  
    public logIn() {
      console.log(this.pass);
      if (this.pass === this.password) {
        this.presentAlert();
        console.log("ingelogd");
        this.router.navigateByUrl('/admin');
      }
        else if(this.pass.length == 0){
          this.failNoPassAlert();
          console.log("Het heeft echt een wachtwoord hoor...");
        }
      else {
        this.failPassAlert();
          console.log("Fout wachtwoord!");
          
      }
     
    }

}
