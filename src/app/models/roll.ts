export class Roll{
  name: string;
  value: number;

  public constructor(init?: Partial<Roll>) {
    Object.assign(this, init);
  }
}
