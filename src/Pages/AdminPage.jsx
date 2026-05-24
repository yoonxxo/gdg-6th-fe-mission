import ProductRegister from "../components/admin/ProductRegister";
import ProductAdd from "../components/admin/ProductAdd";
import ProductDelete from "../components/admin/ProductDelete";

const AdminPage = () => {
  return (
    <main className="flex flex-col items-center mt-16 gap-12">
      <ProductRegister />
      <ProductAdd />
      <ProductDelete />
    </main>
  );
};

export default AdminPage;
