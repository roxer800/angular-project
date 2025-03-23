import { Component } from '@angular/core';
import { firstSection, secondSection, thirdSection, fourthSection, fifthSection, sixthSection, seventhSection, eighthSection } from '../filter-data';

@Component({
  selector: 'app-options',
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})

export class OptionsComponent {
  firstSection = firstSection;
  secondSection = secondSection;
  thirdSection = thirdSection;
  fourthSection = fourthSection;
  fifthSection = fifthSection;
  sixthSection = sixthSection;
  seventhSection = seventhSection;
  eighthSection = eighthSection;
}