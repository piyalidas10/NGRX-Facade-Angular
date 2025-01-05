import { Bucket } from "./bucket.model";
import { Grocery } from "./grocery.model";

export interface StateModel {
    groceries: Grocery[];
    buckets: Bucket[];
}