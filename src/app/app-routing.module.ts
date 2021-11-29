import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import { RoomdetailModule } from './roomdetail/roomdetail.module';
import { GalleryModule } from './gallery/gallery.module';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { RoomGridComponent } from './room-grid/room-grid.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'roomdetail', component: RoomdetailComponent},
  {path:'galley', component:  GalleryComponent},
  {path:'blogdetail',component: BlogdetailComponent},
  {path:'about-us',component: AboutUsComponent},
  {path:'blog-grid',component: BlogGridComponent},
  {path:'room-grid',component: RoomGridComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
