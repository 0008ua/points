import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameActionConfirmModalData } from 'src/app/interfaces';

@Component({
  selector: 'app-action-confirm',
  templateUrl: './action-confirm.component.html',
  styleUrls: ['./action-confirm.component.scss'],
})
export class ActionConfirmComponent implements OnInit {
  @Input() data: GameActionConfirmModalData;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalController.dismiss(null, 'confirm');
  }
}
