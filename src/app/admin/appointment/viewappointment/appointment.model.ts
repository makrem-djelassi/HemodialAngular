
import { formatDate } from '@angular/common';
export class Appointment {
  id: number;
  img: string;
  name: string;
  type: string;
  civlite: string;
  annee: number;
  mois: number;
  date1:Date;
  s1: boolean;
  date2:Date;
  s2: boolean;
  date3:Date;
  s3: boolean;
  date4:Date;
  s4: boolean;
  date5:Date;
  s5: boolean;
  date6:Date;
  s6: boolean;
  date7:Date;
  s7: boolean;
  date8:Date;
  s8: boolean;
  date9:Date;
  s9: boolean;
  date10:Date;
  s10: boolean;
  date11:Date;
  s11: boolean;
  date12:Date;
  s12: boolean;
  date13:Date;
  s13: boolean;
  date14:Date;
  s14: boolean;
  constructor(appointment: any) {
    {
      this.id = appointment.id || '';
      this.img = appointment.avatar || 'assets/images/user/user1.jpg';
      this.name = appointment.name || '';
      this.type = appointment.type || '';
      this.civlite = appointment.civlite || '';
      this.annee = appointment.annee || '';
      this.mois = appointment.mois || '';
      this.date1 = appointment.date1 || '';
      this.s1 = appointment.s1 || '';
      this.date2 = appointment.date2 || '';
      this.s2 = appointment.s2 || '';
      this.date3 = appointment.date3 || '';
      this.s3 = appointment.s3 || '';
      this.date4 = appointment.date4 || '';
      this.s4 = appointment.s4 || '';
      this.date5 = appointment.date5 || '';
      this.s5 = appointment.s5 || '';
      this.date6 = appointment.date6 || '';
      this.s6 = appointment.s6 || '';
      this.date7 = appointment.date7 || '';
      this.s7 = appointment.s7 || '';
      this.date8 = appointment.date8 || '';
      this.s8 = appointment.s8 || '';
      this.date9 = appointment.date9 || '';
      this.s9 = appointment.s9 || '';
      this.date10 = appointment.date10 || '';
      this.s10 = appointment.s10 || '';
      this.date11 = appointment.date11 || '';
      this.s11 = appointment.s11 || '';
      this.date12 = appointment.date12 || '';
      this.s12 = appointment.s12 || '';
      this.date13 = appointment.date13 || '';
      this.s13 = appointment.s13 || '';
      this.date14 = appointment.date14 || '';
      this.s14 = appointment.s14 || '';

    }
  }
  /*
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }

   */
}
