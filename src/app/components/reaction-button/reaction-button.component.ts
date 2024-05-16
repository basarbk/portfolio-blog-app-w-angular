import { Component, Input, inject } from '@angular/core';
import { ReactionService } from './reaction.service';
import { Reaction } from '../../shared/types';

@Component({
  selector: 'app-reaction-button',
  standalone: true,
  imports: [],
  templateUrl: './reaction-button.component.html',
})
export class ReactionButtonComponent {
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

  private reactionService = inject(ReactionService);

  get style() {
    if (!this.reacted) return '';
    return `font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24; color: ${this.actions[this.category].color}`;
  }

  onClick() {
    this.reactionService
      .reactToArticle(this.entityId, this.category)
      .subscribe((data) => {
        this.reacted = data.result;
      });
  }
}
