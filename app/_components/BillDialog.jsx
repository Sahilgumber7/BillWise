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
import { Textarea } from "@/components/ui/textarea";

export function BillDialog({ open, onOpenChange }) {
  const [bill, setBill] = useState({
    customer_id: "",
    items: "",
  });

  const handleChange = (e) => {
    setBill({ ...bill, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Bill:", bill);
    onOpenChange(false);
    setBill({ customer_id: "", items: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Bill</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label>Customer ID (optional)</Label>
            <Input name="customer_id" value={bill.customer_id} onChange={handleChange} />
          </div>
          <div>
            <Label>Items (product_id:quantity)</Label>
            <Textarea name="items" value={bill.items} onChange={handleChange} placeholder="Example: 1:2, 2:1" />
          </div>
          <Button type="submit">Create Bill</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
