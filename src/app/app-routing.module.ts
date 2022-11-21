import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccinquiryComponent } from './components/accinquiry/accinquiry.component';
import { AccmanagementComponent } from './components/accmanagement/accmanagement.component';
import { AccopeningComponent } from './components/accopening/accopening.component';
import { AirtimevendingComponent } from './components/airtimevending/airtimevending.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AvailableServicesComponent } from './components/available-services/available-services.component';
import { BiometricsComponent } from './components/biometrics/biometrics.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { InterbanktransferComponent } from './components/interbanktransfer/interbanktransfer.component';
import { IntrabanktransferComponent } from './components/intrabanktransfer/intrabanktransfer.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { RatesComponent } from './components/rates/rates.component';
import { SctransferComponent } from './components/sctransfer/sctransfer.component';
import { StatementapiComponent } from './components/statementapi/statementapi.component';
import { TestParametersComponent } from './components/test-parameters/test-parameters.component';
import { UrlconfigComponent } from './components/urlconfig/urlconfig.component';
import { UtilityinquiryComponent } from './components/utilityinquiry/utilityinquiry.component';
import { ValidationComponent } from './components/validation/validation.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'availableservices', component: AvailableServicesComponent },
  { path: 'gettingstarted', component: GettingStartedComponent },
  { path: 'testparameters', component: TestParametersComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'accountinquiry', component: AccinquiryComponent },
  { path: 'accountmanagement', component: AccmanagementComponent },
  { path: 'accountopening', component: AccopeningComponent },
  { path: 'bvnbiometrics', component: BiometricsComponent },
  { path: 'bvnvalidation', component: ValidationComponent },
  { path: 'urlconfig', component: UrlconfigComponent },
  { path: 'cimg', component: AirtimevendingComponent },
  { path: 'interbanktransfer', component: InterbanktransferComponent },
  { path: 'intrabanktransfer', component: IntrabanktransferComponent },
  { path: 'rates', component: RatesComponent },
  { path: 'sctransfer', component: SctransferComponent },
  { path: 'statementapi', component: StatementapiComponent },
  { path: 'utilityinquiry', component: UtilityinquiryComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
