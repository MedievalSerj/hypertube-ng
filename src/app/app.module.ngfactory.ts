/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from './gallery/gallery.component.ngfactory';
import * as i4 from './watch-page/watch-page.component.ngfactory';
import * as i5 from './my-profile-page/my-profile-page.component.ngfactory';
import * as i6 from './profile-page/profile-page.component.ngfactory';
import * as i7 from './sign-in-page/sign-in-page.component.ngfactory';
import * as i8 from './sign-up-page/sign-up-page.component.ngfactory';
import * as i9 from './reset-password/reset-password.component.ngfactory';
import * as i10 from './oauth42/oauth42.component.ngfactory';
import * as i11 from './oauth-google/oauth-google.component.ngfactory';
import * as i12 from './create-new-passwd/create-new-passwd.component.ngfactory';
import * as i13 from './page-not-found/page-not-found.component.ngfactory';
import * as i14 from './app.component.ngfactory';
import * as i15 from '@angular/common';
import * as i16 from '@angular/platform-browser';
import * as i17 from '@angular/animations/browser';
import * as i18 from '@angular/platform-browser/animations';
import * as i19 from '@angular/animations';
import * as i20 from '@angular/forms';
import * as i21 from '@angular/http';
import * as i22 from 'videogular2/src/core/services/vg-api';
import * as i23 from 'videogular2/src/core/services/vg-fullscreen-api';
import * as i24 from 'videogular2/src/core/services/vg-utils';
import * as i25 from 'videogular2/src/core/services/vg-controls-hidden';
import * as i26 from 'angular2-image-upload/lib/image.service';
import * as i27 from '@angular/router';
import * as i28 from './services/data.service';
import * as i29 from './services/previews.service';
import * as i30 from './services/login.validation.service';
import * as i31 from './services/email-validation.service';
import * as i32 from './services/user.service';
import * as i33 from './services/email-confirm.service';
import * as i34 from './services/auth.service';
import * as i35 from './services/auth-guard.service';
import * as i36 from './services/oauth42.service';
import * as i37 from './services/oauth-google.service';
import * as i38 from './services/watched-movies.service';
import * as i39 from './services/comments.service';
import * as i40 from './services/reset.service';
import * as i41 from './services/watch.service';
import * as i42 from './services/language.service';
import * as i43 from 'videogular2/src/core/core';
import * as i44 from 'videogular2/src/controls/controls';
import * as i45 from 'videogular2/src/overlay-play/overlay-play';
import * as i46 from 'videogular2/src/buffering/buffering';
import * as i47 from 'angular2-image-upload/lib/image-upload.module';
import * as i48 from 'angular-inviewport';
import * as i49 from './gallery/gallery.component';
import * as i50 from './watch-page/watch-page.component';
import * as i51 from './my-profile-page/my-profile-page.component';
import * as i52 from './profile-page/profile-page.component';
import * as i53 from './sign-in-page/sign-in-page.component';
import * as i54 from './sign-up-page/sign-up-page.component';
import * as i55 from './reset-password/reset-password.component';
import * as i56 from './oauth42/oauth42.component';
import * as i57 from './oauth-google/oauth-google.component';
import * as i58 from './create-new-passwd/create-new-passwd.component';
import * as i59 from './page-not-found/page-not-found.component';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.GalleryComponentNgFactory,i4.WatchPageComponentNgFactory,i5.MyProfilePageComponentNgFactory,
              i6.ProfilePageComponentNgFactory,i7.SignInPageComponentNgFactory,i8.SignUpPageComponentNgFactory,
              i9.ResetPasswordComponentNgFactory,i10.Oauth42ComponentNgFactory,i11.OauthGoogleComponentNgFactory,
              i12.CreateNewPasswdComponentNgFactory,i13.PageNotFoundComponentNgFactory,
              i14.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(4352,i0.LOCALE_ID,'ru',([] as any[])),i0.ɵmpd(4608,i15.NgLocalization,
              i15.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,
              ([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i16.DomSanitizer,
              i16.ɵe,[i15.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i16.DomSanitizer]),
          i0.ɵmpd(4608,i16.HAMMER_GESTURE_CONFIG,i16.HammerGestureConfig,([] as any[])),
          i0.ɵmpd(5120,i16.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i16.ɵDomEventsPlugin(p0_0),new i16.ɵKeyEventsPlugin(p1_0),
                new i16.ɵHammerGesturesPlugin(p2_0,p2_1)];
          },[i15.DOCUMENT,i15.DOCUMENT,i15.DOCUMENT,i16.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i16.EventManager,i16.EventManager,[i16.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i16.ɵDomSharedStylesHost,i16.ɵDomSharedStylesHost,[i15.DOCUMENT]),
          i0.ɵmpd(4608,i16.ɵDomRendererFactory2,i16.ɵDomRendererFactory2,[i16.EventManager,
              i16.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i17.AnimationDriver,i18.ɵc,([] as any[])),
          i0.ɵmpd(5120,i17.ɵAnimationStyleNormalizer,i18.ɵd,([] as any[])),i0.ɵmpd(4608,
              i17.ɵAnimationEngine,i18.ɵb,[i17.AnimationDriver,i17.ɵAnimationStyleNormalizer]),
          i0.ɵmpd(5120,i0.RendererFactory2,i18.ɵe,[i16.ɵDomRendererFactory2,i17.ɵAnimationEngine,
              i0.NgZone]),i0.ɵmpd(6144,i16.ɵSharedStylesHost,(null as any),[i16.ɵDomSharedStylesHost]),
          i0.ɵmpd(4608,i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i16.Meta,
              i16.Meta,[i15.DOCUMENT]),i0.ɵmpd(4608,i16.Title,i16.Title,[i15.DOCUMENT]),
          i0.ɵmpd(4608,i19.AnimationBuilder,i18.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
              i16.DOCUMENT]),i0.ɵmpd(4608,i20.ɵi,i20.ɵi,([] as any[])),i0.ɵmpd(4608,
              i20.FormBuilder,i20.FormBuilder,([] as any[])),i0.ɵmpd(4608,i21.BrowserXhr,
              i21.BrowserXhr,([] as any[])),i0.ɵmpd(4608,i21.ResponseOptions,i21.BaseResponseOptions,
              ([] as any[])),i0.ɵmpd(5120,i21.XSRFStrategy,i21.ɵb,([] as any[])),i0.ɵmpd(4608,
              i21.XHRBackend,i21.XHRBackend,[i21.BrowserXhr,i21.ResponseOptions,i21.XSRFStrategy]),
          i0.ɵmpd(4608,i21.RequestOptions,i21.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i21.Http,i21.ɵc,[i21.XHRBackend,i21.RequestOptions]),i0.ɵmpd(4608,i22.VgAPI,
              i22.VgAPI,([] as any[])),i0.ɵmpd(4608,i23.VgFullscreenAPI,i23.VgFullscreenAPI,
              ([] as any[])),i0.ɵmpd(4608,i24.VgUtils,i24.VgUtils,([] as any[])),i0.ɵmpd(4608,
              i25.VgControlsHidden,i25.VgControlsHidden,([] as any[])),i0.ɵmpd(4608,
              i26.ImageService,i26.ImageService,[i21.Http]),i0.ɵmpd(5120,i27.ActivatedRoute,
              i27.ɵf,[i27.Router]),i0.ɵmpd(4608,i27.NoPreloading,i27.NoPreloading,
              ([] as any[])),i0.ɵmpd(6144,i27.PreloadingStrategy,(null as any),[i27.NoPreloading]),
          i0.ɵmpd(135680,i27.RouterPreloader,i27.RouterPreloader,[i27.Router,i0.NgModuleFactoryLoader,
              i0.Compiler,i0.Injector,i27.PreloadingStrategy]),i0.ɵmpd(4608,i27.PreloadAllModules,
              i27.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i27.ROUTER_INITIALIZER,
              i27.ɵi,[i27.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i27.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i28.DataService,i28.DataService,
              [i21.Http]),i0.ɵmpd(4608,i29.PreviewsService,i29.PreviewsService,[i21.Http]),
          i0.ɵmpd(4608,i30.LoginValidationService,i30.LoginValidationService,[i21.Http]),
          i0.ɵmpd(4608,i31.EmailValidationService,i31.EmailValidationService,[i21.Http]),
          i0.ɵmpd(4608,i32.UserService,i32.UserService,[i21.Http]),i0.ɵmpd(4608,i33.EmailConfirmService,
              i33.EmailConfirmService,[i21.Http]),i0.ɵmpd(4608,i34.AuthService,i34.AuthService,
              [i21.Http]),i0.ɵmpd(4608,i35.AuthGuardService,i35.AuthGuardService,[i27.Router,
              i34.AuthService]),i0.ɵmpd(4608,i36.Oauth42Service,i36.Oauth42Service,
              [i21.Http]),i0.ɵmpd(4608,i37.OauthGoogleService,i37.OauthGoogleService,
              [i21.Http]),i0.ɵmpd(4608,i38.WatchedMoviesService,i38.WatchedMoviesService,
              [i21.Http]),i0.ɵmpd(4608,i39.CommentsService,i39.CommentsService,[i21.Http]),
          i0.ɵmpd(4608,i40.ResetService,i40.ResetService,[i21.Http]),i0.ɵmpd(4608,
              i41.WatchService,i41.WatchService,[i21.Http]),i0.ɵmpd(4608,i42.LanguageService,
              i42.LanguageService,[i21.Http]),i0.ɵmpd(512,i15.CommonModule,i15.CommonModule,
              ([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i16.ɵa,([] as any[])),i0.ɵmpd(1024,
              i0.NgProbeToken,() => {
                return [i27.ɵb()];
              },([] as any[])),i0.ɵmpd(512,i27.ɵg,i27.ɵg,[i0.Injector]),i0.ɵmpd(1024,
              i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any) => {
                return [i16.ɵc(p0_0,p0_1),i27.ɵh(p1_0)];
              },[[2,i16.NgProbeToken],[2,i0.NgProbeToken],i27.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i16.BrowserModule,i16.BrowserModule,[[3,i16.BrowserModule]]),
          i0.ɵmpd(512,i18.BrowserAnimationsModule,i18.BrowserAnimationsModule,([] as any[])),
          i0.ɵmpd(512,i20.ɵba,i20.ɵba,([] as any[])),i0.ɵmpd(512,i20.FormsModule,i20.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i20.ReactiveFormsModule,i20.ReactiveFormsModule,
              ([] as any[])),i0.ɵmpd(512,i21.HttpModule,i21.HttpModule,([] as any[])),
          i0.ɵmpd(512,i43.VgCoreModule,i43.VgCoreModule,([] as any[])),i0.ɵmpd(512,
              i44.VgControlsModule,i44.VgControlsModule,([] as any[])),i0.ɵmpd(512,
              i45.VgOverlayPlayModule,i45.VgOverlayPlayModule,([] as any[])),i0.ɵmpd(512,
              i46.VgBufferingModule,i46.VgBufferingModule,([] as any[])),i0.ɵmpd(512,
              i47.ImageUploadModule,i47.ImageUploadModule,([] as any[])),i0.ɵmpd(512,
              i48.InViewportModule,i48.InViewportModule,([] as any[])),i0.ɵmpd(1024,
              i27.ɵa,i27.ɵd,[[3,i27.Router]]),i0.ɵmpd(512,i27.UrlSerializer,i27.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i27.ChildrenOutletContexts,i27.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i27.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i15.LocationStrategy,i27.ɵc,[i15.PlatformLocation,[2,i15.APP_BASE_HREF],
              i27.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i15.Location,i15.Location,[i15.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i27.ROUTES,() => {
            return [[{path:'',component:i49.GalleryComponent},{path:'watch/:id',component:i50.WatchPageComponent},
                {path:'my-profile',component:i51.MyProfilePageComponent,canActivate:[i35.AuthGuardService]},
                {path:'profile/:id',component:i52.ProfilePageComponent,canActivate:[i35.AuthGuardService]},
                {path:'sign-in',component:i53.SignInPageComponent},{path:'sign-up',
                    component:i54.SignUpPageComponent},{path:'reset-password',component:i55.ResetPasswordComponent},
                {path:'oauth42',component:i56.Oauth42Component},{path:'oauth-google',
                    component:i57.OauthGoogleComponent},{path:'create_new_password',
                    component:i58.CreateNewPasswdComponent},{path:'**',component:i59.PageNotFoundComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i27.Router,i27.ɵe,[i0.ApplicationRef,i27.UrlSerializer,
              i27.ChildrenOutletContexts,i15.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i27.ROUTES,i27.ROUTER_CONFIGURATION,[2,i27.UrlHandlingStrategy],
              [2,i27.RouteReuseStrategy]]),i0.ɵmpd(512,i27.RouterModule,i27.RouterModule,
              [[2,i27.ɵa],[2,i27.Router]]),i0.ɵmpd(512,i1.AppModule,i1.AppModule,([] as any[])),
          i0.ɵmpd(256,i0.TRANSLATIONS_FORMAT,'xlf',([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvc2Vyai9yZXBvL2h5cGVydHViZS1uZy9zcmMvYXBwL2FwcC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9zZXJqL3JlcG8vaHlwZXJ0dWJlLW5nL3NyYy9hcHAvYXBwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=