export class Inventory {
  id: number;
  farmer_id: number;
  item_id: number;
  weight: number;
  remaining_weight: number;
  final_rate_per_kg: number;
  name: string;
  farmer_name: string;
  item_name: string;

  constructor(json: any) {
    this.id = json.id;
    this.farmer_id = json.farmer_id;
    this.item_id = json.item_id;
    this.weight = json.weight;
    this.remaining_weight = json.remaining_weight;
    this.final_rate_per_kg = json.final_rate_per_kg;
    this.name = json.name;
    this.farmer_name = json.farmer_name;
    this.item_name = json.item_name;
  }
}
