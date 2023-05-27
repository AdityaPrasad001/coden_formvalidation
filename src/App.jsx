import { useEffect, useState } from "react";
import "./App.css";
import Card from "./UI/Card";
import CustomerOnboarding from "./components/CustomerOnboarding";
import { modfiyData } from "./assets/helpers";

function App() {
  const [categoryData, setCategoryData] = useState([]);
  const [customerData, setCustomerData] = useState({
    name: "",
    phone_number: "",
    dob: "",
    category: "",
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoryData(data);
        const modifiedRes = modfiyData(data);
        setCategoryData(modifiedRes);
      });
  }, [customerData]);
  return (
    <Card>
      <CustomerOnboarding
        categoryData={categoryData}
        setCustomerData={setCustomerData}
      />
    </Card>
  );
}

export default App;
