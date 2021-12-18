import React from "react";
import "./card.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/expenses";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    notifySuccess();
    dispatch(deleteExpense(item));
  };

  return (
    <div
      className="card"
    >
      <div>Create</div>
      <div className="card-right">
        <label className="card-amount">{item.title}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount"> {item.amount}</label>
        </div>
        <div>
          <label className="card-amount"> {item.comment}</label>
        </div>

        <div className="delete-icon" onClick={handleDelete}>
          <i class="fi-rr-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
