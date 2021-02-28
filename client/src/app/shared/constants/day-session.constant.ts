export class DaySession {
  private static Sessions: { [key: string]: string } = {
    morning: 'sáng',
    noon: 'trưa',
    afternoon: 'chiều',
    evening: 'tối'
  }

  static get listEn(): string[] {
    return Object.keys(DaySession.Sessions);
  }

  static get listVi(): string[] {
    return Object.values(DaySession.Sessions);
  }

  static transToVi(enStr: string): string {
    return DaySession.Sessions[enStr];
  }
}
