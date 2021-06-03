import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService, Moto } from '../services/data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  data : any;
  moto: Moto[] = [];

constructor(private route: ActivatedRoute, private router: Router, private alertController : AlertController, private dataService: DataService) {
  this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.parametros;
      
    }
  });
}
async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: '¿Deseas eliminar el elemento?',
    buttons: [
      {
        text: 'Si',
        role: '',
        cssClass: 'secondary',
        handler: (blah) => {
          this.dataService.delete(this.data.id);
          this.router.navigate(['/home']);
        }
      }, {
        text: 'No',
        handler: () => {
          console.log('cancelar');
        }
      }
    ]
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

  ngOnInit() {
    console.log(this.data);
  }

}
