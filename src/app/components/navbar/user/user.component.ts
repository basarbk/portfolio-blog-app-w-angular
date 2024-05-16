import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
} from '@angular/core';
import { ImageWithFallbackComponent } from '../../image-with-fallback/image-with-fallback.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ImageWithFallbackComponent, RouterLink],
  templateUrl: './user.component.html',
})
export class UserComponent {
  private authService = inject(AuthService);
  @ViewChild('dropdown') dropdown!: ElementRef;

  show = false;

  toggle() {
    this.show = !this.show;
  }

  logout() {
    this.authService.logout().subscribe();
  }

  get image() {
    return this.authService.user.getValue().image;
  }

  get name() {
    return this.authService.user.getValue().name;
  }

  get link() {
    return `/${this.authService.user.getValue().handle}`;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (this.show && !this.dropdown.nativeElement.contains(event.target)) {
      this.show = false;
    }
  }
}
