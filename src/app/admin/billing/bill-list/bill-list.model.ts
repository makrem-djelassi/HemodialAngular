export class BillList {
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
  NbreSeance:number;
  date: string;
  total: number;
  constructor(billList: any) {
    {
      this.id = billList.id || '';
      this.img = billList.avatar || 'assets/images/user/user1.jpg';
      this.name = billList.name || '';
      this.type = billList.type || '';
      this.civlite = billList.civlite || '';
      this.annee = billList.annee || '';
      this.mois = billList.mois || '';
      this.date1 = billList.date1 || '';
      this.s1 = billList.s1 || '';
      this.date2 = billList.date2 || '';
      this.s2 = billList.s2 || '';
      this.date3 = billList.date3 || '';
      this.s3 = billList.s3 || '';
      this.date4 = billList.date4 || '';
      this.s4 = billList.s4 || '';
      this.date5 = billList.date5 || '';
      this.s5 = billList.s5 || '';
      this.date6 = billList.date6 || '';
      this.s6 = billList.s6 || '';
      this.date7 = billList.date7 || '';
      this.s7 = billList.s7 || '';
      this.date8 = billList.date8 || '';
      this.s8 = billList.s8 || '';
      this.date9 = billList.date9 || '';
      this.s9 = billList.s9 || '';
      this.date10 = billList.date10 || '';
      this.s10 = billList.s10 || '';
      this.date11 = billList.date11 || '';
      this.s11 = billList.s11 || '';
      this.date12 = billList.date12 || '';
      this.s12 = billList.s12 || '';
      this.date13 = billList.date13 || '';
      this.s13 = billList.s13 || '';
      this.date14 = billList.date14 || '';
      this.s14 = billList.s14 || '';
      this.NbreSeance = billList.NbreSeance || '';
      this.date = billList.date || '';
      this.total = billList.total || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
