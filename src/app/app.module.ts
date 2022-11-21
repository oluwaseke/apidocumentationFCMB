import { AccinquiryComponent } from './components/accinquiry/accinquiry.component';
import { AccmanagementComponent } from './components/accmanagement/accmanagement.component';
import { AccopeningComponent } from './components/accopening/accopening.component';
import { AirtimevendingComponent } from './components/airtimevending/airtimevending.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AvailableServicesComponent } from './components/available-services/available-services.component';
import { BiometricsComponent } from './components/biometrics/biometrics.component';
import { BrowserModule } from '@angular/platform-browser';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { InterbanktransferComponent } from './components/interbanktransfer/interbanktransfer.component';
import { IntrabanktransferComponent } from './components/intrabanktransfer/intrabanktransfer.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { NgModule } from '@angular/core';
import { RatesComponent } from './components/rates/rates.component';
import { SctransferComponent } from './components/sctransfer/sctransfer.component';
import { StatementapiComponent } from './components/statementapi/statementapi.component';
import { TestParametersComponent } from './components/test-parameters/test-parameters.component';
import { UrlconfigComponent } from './components/urlconfig/urlconfig.component';
import { UtilityinquiryComponent } from './components/utilityinquiry/utilityinquiry.component';
import { ValidationComponent } from './components/validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AvailableServicesComponent,
    GettingStartedComponent,
    TestParametersComponent,
    AuthenticationComponent,
    AccinquiryComponent,
    AccmanagementComponent,
    AccopeningComponent,
    BiometricsComponent,
    ValidationComponent,
    UrlconfigComponent,
    AirtimevendingComponent,
    InterbanktransferComponent,
    IntrabanktransferComponent,
    RatesComponent,
    SctransferComponent,
    StatementapiComponent,
    UtilityinquiryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
