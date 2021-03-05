
export class GetPrescriptionsRequest {
  pageIndex: number = 1;
  pageSize: number = 10;
  queryParams: {
    name: string;
    phone: string;
    address: string;
    dob: string;
  } = {
    name: "",
    phone: "",
    address: "",
    dob: ""
  };
}
