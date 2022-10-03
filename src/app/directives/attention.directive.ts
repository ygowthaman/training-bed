import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: '[appAttention]'
})
export class AttentionDirective {


  @HostListener('recipe') recipe(eventData: any) {
    console.log(eventData);
  }


}