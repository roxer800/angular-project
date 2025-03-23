import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-normal-search',
  imports: [CommonModule, MatSliderModule, FormsModule],
  templateUrl: './normal-search.component.html',
  styleUrl: './normal-search.component.css'
})
export class NormalSearchComponent {
  public checkInDate: string = '';
  public checkOutDate: string = '';
  public minValue = 0;
  public maxValue = 300;
  public step = 1;
  public startValue = 0;
  public endValue = 300;
  public dropdownOpen = false;
  public adultsCount = 0;
  public childrenCount = 0;
  public roomsCount = 0;
  public firstCheckTooltipVisible = false;
  public secondCheckTooltipVisible = false;
  public filters = {
    "roomTypeId": 1,
    "priceFrom": this.startValue,
    "priceTo": this.endValue,
    "maximumGuests": this.adultsCount,
    "checkIn": this.checkInDate,
    "checkOut": this.checkOutDate
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  updateValues(event: any) {
    this.startValue = event.value[0];
    this.endValue = event.value[1];
  }

  formatLabel(value: any) {
    return value;
  }

  updateDropdownText(): string {
    return `${this.adultsCount} adults • ${this.childrenCount} children • ${this.roomsCount} room`;
  }

  increment(type: string) {
    if (type === 'adults') this.adultsCount++;
    if (type === 'children') this.childrenCount++;
    if (type === 'rooms') this.roomsCount++;
  }

  decrement(type: string) {
    if (type === 'adults' && this.adultsCount > 0) this.adultsCount--;
    if (type === 'children' && this.childrenCount > 0) this.childrenCount--;
    if (type === 'rooms' && this.roomsCount > 0) this.roomsCount--;
  }

  toggleTooltip(tooltip: string, show: boolean) {
    if (tooltip === 'first') this.firstCheckTooltipVisible = show;
    if (tooltip === 'second') this.secondCheckTooltipVisible = show;
  }
}
