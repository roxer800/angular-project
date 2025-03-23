import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

export const routes: Routes = [
    {path: "", component: MainSectionComponent},
    {path: "hotel/:id", component: HotelInfoComponent},
    {path: "room/:id", component: RoomPageComponent},
    {path: "form/:id", component: FormComponentComponent},
    {path: "bookingDetails", component: BookingDetailsComponent},
];
