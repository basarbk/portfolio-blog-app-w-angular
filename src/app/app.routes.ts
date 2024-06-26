import { Routes } from '@angular/router';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CallbackPageComponent } from './pages/callback-page/callback-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ArticleEditorPageComponent } from './pages/article/article-editor-page/article-editor-page.component';
import { ArticleViewPageComponent } from './pages/article/article-view-page/article-view-page.component';
import { UserViewPageComponent } from './pages/user/user-view-page/user-view-page.component';
import { ArticleEditPageComponent } from './pages/article/article-edit-page/article-edit-page.component';
import { UserEditPageComponent } from './pages/user/user-edit-page/user-edit-page.component';

export const routes: Routes = [
  {
    path: 'signup',
    component: SignUpPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'callback',
    component: CallbackPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'article/new',
    component: ArticleEditorPageComponent,
  },
  {
    path: ':handle/:idOrSlug',
    component: ArticleViewPageComponent,
  },
  {
    path: ':handle/:idOrSlug/edit',
    component: ArticleEditPageComponent,
  },
  {
    path: 'edit',
    component: UserEditPageComponent,
  },
  {
    path: ':handle',
    component: UserViewPageComponent,
  },
];
