export class QuoteLog {
  id: string;
  quoteId: string;
  quoteEventType: string;
  quoteEventData: string;
  validFrom: string;
  validTill: string;
  createBy: any;
  modifiedBy: any;
  createdAt: string;
  updatedAt: string;
}

export class QuoteDetail {
  id: string;
  quoteId: string;
  addlDataType: string;
  addlDataName: string;
  validFrom: string;
  validTill: string;
  createBy: any;
  modifiedBy: any;
  createdAt: string;
  updatedAt: string;
}

export class Order {
  id: number;
  inventory_id: number;
  farmer_id: number;
  buyer_id: number;
  items_id: number;
  weight: number;
  ordered_date: string;
  est_delivery_date: string;
  order_amount: number;
  discount_applied: number;
  amount_pending: number;
  final_amount: number;
  status: string;
  item_name: string;
  farmer_name:string;
  buyer_name:string;
  inventory_name:string;

  constructor(json: any) {
    this.id = json.id;
    this.inventory_id = json.inventory_id;
    this.farmer_id = json.farmer_id;
    this.buyer_id = json.buyer_id;
    this.items_id = json.items_id;
    this.weight = json.weight;
    this.ordered_date = json.ordered_date;
    this.est_delivery_date = json.est_delivery_date;
    this.order_amount = json.order_amount;
    this.discount_applied = json.discount_applied;
    this.amount_pending = json.amount_pending;
    this.final_amount = json.final_amount;
    this.status = json.status;
    this.inventory_name = json.inventory_name;
    this.buyer_name = json.buyer_name;
    this.farmer_name = json.farmer_name;
    this.item_name = json.item_name;

  }

}


export class QuoteDetailModel {
  id: string;
  quoteId: string;
  qty: string;
  itemCode: string;
  uom: string;
  imgLink: string;
  createBy: string | null;
  modifiedBy: string | null;
  createdAt: string;
  updatedAt: string;

  constructor(data?: any) {
    this.id = data && data.id || '';
    this.quoteId = data && data.quoteId || '';
    this.qty = data && data.qty || '';
    this.itemCode = data && data.itemCode || '';
    this.uom = data && data.uom || '';
    this.imgLink = data && data.imgLink || '';
    this.createBy = data && data.createBy || null;
    this.modifiedBy = data && data.modifiedBy || null;
    this.createdAt = data && data.createdAt || '';
    this.updatedAt = data && data.updatedAt || '';
  }
}
