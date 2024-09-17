import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap [];

 mySnap!: FaceSnap;
 myOtherSnap!: FaceSnap;
 myLatestSnap!: FaceSnap;

 ngOnInit(): void {
  this.faceSnaps = [
    new FaceSnap(
    'De Kamela ',
    'Ma meilleure amie pour toujours !',
    'data:image/jpeg;base64,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',
    new Date(),
    200
    ),
    new FaceSnap (
      
    'Djomo',
    'Mon petit ami bisou !!  !',
    'data:image/jpeg;base64,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',
    new Date(),
    110
  ),
   new FaceSnap (
    'Un amour! ',
    'Best relation  !',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMt-YBm5lSvC-8_uQxtod6L0_5KDxaah16Q&s',
    new Date(),
    160
  )
  ];
    this.faceSnaps[1].setLocation('Reside au Mans')
 }
}
