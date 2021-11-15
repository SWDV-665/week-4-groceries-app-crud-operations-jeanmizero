import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
// Add Controller
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../providers/groceries-service.service';
import { InputDialogService } from '../providers/input-dialog.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Grocery List';

  constructor(
    //Add toast controller
    public toastController: ToastController,
    public alertController: AlertController,
    public dataService: GroceriesServiceService,
    public inputDialogService: InputDialogService
  ) {}
  loadItems() {
    return this.dataService.getItems();
  }

  // Remove items
  async removeItem(item, index) {
    console.log('Removing Item -', item, index);
    const toast = await this.toastController.create({
      message: 'Successfully removed - ' + item.name + '...',
      duration: 3000,
    });
    toast.present();
    this.dataService.removeItem(index);
  }

  // Edit items
  async editItem(item, index) {
    console.log('Edit Item - ', item, index);
    const toast = await this.toastController.create({
      message: 'Successfully Editing items - ' + index + '...',
      duration: 3000,
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }
  // Add items
  addItem() {
    console.log('Adding Item');
    this.inputDialogService.showPrompt();
  }
}
