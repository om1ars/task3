import React, { useState } from "react";
import { categories } from "../../constants/add-expense";
import "react-toastify/dist/ReactToastify.css";
import "./add-form.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import SuccessModal from "./success-modal";

const AddForm = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [supply, setSupply] = useState("");
  const [comment, setComment] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
    console.log(category);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter complete data");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(!modalOpen);
  };

  return (
    <div className="add-form">
      <SuccessModal modalOpen={modalOpen} />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="container-form">
        <div className="form-item">
          <label>Number</label>
          <input
            placeholder="Give a name to your expenditure"
            value={title}
            onChange={(e) => handleTitle(e)}
          />
        </div>
        <div className="form-item">
          <label>Invoice Date</label>
          <input
            placeholder="Enter Amount"
            className="amount-input"
            onChange={(e) => handleAmount(e)}
            value={amount}
          />
        </div>
        <div className="form-item">
          <label>Supply Date:</label>
          <input
            placeholder="Enter Amount"
            className="amount-input"
            onChange={(e) => setSupply(e.target.v)}
            value={amount}
          />
        </div>
      </div>

      <div className="category-container-parent">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Comment</label>
          <input
            style={{ height: "18" }}
            className="amount-input"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class="fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
