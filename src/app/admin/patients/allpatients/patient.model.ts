export class Patient {
  id: number;
  img: string;
  name: string;
  gender: string;
  bGroup: string;
  date: string;
  address: string;
  mobile: string;
  treatment: string;
  constructor(patient: any) {
    {
      this.id = patient.id || this.getRandomID();
      this.img = patient.avatar || 'assets/images/user/user1.jpg';
      this.name = patient.name || '';
      this.gender = patient.gender || 'male';
      this.bGroup = patient.email || '';
      this.date = patient.date || '';
      this.address = patient.address || '';
      this.mobile = patient.mobile || '';
      this.treatment = patient.treatment || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
