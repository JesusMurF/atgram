import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @ViewChild("atgramLogo") atgramLogo: ElementRef;
  @ViewChild("slash") slash: ElementRef;
  @ViewChild("container") container: ElementRef;
  constructor() {}

  ngOnInit() {}

  @HostListener("scroll", ["$event"])
  stickOnScroll($event) {
    const scrollOffset = $event.target.children[0].scrollTop;
    if (scrollOffset !== 0) {
      this.atgramLogo.nativeElement.style.display = "none";
      this.slash.nativeElement.style.display = "none";
      this.container.nativeElement.style.height = "80px";
    } else {
      this.atgramLogo.nativeElement.style.display = "block";
      this.slash.nativeElement.style.display = "block";
      this.container.nativeElement.style.height = "100px";
    }
  }
}
