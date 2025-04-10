'use client';

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ProductDialog({ open, onOpenChange }) {
  const [product, setProduct] = useState({
    name: "",
    cost: "",
    selling_price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product:", product); // Later you’ll update the product list
    onOpenChange(false);
    setProduct({ name: "", cost: "", selling_price: "", stock: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label>Name</Label>
            <Input name="name" value={product.name} onChange={handleChange} />
          </div>
          <div>
            <Label>Cost</Label>
            <Input name="cost" value={product.cost} onChange={handleChange} />
          </div>
          <div>
            <Label>Selling Price</Label>
            <Input name="selling_price" value={product.selling_price} onChange={handleChange} />
          </div>
          <div>
            <Label>Stock</Label>
            <Input name="stock" value={product.stock} onChange={handleChange} />
          </div>
          <Button type="submit">Add Product</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
