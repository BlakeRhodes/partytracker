export class Character {
  name: string;
  passiveInsight: number;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  ac: number;

  public constructor(init?: Partial<Character>) {
    Object.assign(this, init);
  }
}

export function buildCharacter() {
  return new Character({
      name: 'Frank',
      passiveInsight: 20,
      str: 20,
      dex: 20,
      con: 20,
      int: 20,
      wis: 20,
      cha: 20,
      ac: 20,
    }
  );
}
