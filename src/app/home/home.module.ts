import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.component';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { ListHotNewsComponent } from './list-hot/list-hot-news.component';
import { HomeContentComponent } from './home-content/home-content.component';



@NgModule({
  declarations: [HomeComponent, ListHotNewsComponent, HomeContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule
  ]
})
export class HomeModule { }
