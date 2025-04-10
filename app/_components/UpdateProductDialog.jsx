'use client';

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function UpdateProductDialog({ open, onOpenChange, product, onSave }) {
  const [updated, setUpdated] = useState({ name: "", selling_price: "" });

  useEffect(() => {
    if (product) {
      setUpdated({
        name: product.name || "",
        selling_price: product.selling_price || ""
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setUpdated({ ...updated, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updated); // parent will update the product list
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input name="name" value={updated.name} onChange={handleChange} />
          </div>
          <div>
            <Label>Selling Price</Label>
            <Input name="selling_price" value={updated.selling_price} onChange={handleChange} />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
