import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { z } from 'zod';

const schema = z.object({ hi: z.string() });

@Component({
  selector: 'lib-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  constructor() {
    console.log(schema);
  }
}
