export class ObjectUltility {
  static filterPropsNull(obj: object) {
    return Object.keys(obj).reduce((result, key) => {
      if(obj[key] && typeof obj[key] != "object") {
        result[key] = obj[key];
      }

      return result;
    }, {})
  }
}
