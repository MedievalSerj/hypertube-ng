/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './sign-in-page.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from './sign-in-page.component';
import * as i4 from '@angular/forms';
import * as i5 from '@angular/router';
import * as i6 from '../services/email-confirm.service';
import * as i7 from '../services/auth.service';
const styles_SignInPageComponent:any[] = [i0.styles];
export const RenderType_SignInPageComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_SignInPageComponent,data:{'animation':[{type:7,name:'fade',definitions:[{type:0,
        name:'void',styles:{type:6,styles:{opacity:0},offset:(null as any)},options:(undefined as any)},
        {type:1,expr:':enter',animation:[{type:4,styles:(null as any),timings:300}],
            options:(null as any)}],options:{}}]}});
function View_SignInPageComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'card ma-b-20']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'p',[['class','text-success']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['Аккаунт создана. Активируйте аккаун, пройдя по ссылке в email'])),
      (_l()(),i1.ɵted((null as any),['\n  ']))],(null as any),(null as any));
}
function View_SignInPageComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'card ma-b-20']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'p',[['class','text-success']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['Поздравляем! Теперь вы можете авторизироваться'])),
      (_l()(),i1.ɵted((null as any),['\n  ']))],(null as any),(null as any));
}
function View_SignInPageComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'div',[['class',
      'card ma-b-20']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'p',[['class','text-success']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['Авторизируйтесь, чтобы получить доступ к этой странице'])),
      (_l()(),i1.ɵted((null as any),['\n  ']))],(null as any),(null as any));
}
function View_SignInPageComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'div',[['class',
      'text-warning']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['НЕВЕРНЫЕ ИМЯ ПОЛЬЗОВАТЕЛЯ ИЛИ ПАРОЛЬ']))],(null as any),
      (null as any));
}
export function View_SignInPageComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),78,'div',[['class',
      'card-preview-container log_in_width ma-auto ma-t-30']],[[24,'@fade',0]],(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n\n  '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SignInPageComponent_1)),
      i1.ɵdid(16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),
          i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SignInPageComponent_2)),
      i1.ɵdid(16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n\n  '])),(_l()(),
          i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SignInPageComponent_3)),
      i1.ɵdid(16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n\n  '])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),66,'div',[['class','card ma-b-60']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'h4',[['class','text-center']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['АВТОРИЗАЦИЯ'])),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_SignInPageComponent_4)),i1.ɵdid(16384,
          (null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),57,'div',[['class','text-left ma-t-10']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),44,'form',[['class',
          'pure-form'],['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
          (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
          [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
              (null as any)]],[[(null as any),'ngSubmit'],[(null as any),'submit'],
          [(null as any),'reset']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i3.SignInPageComponent = _v.component;
        if (('submit' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,23).onSubmit($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('reset' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,23).onReset()) !== false);
          ad = (pd_1 && ad);
        }
        if (('ngSubmit' === en)) {
          const pd_2:any = ((<any>_co.signIn(i1.ɵnov(_v,23).value)) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.ɵbf,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(16384,[['f',4]],0,i4.NgForm,[[8,(null as any)],
          [8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i1.ɵprd(2048,(null as any),
          i4.ControlContainer,(null as any),[i4.NgForm]),i1.ɵdid(16384,(null as any),
          0,i4.NgControlStatusGroup,[i4.ControlContainer],(null as any),(null as any)),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),37,'fieldset',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n          '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),8,'div',[['class','ma-b-10']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n            '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),5,'input',[['class','width-100'],['name','login'],['ngModel',
              ''],['placeholder','Логин или email'],['type','text']],[[2,'ng-untouched',
              (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
              [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
                  (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'input'],
              [(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
                  'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,32)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,32).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,32)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,32)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i4.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i4.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i4.DefaultValueAccessor]),i1.ɵdid(671744,(null as any),0,i4.NgModel,[[2,i4.ControlContainer],
          [8,(null as any)],[8,(null as any)],[2,i4.NG_VALUE_ACCESSOR]],{name:[0,'name'],
          model:[1,'model']},(null as any)),i1.ɵprd(2048,(null as any),i4.NgControl,
          (null as any),[i4.NgModel]),i1.ɵdid(16384,(null as any),0,i4.NgControlStatus,
          [i4.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n          '])),(_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),8,'div',[['class','ma-b-10 pure-control-group']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n            '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),5,'input',[['class','width-100'],['name','passwd'],['ngModel',
              ''],['placeholder','Пароль'],['type','password']],[[2,'ng-untouched',
              (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
              [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
                  (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'input'],
              [(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
                  'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,42)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,42).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,42)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,42)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i4.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i4.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i4.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i4.DefaultValueAccessor]),i1.ɵdid(671744,(null as any),0,i4.NgModel,[[2,i4.ControlContainer],
          [8,(null as any)],[8,(null as any)],[2,i4.NG_VALUE_ACCESSOR]],{name:[0,'name'],
          model:[1,'model']},(null as any)),i1.ɵprd(2048,(null as any),i4.NgControl,
          (null as any),[i4.NgModel]),i1.ɵdid(16384,(null as any),0,i4.NgControlStatus,
          [i4.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n          '])),(_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),8,'div',[['class','text-right ma-b-10']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n            '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,(null as any),(null as any),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['забыли пароль?'])),(_l()(),i1.ɵted((null as any),[' '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),2,'a',[['id','reset_passwd_link'],['routerLink',
              '/reset-password']],[[1,'target',0],[8,'href',4]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,55).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i5.RouterLinkWithHref,
          [i5.Router,i5.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted((null as any),['восстановить'])),(_l()(),
          i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵted((null as any),['\n          '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),4,'div',[['class','text-center']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n            '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'button',[['class','ma-b-10 pure-button pure-button-primary'],
              ['id','btn-sign-in'],['type','submit']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['АВТОРИЗИРОВАТЬСЯ'])),(_l()(),i1.ɵted((null as any),['\n          '])),
      (_l()(),i1.ɵted((null as any),['\n\n        '])),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),8,'div',[['class','text-center ma-b-5']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'div',[['class',
          'ma-b-10']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['АВТОРИЗИРОВАТЬСЯ С АККАУНТОМ:'])),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'div',[['class',
          'btn-oauth']],[[4,'background',(null as any)]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.SignInPageComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.oAuthGoogle()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n        '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),0,'div',[['class','btn-oauth']],
          [[4,'background',(null as any)]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.SignInPageComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.oAuth42()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i3.SignInPageComponent = _v.component;
        const currVal_1:any = _co.registered;
        _ck(_v,3,0,currVal_1);
        const currVal_2:any = _co.confirmed_api;
        _ck(_v,6,0,currVal_2);
        const currVal_3:any = _co.accessDenied;
        _ck(_v,9,0,currVal_3);
        const currVal_4:any = _co.invalidLogin;
        _ck(_v,17,0,currVal_4);
        const currVal_19:any = 'login';
        const currVal_20:any = '';
        _ck(_v,34,0,currVal_19,currVal_20);
        const currVal_28:any = 'passwd';
        const currVal_29:any = '';
        _ck(_v,44,0,currVal_28,currVal_29);
        const currVal_32:any = '/reset-password';
        _ck(_v,55,0,currVal_32);
      },(_ck,_v) => {
        const currVal_0:any = (undefined as any);
        _ck(_v,0,0,currVal_0);
        const currVal_5:any = i1.ɵnov(_v,25).ngClassUntouched;
        const currVal_6:any = i1.ɵnov(_v,25).ngClassTouched;
        const currVal_7:any = i1.ɵnov(_v,25).ngClassPristine;
        const currVal_8:any = i1.ɵnov(_v,25).ngClassDirty;
        const currVal_9:any = i1.ɵnov(_v,25).ngClassValid;
        const currVal_10:any = i1.ɵnov(_v,25).ngClassInvalid;
        const currVal_11:any = i1.ɵnov(_v,25).ngClassPending;
        _ck(_v,21,0,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11);
        const currVal_12:any = i1.ɵnov(_v,36).ngClassUntouched;
        const currVal_13:any = i1.ɵnov(_v,36).ngClassTouched;
        const currVal_14:any = i1.ɵnov(_v,36).ngClassPristine;
        const currVal_15:any = i1.ɵnov(_v,36).ngClassDirty;
        const currVal_16:any = i1.ɵnov(_v,36).ngClassValid;
        const currVal_17:any = i1.ɵnov(_v,36).ngClassInvalid;
        const currVal_18:any = i1.ɵnov(_v,36).ngClassPending;
        _ck(_v,31,0,currVal_12,currVal_13,currVal_14,currVal_15,currVal_16,currVal_17,
            currVal_18);
        const currVal_21:any = i1.ɵnov(_v,46).ngClassUntouched;
        const currVal_22:any = i1.ɵnov(_v,46).ngClassTouched;
        const currVal_23:any = i1.ɵnov(_v,46).ngClassPristine;
        const currVal_24:any = i1.ɵnov(_v,46).ngClassDirty;
        const currVal_25:any = i1.ɵnov(_v,46).ngClassValid;
        const currVal_26:any = i1.ɵnov(_v,46).ngClassInvalid;
        const currVal_27:any = i1.ɵnov(_v,46).ngClassPending;
        _ck(_v,41,0,currVal_21,currVal_22,currVal_23,currVal_24,currVal_25,currVal_26,
            currVal_27);
        const currVal_30:any = i1.ɵnov(_v,55).target;
        const currVal_31:any = i1.ɵnov(_v,55).href;
        _ck(_v,54,0,currVal_30,currVal_31);
        const currVal_33:any = 'url(assets/G_100.png)';
        _ck(_v,72,0,currVal_33);
        const currVal_34:any = 'url(assets/42_100.png)';
        _ck(_v,74,0,currVal_34);
      });
}
export function View_SignInPageComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-sign-in-page',
      ([] as any[]),(null as any),(null as any),(null as any),View_SignInPageComponent_0,
      RenderType_SignInPageComponent)),i1.ɵdid(114688,(null as any),0,i3.SignInPageComponent,
      [i5.ActivatedRoute,i6.EmailConfirmService,i7.AuthService,i5.Router],(null as any),
      (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const SignInPageComponentNgFactory:i1.ComponentFactory<i3.SignInPageComponent> = i1.ɵccf('app-sign-in-page',
    i3.SignInPageComponent,View_SignInPageComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvc2Vyai9yZXBvL2h5cGVydHViZS1uZy9zcmMvYXBwL3NpZ24taW4tcGFnZS9zaWduLWluLXBhZ2UuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvc2Vyai9yZXBvL2h5cGVydHViZS1uZy9zcmMvYXBwL3NpZ24taW4tcGFnZS9zaWduLWluLXBhZ2UuY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9zZXJqL3JlcG8vaHlwZXJ0dWJlLW5nL3NyYy9hcHAvc2lnbi1pbi1wYWdlL3NpZ24taW4tcGFnZS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvc2Vyai9yZXBvL2h5cGVydHViZS1uZy9zcmMvYXBwL3NpZ24taW4tcGFnZS9zaWduLWluLXBhZ2UuY29tcG9uZW50LnRzLlNpZ25JblBhZ2VDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IEBmYWRlIGNsYXNzPVwiY2FyZC1wcmV2aWV3LWNvbnRhaW5lciBsb2dfaW5fd2lkdGggbWEtYXV0byBtYS10LTMwXCI+XG5cbiAgPGRpdiAqbmdJZj1cInJlZ2lzdGVyZWRcIiBjbGFzcz1cImNhcmQgbWEtYi0yMFwiPlxuICAgIDxwIGNsYXNzPVwidGV4dC1zdWNjZXNzXCJcbiAgICAgICBpMThuPVwiQEBzaWduX2luX3BhZ2VfbXNnX3ZlcmlmeV9lbWFpbFwiPlxuICAgICAgWW91ciBhY2NvdW50IGhhcyBiZWVuIGNyZWF0ZWQuIFBsZWFzZSB2ZXJpZnkgeW91ciBlbWFpbCBiZWZvcmUgc2lnbmluZyBpblxuICAgIDwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJjb25maXJtZWRfYXBpXCIgY2xhc3M9XCJjYXJkIG1hLWItMjBcIj5cbiAgICA8cCBjbGFzcz1cInRleHQtc3VjY2Vzc1wiXG4gICAgICAgaTE4bj1cIkBAc2lnbl9pbl9wYWdlX21zZ19jb25ncmF0c1wiPlxuICAgICAgQ29uZ3JhdHVsYXRpb25zISBZb3UgY2FuIG5vdyBzaWduLWluXG4gICAgPC9wPlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiYWNjZXNzRGVuaWVkXCIgY2xhc3M9XCJjYXJkIG1hLWItMjBcIj5cbiAgICA8cCBjbGFzcz1cInRleHQtc3VjY2Vzc1wiXG4gICAgICAgaTE4bj1cIkBAc2lnbl9pbl9wYWdlX21zZ19hY2Nlc3NfZGVuaWVkXCI+XG4gICAgICBZb3UgbmVlZCB0byBzaWduLWluIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBwYWdlXG4gICAgPC9wPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY2FyZCBtYS1iLTYwXCI+XG4gICAgPGg0IGNsYXNzPVwidGV4dC1jZW50ZXJcIlxuICAgICAgICBpMThuPVwiQEBzaWduX2luX3BhZ2VfdGl0bGVcIj5cbiAgICAgIFNJR04gSU5cbiAgICA8L2g0PlxuICAgIDxkaXYgKm5nSWY9XCJpbnZhbGlkTG9naW5cIiBjbGFzcz1cInRleHQtd2FybmluZ1wiXG4gICAgICAgICBpMThuPVwiQEBzaWduX2luX3BhZ2VfaW52YWxpZF9jcmVkZW50aWFsc1wiPlxuICAgICAgSU5WQUxJRCBDUkVERU5USUFMU1xuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnQgbWEtdC0xMFwiPlxuICAgICAgPGZvcm0gY2xhc3M9XCJwdXJlLWZvcm1cIiAjZj1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJzaWduSW4oZi52YWx1ZSlcIj5cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYS1iLTEwXCI+XG4gICAgICAgICAgICA8aW5wdXQgbmdNb2RlbCBuYW1lPVwibG9naW5cIiBjbGFzcz1cIndpZHRoLTEwMFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICBpMThuLXBsYWNlaG9sZGVyPVwiQEBzaWduX2luX3BhZ2VfbG9naW5cIlxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTG9naW4gb3IgZS1tYWlsXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hLWItMTAgcHVyZS1jb250cm9sLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgbmdNb2RlbCBuYW1lPVwicGFzc3dkXCIgY2xhc3M9XCJ3aWR0aC0xMDBcIiB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgIGkxOG4tcGxhY2Vob2xkZXI9XCJAQHNpZ25faW5fcGFnZV9wYXNzd2RcIlxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCBtYS1iLTEwXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIGkxOG49XCJAQHNpZ25faW5fcGFnZV9mb3Jnb3RfcGFzc3dkXCI+XG4gICAgICAgICAgICAgIGZvcmdvdCBwYXNzd29yZD88L25nLWNvbnRhaW5lcj4gPGEgaWQ9XCJyZXNldF9wYXNzd2RfbGlua1wiIHJvdXRlckxpbms9XCIvcmVzZXQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpMThuPVwiQEBzaWduX2luX3BhZ2VfcmVzZXRcIj5yZXNldDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiYnRuLXNpZ24taW5cIiBjbGFzcz1cIm1hLWItMTAgcHVyZS1idXR0b24gcHVyZS1idXR0b24tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGkxOG49XCJAQHNpZ25faW5fcGFnZV9zaWduX2luX2J0blwiPlxuICAgICAgICAgICAgICBTSUdOIElOXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG1hLWItNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWEtYi0xMFwiXG4gICAgICAgICAgICAgaTE4bj1cIkBAc2lnbl9pbl9wYWdlX2NvbnRpbnVlX3dpdGhcIj5cbiAgICAgICAgICBPUiBDT05USU5VRSBXSVRIOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwib0F1dGhHb29nbGUoKVwiIGNsYXNzPVwiYnRuLW9hdXRoXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiJ3VybChhc3NldHMvR18xMDAucG5nKSdcIj48L2Rpdj5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwib0F1dGg0MigpXCIgY2xhc3M9XCJidG4tb2F1dGhcIiAgW3N0eWxlLmJhY2tncm91bmRdPVwiJ3VybChhc3NldHMvNDJfMTAwLnBuZyknXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsIjxhcHAtc2lnbi1pbi1wYWdlPjwvYXBwLXNpZ24taW4tcGFnZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNFRTtNQUFBO01BQTZDLDJDQUMzQztVQUFBO1VBQUEsOEJBSEo7TUFNUTs7O29CQUVOO01BQUE7TUFBZ0QsMkNBQzlDO1VBQUE7VUFBQSw4QkFUSjtNQVlROzs7b0JBR047TUFBQTtNQUErQywyQ0FDN0M7VUFBQTtVQUFBLDhCQWhCSjtNQW1CUTs7O29CQVFKO01BQUE7TUEzQko7Ozs7b0JBQUE7TUFBQTtNQUFBLDRDQUF1RTtNQUVyRTthQUFBO1VBQUEsd0JBS00seUNBQ047aUJBQUE7YUFBQTtVQUFBLHdCQUtNLDJDQUVOO2lCQUFBO2FBQUE7VUFBQSx3QkFLTSwyQ0FFTjtpQkFBQTtjQUFBO01BQTBCLDJDQUN4QjtVQUFBO1VBQUEsOEJBdkJKO01BMEJTLDJDQUNMO1VBQUEsa0VBQUE7VUFBQTtVQUFBLGVBR00sMkNBQ047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
