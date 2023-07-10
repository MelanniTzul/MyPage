import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Skills } from 'src/app/interface/skills';

@Component({
  selector: 'skills',
  standalone: true,
  styles:[
    `.dark_theme:active{
    background-color:gold ;
  }`
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './skills.component.html',

})
export class SkillsComponent {

  skills:Skills[];
  @Input() darkTheme!:boolean;
  constructor(){
    this.skills=[];
    this.chargueSkills()
  }
  chargueSkills(){
    let skill1: Skills = {
      url: './assets/icons/html.png',
      name: 'HTML5',
    }
    let skill2: Skills = {
      url: './assets/icons/javascript.png',
      name: 'JAVASCRIPT',
    }


    let skill3: Skills = {
      url: './assets/icons/html.png',
      name: 'CSS',
    }
    let skill4: Skills = {
      url: './assets/icons/java_original.png',
      name: 'JAVA',
    }
    let skill5: Skills = {
      url: './assets/icons/angular.png',
      name: 'ANGULAR',
    }
    let skill6: Skills = {
      url: './assets/icons/mysql.png',
      name: 'MYSQL',
    }
    let skill7: Skills = {
      url: './assets/icons/sql.png',
      name: 'SQL Server',
    }
    let skill8: Skills = {
      url: './assets/icons/ubuntu.png',
      name: 'UBUNTU',
    }


    let skill9: Skills = {
      url: './assets/icons/c.png',
      name: 'C#',
    }

    let skill10: Skills = {
      url: './assets/icons/cpp.png',
      name: 'C++',
    }

    let skill11: Skills = {
      url: './assets/icons/git.png',
      name: 'GIT',
    }
    let skill12: Skills = {
      url: './assets/icons/typescript.png',
      name: 'TYPESCRIPT',
    }

    let skill14: Skills = {
      url: './assets/icons/typescript.png',
      name: 'Typescript',
    }

    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
    this.skills.push(skill5);
    this.skills.push(skill6);
    this.skills.push(skill7);
    this.skills.push(skill8);
    this.skills.push(skill9);
    this.skills.push(skill10);
    this.skills.push(skill11);
    this.skills.push(skill12);
  }

}
