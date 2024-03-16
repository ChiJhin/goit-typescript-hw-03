
class Human {
  constructor(private key: Key) {}
  public getKey(): Key {
    return this.key;
  }
}

class Key {
  private signature: number = Math.random();
  public getSignature(): number {
    return this.signature;
  }
}


abstract class House {
  door: boolean = false;
  key: Key;
  tenant: Human[] = [];
  comeIn(human: Human): void {
    if (this.door) {
      this.tenant.push(human);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const human = new Human(key);

house.openDoor(human.getKey());

house.comeIn(human);

export {};
