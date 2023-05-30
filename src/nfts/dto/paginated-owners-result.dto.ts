import { Owner } from "../../owners/owner.entity";

export class PaginatedOwnersResultDto {
  data: Owner[];
  page: number;
  limit: number;
  totalCount: number;
}
