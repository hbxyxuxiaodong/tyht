import {
  Component, OnDestroy,ContentChild, OnInit,ElementRef, EventEmitter, Input, NgModule,
  ViewChild
} from '@angular/core';
import {animate, query, trigger,} from "@angular/animations"
import {Footer} from "./footer.component";
import {DialogService} from "./dialog.service";
import {Subscription,timer} from "rxjs";
import {Dialog} from "./dialog";
import {CommonModule} from "@angular/common";
import {transition,style,stagger} from "@angular/animations";
const HTML_TEMPLATE = `
<div class="g-dialog-container" *ngIf="visible" [@scale]  [ngStyle]="{'background':'rgba(0,0,0,+'+opacity+')','zIndex':zIndex}">
      <div class="overlay" (click)="hide()" *ngIf="!(dialog.accept&&dialog.reject)"></div>
      <div class="dialog-window" [style.width.px]="width" [style.height.px]="height" [ngStyle]="{'zIndex':zIndex}">
        <div [ngClass]="header" class="dialog-header"></div>
        <div class="dialog-content" [innerHTML]="message"></div>
        <div class="dialog-footer" *ngIf="footer">
          <ng-content select="yycf-footer"></ng-content>
        </div>
        <div class="dialog-footer" *ngIf="!footer">
          <button [ngClass]="okButton" (click)="accept()" *ngIf="okVisible">{{okLabel}}</button>
          <button [ngClass]="offButton" (click)="reject()" *ngIf="offVisible">{{offLabel}}</button>
        </div>
      </div>
</div>
`;
const css_STYLE = `.g-dialog-container {
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.g-dialog-container .dialog-window {
  min-width: 16rem;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.8);
  -webkit-transition: all 0.9s cubic-bezier(0.43, -0.14, 0.34, 1.6);
  transition: all 0.9s cubic-bezier(0.43, -0.14, 0.34, 1.6);
}

.g-dialog-container .dialog-window .dialog-header {
  width: 45px;
  height: 45px;
  margin: 0 auto;
  border: 2px solid #fff;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.g-dialog-container .dialog-window .dialog-header.ok:after {
  content: '';
  display: block;
  width: 30px;
  height: 10px;
  border: 2px solid #fff;
  border-width: 0 0 2px 2px;
  -webkit-transform: rotate(-50deg);
          transform: rotate(-50deg);
}

.g-dialog-container .dialog-window .dialog-header.warning {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.g-dialog-container .dialog-window .dialog-header.warning:before {
  content: '';
  display: block;
  width: 20px;
  height: 5px;
  background: #fff;
  margin-right: 5px;
}

.g-dialog-container .dialog-window .dialog-header.warning:after {
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #fff;
}

.g-dialog-container .dialog-window .dialog-header.waiting:before {
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  background: yellow;
  border-radius: 50%;
  -webkit-animation: waiting1 0.8s infinite;
          animation: waiting1 0.8s infinite;
}

.g-dialog-container .dialog-window .dialog-header.waiting:after {
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  background: red;
  border-radius: 50%;
  -webkit-animation: waiting2 0.8s infinite;
          animation: waiting2 0.8s infinite;
}

.g-dialog-container .dialog-window .dialog-content {
  padding: 1rem 1rem 0;
  font-size: 1rem;
  text-align: center;
}

.g-dialog-container .dialog-window .dialog-footer {
  padding: 1rem 1rem 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.g-dialog-container .dialog-window .dialog-footer button {
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 0.5rem 1.5rem;
  margin: 0.3rem;
  outline: none;
  font-size: 1rem;
  color: #eee;
}

.g-dialog-container .dialog-window .dialog-footer button.green {
  background-color: #0f8f0f;
}

.g-dialog-container .dialog-window .dialog-footer button.green:hover {
  background-color: #14bf14;
}

.g-dialog-container .dialog-window .dialog-footer button.green:active {
  background-color: #095509;
}

.g-dialog-container .dialog-window .dialog-footer button.red {
  background-color: #f6214b;
}

.g-dialog-container .dialog-window .dialog-footer button.red:hover {
  background-color: #f85475;
}

.g-dialog-container .dialog-window .dialog-footer button.red:active {
  background-color: #cf0830;
}

.g-dialog-container .dialog-window .dialog-footer button.blue {
  background-color: #01869a;
}

.g-dialog-container .dialog-window .dialog-footer button.blue:hover {
  background-color: #01b4cf;
}

.g-dialog-container .dialog-window .dialog-footer button.blue:active {
  background-color: #014f5b;
}

@-webkit-keyframes waiting1 {
  0% {
    -webkit-transform: translate(-5px 0);
            transform: translate(-5px 0);
  }
  50% {
    -webkit-transform: translate(10px, 0);
            transform: translate(10px, 0);
  }
  100% {
    -webkit-transform: translate(-5px, 0);
            transform: translate(-5px, 0);
  }
}

@keyframes waiting1 {
  0% {
    -webkit-transform: translate(-5px 0);
            transform: translate(-5px 0);
  }
  50% {
    -webkit-transform: translate(10px, 0);
            transform: translate(10px, 0);
  }
  100% {
    -webkit-transform: translate(-5px, 0);
            transform: translate(-5px, 0);
  }
}

@-webkit-keyframes waiting2 {
  0% {
    -webkit-transform: translate(5px, 0);
            transform: translate(5px, 0);
  }
  50% {
    -webkit-transform: translate(-10px, 0);
            transform: translate(-10px, 0);
  }
  100% {
    -webkit-transform: translate(5px, 0);
            transform: translate(5px, 0);
  }
}

@keyframes waiting2 {
  0% {
    -webkit-transform: translate(5px, 0);
            transform: translate(5px, 0);
  }
  50% {
    -webkit-transform: translate(-10px, 0);
            transform: translate(-10px, 0);
  }
  100% {
    -webkit-transform: translate(5px, 0);
            transform: translate(5px, 0);
  }
}
`;
@Component({
  selector: 'yycf-dialog',
  template:HTML_TEMPLATE,
  styles:[css_STYLE],
  animations:[
    trigger('scale',[transition('*<=>*',[
       query('.dialog-window',[
         style({transform:'scale(0,0)'}),
         stagger('0ms',
         animate('100ms cubic-bezier(0.43, -0.14, 0.34, 1.6)',style({transform:'scale(1,1)'})))
       ],{optional:true}),
       query('.dialog-window',[
          animate('100ms',style({transform:'scale(0,0)'}))
      ],{optional:true})
    ])])
  ]
})
export class DialogComponent implements OnDestroy,OnInit{
  @Input() header = 'waiting';
  @Input() key:string;
  @Input() width = "auto";
  @Input() height = "auto";
  @Input() opacity = .5;
  @Input() message = 'yycf-dialog component';
  @Input() okLabel = '确定';
  @Input() offLabel = '取消';
  @Input() zIndex:number;
  @Input() okVisible = true;
  @Input() offVisible = true;
  @Input() okButton = 'primary';
  @Input() offButton = 'secondary';
  @Input() visible:boolean;
  @Input() delay:number;
  dialog:Dialog;
  @ViewChild('mask') mask:ElementRef
  @ContentChild(Footer) footer;
  subscription:Subscription;
  constructor(
    private dialogService:DialogService
  ) {
    
  }
  accept() {
    if(this.dialog.acceptEvent) {
      this.dialog.acceptEvent.emit();
    }else{
      this.hide();
      this.dialog = null;
    }
  }
  reject() {
    if(this.dialog.rejectEvent) {
      this.dialog.rejectEvent.emit();
    }else{
      this.hide();
      this.dialog = null;
    }
  }
  hide() {
    this.visible = false;
  }
  ngOnInit() {
    this.subscription = this.dialogService.requireDialogSource$.subscribe(dialog=>{
      if (dialog == null) {
        this.hide();
        return;
      }
      if(dialog.key === this.key){
        this.dialog = dialog;
        this.message = this.dialog.message||this.message;
        this.okLabel = this.dialog.okLabel||this.okLabel;
        this.offLabel = this.dialog.offLabel||this.offLabel;
        this.okVisible = this.dialog.okVisible ==null?this.okVisible:this.dialog.okVisible;
        this.offVisible = this.dialog.offVisible ==null?this.offVisible:this.dialog.offVisible;
        this.zIndex = this.dialogService.zIndex ||this.zIndex;
        this.header = this.dialog.header || this.header;
        this.opacity = this.dialog.opacity || this.opacity;
        this.delay = this.dialog.delay||this.delay;
        this.okButton = this.dialog.okButton||this.okButton;
        this.offButton = this.dialog.offButton||this.offButton;
        if(this.dialog.accept) {
          this.dialog.acceptEvent = new EventEmitter();
          this.dialog.acceptEvent.subscribe(()=>{
            this.dialog.accept();
            this.hide();
            this.dialog = null;
          })
        }
        if(this.dialog.reject) {
          this.dialog.rejectEvent = new EventEmitter();
          this.dialog.rejectEvent.subscribe(
            ()=>{
              this.dialog.reject();
              this.hide();
              this.dialog = null;
            }
          );
        }
        if(this.delay&&this.delay!=0){
          timer(this.delay).subscribe(val => this.visible = false);
        }
        this.visible = true;
      }
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
@NgModule({
  imports:[CommonModule],
  declarations:[DialogComponent,Footer],
  exports:[DialogComponent,Footer]
})
export class DialogModule{
    
}
