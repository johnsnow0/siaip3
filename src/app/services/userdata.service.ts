import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

users () {

  return [
    {name:'Jonas', email:'jonas@jonas.lt', phone:'34543', accounts:['facegook', 'snap', 'gmail']},
  {name:'petras', email:'petras@jonas.lt', phone:'1244', accounts:['facegook', 'google', 'gmail']},
  {name:'simas', email:'simas@jonas.lt', phone:'43223', accounts:['facegook', 'linked', 'gmail']},
  {name:'kazys', email:'kazys@jonas.lt', phone:'45eww', accounts:['facegook', 'skype', 'gmail']},
  {name:'gaidys', email:'gaidys@jonas.lt', phone:'45554222', accounts:['irc', 'google', 'gmail']}


]
}




}
