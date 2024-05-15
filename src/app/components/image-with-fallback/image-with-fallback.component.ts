import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-fallback',
  standalone: true,
  imports: [],
  templateUrl: './image-with-fallback.component.html',
})
export class ImageWithFallbackComponent {
  @Input() image: string | null = null;

  @Input() classNames: string = '';

  @Input() height: string = '150';

  @Input() fallback: 'profile' | 'article' = 'article';

  get imageSrc() {
    if (this.image) {
      return `/api/assets/${this.image}`;
    }
    if (this.fallback === 'article') {
      return 'https://place-hold.it/600x300/666/fff/000&text=Article%20Image';
    }
    return '/assets/profile.png';
  }

  get classList() {
    const classes = ['object-fit-cover', 'w-100'];
    classes.push(this.classNames);
    return classes.join(' ');
  }
}
