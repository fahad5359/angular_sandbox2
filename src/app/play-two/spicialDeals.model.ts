export class SpicialDealsModel{
  public dealName:String;
  public dealPrice:number;
  public Avalible_In_CurrentCuntry: boolean;
  public img: String;

  constructor(dealName: String, dealPrice: number, Avalible_In_CurrentCuntry: boolean, img: String) {
    this.dealName = dealName;
    this.dealPrice = dealPrice;
    this.Avalible_In_CurrentCuntry = Avalible_In_CurrentCuntry;
    this.img = img;
  }
}
