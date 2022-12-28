import { Order, orderStore } from "../../models/order";

const store = new orderStore();

describe("User Model", () => {
   it("should have an INDEX method", () => {
      expect(store.index).toBeDefined();
   });
  
   it("should have a SHOW method", () => {
      expect(store.show).toBeDefined();
   });
  
   it("should have a CREATE method", () => {
      expect(store.create).toBeDefined();
   });
  
   it("should have a UPDATE method", () => {
      expect(store.update).toBeDefined();
   });

   it("should have a DELETE method", () => {
      expect(store.delete).toBeDefined();
   });
});