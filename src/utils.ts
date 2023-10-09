class Utils {
  public static uuid(): string {
    /*jshint bitwise:false */
    var i, random;
    var uuid = "";

    for (i = 0; i < 32; i++) {
      random = (Math.random() * 16) | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += "-";
      }
      uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
        16
      );
    }

    return uuid;
  }

  public static pluralize(count: number, word: string) {
    return count === 1 ? word : word + "s";
  }

  public static store(
    namespace: string,
    data?: Uint8Array
  ): Uint8Array | void | undefined {
    if (data) {
      return localStorage.setItem(
        namespace,
        btoa(String.fromCharCode.apply(null, data))
      );
    }
    var store = localStorage.getItem(namespace);
    if (store) {
      const stringData = atob(store);
      const array = new Uint8Array(stringData.length);
      for (let i = 0; i < stringData.length; i++) {
        array[i] = stringData.charCodeAt(i);
      }
      return array;
    }
    return undefined;
  }

  public static extend(...objs: any[]): any {
    var newObj: any = {};
    for (var i = 0; i < objs.length; i++) {
      var obj = objs[i];
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }
}

export { Utils };
