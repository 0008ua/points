import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ErrorLoggerDocumentDto } from 'src/app/dtos';

@Component({
  selector: 'app-error-details',
  templateUrl: './error-details.component.html',
  styleUrls: ['./error-details.component.scss'],
})
export class ErrorDetailsComponent implements OnInit, AfterViewInit {
  @Input() error: ErrorLoggerDocumentDto;
  constructor(private modalController: ModalController) {}

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.error);
  }

  ngOnInit() {
    console.log('ngOnInit', this.error);
  }

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }
}
