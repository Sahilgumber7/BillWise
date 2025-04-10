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

export function CustomerDialog({ open, onOpenChange }) {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Customer:", customer);
    onOpenChange(false);
    setCustomer({ name: "", phone: "", address: "", email: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label>Name</Label>
            <Input name="name" value={customer.name} onChange={handleChange} />
          </div>
          <div>
            <Label>Phone</Label>
            <Input name="phone" value={customer.phone} onChange={handleChange} />
          </div>
          <div>
            <Label>Address</Label>
            <Input name="address" value={customer.address} onChange={handleChange} />
          </div>
          <div>
            <Label>Email (optional)</Label>
            <Input type="email" name="email" value={customer.email} onChange={handleChange} />
          </div>
          <Button type="submit">Add Customer</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
