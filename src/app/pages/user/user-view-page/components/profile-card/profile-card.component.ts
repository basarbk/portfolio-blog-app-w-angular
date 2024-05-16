import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../../../../shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../../../../shared/types';
import { ImageWithFallbackComponent } from '../../../../../components/image-with-fallback/image-with-fallback.component';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ImageWithFallbackComponent],
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent implements OnInit {
  private userService = inject(UserService);
  readonly route = inject(ActivatedRoute);

  user: Author | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userService.fetchUser(params['handle']).subscribe((data) => {
        this.user = data;
      });
    });
  }
}
