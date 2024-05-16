import { Component, Input, inject } from '@angular/core';
import { ReactionService } from './reaction.service';
import { Reaction, ReactionDetails } from '../../shared/types';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-reaction-button',
  standalone: true,
  imports: [],
  templateUrl: './reaction-button.component.html',
})
export class ReactionButtonComponent {
  private authService = inject(AuthService);
  @Input() category!: Reaction;
  @Input() entityId!: number;

  actions: Record<Reaction, { icon: string; color: string }> = {
    like: {
      icon: 'favorite',
      color: 'red',
    },
    hot: {
      icon: 'local_fire_department',
      color: 'orange',
    },
    readingList: {
      icon: 'bookmark',
      color: 'green',
    },
  };

  reacted = false;
  count = 0;

  @Input() set details(value: ReactionDetails) {
    this.reacted = value.reacted;
    this.count = value.count;
  }

  private reactionService = inject(ReactionService);

  get style() {
    if (!this.reacted || this.authService.user.getValue().id === 0) return '';
    return `font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24; color: ${this.actions[this.category].color}`;
  }

  onClick() {
    if (this.authService.user.getValue().id === 0) {
      return;
    }
    this.reactionService
      .reactToArticle(this.entityId, this.category)
      .subscribe((data) => {
        this.reacted = data.result;
        if (this.reacted) {
          this.count += 1;
        } else {
          this.count -= 1;
        }
      });
  }
}
