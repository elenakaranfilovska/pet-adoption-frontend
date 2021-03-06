import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdFormComponent } from './forms/ad-form/ad-form.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PetFinderQuizComponent } from './pet-finder-quiz/pet-finder-quiz.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaQuestionsComponent } from './fa-questions/fa-questions.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile-details/profile/profile.component';
import { AdFormEditComponent } from './forms/edit-forms/ad-form-edit/ad-form-edit.component';
import { FavouritePetsComponent } from './favourite-pets/favourite-pets.component';
import { DeletePetComponent } from './delete-pet/delete-pet.component';
import { AdoptRequestsComponent } from './profile-details/adopt-requests/adopt-requests.component';
import { EditUserComponent } from './profile-details/edit-user/edit-user.component';
import { AdoptRequestCreateComponent } from './adopt-request-create/adopt-request-create.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
import { ArticleComponent } from './articles/article/article.component';
import { RouteGuardService } from './route-guard.service';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './forgot-password/reset-password/reset-password.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Route[] = [{
  path: 'home',
  component: HomePageComponent
}, {
  path: 'ads/new',
  component: AdFormComponent
}, {
  path: 'pets',
  component: PetsComponent
}, {
  path: 'pets/:id',
  component: PetDetailsComponent
}, {
  path: 'pet/finder/quiz',
  component: PetFinderQuizComponent
}, {
  path: 'contact',
  component: ContactUsComponent
}, {
  path: 'faqs',
  component: FaQuestionsComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'sign-up',
  component: SignUpComponent
}, {
  path: 'edit/:id',
  component: AdFormEditComponent
}, {
  path: 'delete/:id',
  component: DeletePetComponent
}, {
  path: 'requests/:id',
  component: AdoptRequestsComponent
}, {
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'favourite',
  component: FavouritePetsComponent
}, {
  path: 'edit-profile',
  component: EditUserComponent
}, {
  path: 'adopt/:id',
  component: AdoptRequestCreateComponent
}, {
  path: 'edit-profile/password',
  component: ChangePasswordComponent
}, {
  path: 'article/create',
  canActivate: [RouteGuardService],
  component: ArticleCreateComponent
}, {
  path: 'article/:id',
  component: ArticleComponent
}, {
  path: '',
  redirectTo: 'home', pathMatch: 'full'
}, {
  path: "articles/:theme/page/:page",
  component: ArticleListComponent
},
{
  path: 'login/forgot-password',
  component: ForgotPasswordComponent
}, {
  path: 'login/forgot-password/reset',
  component: ResetPasswordComponent
}, {
  path: 'sitemap',
  component: SitemapComponent
}, {
  path: 'privacy-police',
  component: PrivacyPoliceComponent
}, {
  path: 'terms-of-service',
  component: TermsOfServiceComponent
}, {
  path: 'about-us',
  component: AboutUsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
