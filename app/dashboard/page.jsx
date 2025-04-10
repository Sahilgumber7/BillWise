'use client';

import { useState } from 'react';
import { products as initialProducts, customers as initialCustomers } from '@/lib/dummyData';
import { Button } from '@/components/ui/button';

import { ProductDialog } from '../_components/ProductDialog';
import { CustomerDialog } from '../_components/CustomerDialog';
import { BillDialog } from '../_components/BillDialog';

import ProductTable from '../_components/ProductTable';
import CustomerGrid from '../_components/CustomerGrid';
import BillTable from '../_components/BillTable';

export default function dashboard() {
  const [products, setProducts] = useState(initialProducts);
  const [customers] = useState(initialCustomers);

  const [showProductDialog, setShowProductDialog] = useState(false);
  const [showCustomerDialog, setShowCustomerDialog] = useState(false);
  const [showBillDialog, setShowBillDialog] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const [activeTab, setActiveTab] = useState('products');

  // Dialog Handlers
  const handleOpenUpdate = (product) => {
    setSelectedProduct(product);
    setShowUpdateDialog(true);
  };

  const handleOpenDelete = (product) => {
    setSelectedProduct(product);
    setShowDeleteDialog(true);
  };

  const handleUpdate = (updatedName, updatedPrice) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === selectedProduct.id
          ? { ...p, name: updatedName, selling_price: updatedPrice }
          : p
      )
    );
    setShowUpdateDialog(false);
  };

  const handleDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
    setShowDeleteDialog(false);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">BillWise</h1>

      <div className="flex gap-4">
        <Button onClick={() => setShowProductDialog(true)}>+ Add Product</Button>
        <Button onClick={() => setShowCustomerDialog(true)}>+ Add Customer</Button>
        <Button onClick={() => setShowBillDialog(true)}>+ Create Bill</Button>
        <Button variant="secondary" disabled>
        📊 Analytics (Coming Soon)
        </Button>
      </div>

      {/* Toggle Tabs */}
      <div className="flex gap-2 pt-4">
        <Button
          variant={activeTab === 'products' ? 'default' : 'outline'}
          onClick={() => setActiveTab('products')}
        >
          Products
        </Button>
        <Button
          variant={activeTab === 'customers' ? 'default' : 'outline'}
          onClick={() => setActiveTab('customers')}
        >
          Customers
        </Button>

        <Button
        variant={activeTab === 'bills' ? 'default' : 'outline'}
        onClick={() => setActiveTab('bills')}
        >
          Bills
        </Button>
      </div>

      {/* Table Section */}
      {activeTab === 'products' && (
        <ProductTable
          products={products}
          selectedProduct={selectedProduct}
          showUpdateDialog={showUpdateDialog}
          showDeleteDialog={showDeleteDialog}
          onOpenUpdate={handleOpenUpdate}
          onOpenDelete={handleOpenDelete}
          onCloseUpdate={() => setShowUpdateDialog(false)}
          onCloseDelete={() => setShowDeleteDialog(false)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
      
      {activeTab === 'customers' && <CustomerGrid customers={customers} />}
      {activeTab === 'bills' && <BillTable />}

      {/* Dialogs */}
      <ProductDialog open={showProductDialog} onOpenChange={setShowProductDialog} />
      <CustomerDialog open={showCustomerDialog} onOpenChange={setShowCustomerDialog} />
      <BillDialog open={showBillDialog} onOpenChange={setShowBillDialog} />
    </div>
  );
}
