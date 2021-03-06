import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { SocietyComponent } from './society/society.component';
import { ArticleComponent } from './article/article.component';
import { SecurityComponent } from './register/security/security.component';
import { SuggestionComponent } from './article/suggestion/suggestion.component';
import { PollresultComponent } from './article/suggestion/pollresult/pollresult.component';
import { CategoryComponent } from './category/category.component';
import { MemberComponent } from './register/member/member.component';
import { VillaMemberComponent } from './register/villa-member/villa-member.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { FloorComponent } from './apartment/floor/floor.component';
import { HomeComponent } from './apartment/floor/home/home.component';
import { DeliveryComponent } from './apartment/floor/home/delivery/delivery.component';
import { GatedCommunityComponent } from './gated-community/gated-community.component';
import { HomeVillaComponent } from './gated-community/home-villa/home-villa.component';
import { VillaDeliveryComponent } from './gated-community/home-villa/villa-delivery/villa-delivery.component';
import { GroupOfApartmentsComponent } from './group-of-apartments/group-of-apartments.component';
import { ApartmentsComponent } from './group-of-apartments/apartments/apartments.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateSocietyComponent } from './society/create-society/create-society.component';
import { DocumentsComponent } from './documents/documents.component';
import { SocietyDetailsComponent } from './society/society-details/society-details.component';
import { NeedSpaceDirective } from './customDirective/need-space.directive';
import { NavbarDropDownDirective } from './customDirective/navbar-drop-down.directive';
import { AppRoutingModule } from './app-routing.module';
import { SocietyListComponent } from './society/society-list/society-list.component';
import { SocietyEditComponent } from './society/society-edit/society-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    HeaderComponent,
    SocietyComponent,
    ArticleComponent,
    SecurityComponent,
    SuggestionComponent,
    PollresultComponent,
    CategoryComponent,
    MemberComponent,
    VillaMemberComponent,
    ApartmentComponent,
    FloorComponent,
    HomeComponent,
    DeliveryComponent,
    GatedCommunityComponent,
    HomeVillaComponent,
    VillaDeliveryComponent,
    GroupOfApartmentsComponent,
    ApartmentsComponent,
    FooterComponent,
    CreateSocietyComponent,
    DocumentsComponent,
    SocietyDetailsComponent,
    NeedSpaceDirective,
    NavbarDropDownDirective,
    SocietyListComponent,
    SocietyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
