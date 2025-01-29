import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-creators',
  imports: [NgStyle],
  templateUrl: './top-creators.component.html',
  styleUrl: './top-creators.component.css',
})
export class TopCreatorsComponent {
  creators = [
    {
      name: 'Ivan Ivanov',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Vasilena Petrova',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Ivaila Kukusheva',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Stoilka Ivanov',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Ivan Terziev',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
  ];

  additionalCreators = [
    {
      name: 'Petar Dimitrov',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Maria Stoyanova',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Georgi Angelov',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Desislava Petkova',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
    {
      name: 'Nikola Hristov',
      img: 'https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp-300x300.png',
    },
  ];
  showAll = false;
  containerStyle = { 'flex-wrap': 'nowrap' };
  text = 'Show more';

  toggleShowMore(): void {
    this.showAll = !this.showAll;
    if (this.showAll) {
      this.creators = [...this.creators, ...this.additionalCreators];
      this.text = 'Show less';
    } else {
      this.creators = this.creators.slice(0, 5);
      this.text = 'Show more';
    }
  }
}
