import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';

export default function ProductTable({
  products,
  selectedProduct,
  showUpdateDialog,
  showDeleteDialog,
  onOpenUpdate,
  onOpenDelete,
  onCloseUpdate,
  onCloseDelete,
  onUpdate,
  onDelete
}) {
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState('');

  // Set initial values when selectedProduct changes
  useEffect(() => {
    if (selectedProduct) {
      setUpdatedName(selectedProduct.name);
      setUpdatedPrice(selectedProduct.selling_price);
    }
  }, [selectedProduct]);

  return (
    <>
      <div className="mt-6 border rounded-md overflow-x-auto">
        <h2 className="text-xl font-semibold p-4 border-b">Products</h2>
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Cost</th>
              <th className="p-3">Selling Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-3">{product.name}</td>
                <td className="p-3">₹{product.cost}</td>
                <td className="p-3">₹{product.selling_price}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3">
                  <Button variant="outline" className="mr-2" onClick={() => onOpenUpdate(product)}>
                    Update
                  </Button>
                  <Button variant="destructive" onClick={() => onOpenDelete(product)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Dialog */}
      <Dialog open={showUpdateDialog} onOpenChange={onCloseUpdate}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Product</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <Input
              placeholder="Product Name"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <Input
              placeholder="Selling Price"
              type="number"
              value={updatedPrice}
              onChange={(e) => setUpdatedPrice(e.target.value)}
            />
          </div>
          <DialogFooter className="mt-4">
            <Button onClick={() => onUpdate(updatedName, updatedPrice)}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={onCloseDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete <strong>{selectedProduct?.name}</strong>?</p>
          <DialogFooter className="mt-4">
            <Button variant="destructive" onClick={onDelete}>Delete</Button>
            <Button variant="outline" onClick={onCloseDelete}>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
