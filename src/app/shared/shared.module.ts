import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {ScrollToFirstInvalidDirective} from './directives/scroll-to-first-invalid.directive';
import {WebStorageModule} from 'ngx-store';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    RouterModule,
    WebStorageModule
  ],
  declarations: [
    HomePageComponent,
    Error404PageComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    ScrollToFirstInvalidDirective
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    WebStorageModule,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    ScrollToFirstInvalidDirective
  ]
})

export class SharedModule {
}
