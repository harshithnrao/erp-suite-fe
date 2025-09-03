export class Budget {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
  user_type: string;


  constructor(json?: any) {
    this.id = json.id || '';
    this.name = json.name || '';
    this.email = json.email || '';
    this.password = json.password || '';
    this.address = json.address || '';
    this.user_type = json.user_type || '';

  }
}
