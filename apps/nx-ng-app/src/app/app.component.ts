import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgtCanvas } from 'angular-three';
import { NgtsOrbitControls } from 'angular-three-soba/controls';
import { HelloComponent } from '@nx-ng-app/hello';

@Component({
  standalone: true,
  template: `
    <ngt-mesh></ngt-mesh>
    <ngts-orbit-controls />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgtsOrbitControls],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SceneGraphComponent {}

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NgtCanvas, HelloComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nx-ng-app';

  sceneGraph = SceneGraphComponent;
}
