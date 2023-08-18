import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/actions/auth.actions';
import { TranslateService } from '@ngx-translate/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces';
import {
  selectUserRole,
  selectUser,
} from 'src/app/store/reducers/auth.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userRole$: Observable<IUser['role']>;
  user$: Observable<IUser>;
  lang: string;
  themeToggle = false;
  isDark = false;

  constructor(
    private store: Store,
    public translate: TranslateService,
    private menuController: MenuController,
  ) {}

  ngOnInit() {
    this.userRole$ = this.store.select(selectUserRole);
    this.user$ = this.store.select(selectUser);

    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) =>
      this.initializeDarkTheme(mediaQuery.matches),
    );
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profile-menu');
  }

  onLogout() {
    this.store.dispatch(logout());
  }

  switchLanguage() {
    this.lang = this.lang === 'en' ? 'uk' : 'en';
    this.translate.use(this.lang);
  }

  initializeDarkTheme(isDark: boolean): void {
    this.isDark = !isDark;
    this.toggleDarkTheme();
  }

  toggleDarkTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
  }
}
