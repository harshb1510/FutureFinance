import React, { useState } from "react";
import Modal from "react-modal";
import "./payment.css";
import jwtDecode from "jwt-decode";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// Set the app element for react-modal
Modal.setAppElement("#root"); // replace '#root' with the ID of your root element

const Payment = () => {
  const user = localStorage.getItem("token");
  const decodedUser = user ? jwtDecode(user) : null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddMoneyModalOpen, setIsAddMoneyModalOpen] = useState(false);
  const openModal = () => {
    if (user) {
      setIsModalOpen(true);
    } else {
      toast.error("Login First");
    }
  };

  const openAddMoneyModal = () => {
    if (user) {
      setIsAddMoneyModalOpen(true);
    } else {
      toast.error("Login First");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddMoneyModalOpen(false);
  };

  const username = decodedUser ? decodedUser.username : null;
  const [data, setData] = useState({
    pin: "",
  });
  const [money, setMoney] = useState({
    addMoney: "",
  });

  const handleAddMoney = (amount) => {
    const currentAmount = parseFloat(money.addMoney) || 0;
    const newAmount = currentAmount + amount;
    setMoney({ ...money, addMoney: newAmount.toFixed(2) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postPin = await axios.post(
        `http://localhost:8080/api/user/${username}/pinMatch`,
        data
      );
      console.log(postPin);
      toast.success("Balance :" + postPin.data.balance);
      closeModal();
      setData({ ...data, pin: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddMoneySubmit = async (e) => {
    e.preventDefault();
    try {
      const postPin = await axios.post(
        `http://localhost:8080/api/user/${username}/pinMatch`,
        { pin: data.pin }
      );

      // Assuming postPin.data.balance is the current balance after PIN verification

      // Now, make a request to add money
      const addMoneyResponse = await axios.post(
        `http://localhost:8080/api/user/${username}/addMoney`,
        {
          addMoney: parseFloat(money.addMoney),
        }
      );
      // Assuming addMoneyResponse.data.balance is the updated balance after adding money
      toast.success(money.addMoney + "  " + " is credited into your account");
      closeModal();
      setMoney({ ...money, addMoney: "" });
      setData({ ...data, pin: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="payment-options">
        <div>
          <button className="payment-option" onClick={openModal}>
            Check Balance
          </button>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Check Balance Modal"
        >
          <div>
            <h2 className="payment-h2">Check Balance</h2>
            <form className="payment-form" onSubmit={handleSubmit}>
              <label className="payment-label" htmlFor="pin">Enter PIN:</label>
              <input 
              className="payment-input"
                type="password"
                name="pin"
                value={data.pin}
                onChange={(e) => setData({ ...data, pin: e.target.value })}
                required
                placeholder="PIN"
              />
              <button className="payment-button" type="submit">Proceed</button>
            </form>
          </div>
        </Modal>

        <Modal
          isOpen={isAddMoneyModalOpen}
          onRequestClose={closeModal}
          contentLabel="Add Money Modal"
        >
          <div>
            <h2>Add Money</h2>
            <form onSubmit={handleAddMoneySubmit} id="form">
              <label htmlFor="addMoney">Enter Amount:</label>
              <input
                type="number"
                step="0.01"
                name="addMoney"
                value={money.addMoney}
                onChange={(e) =>
                  setMoney({ ...money, addMoney: e.target.value })
                }
                required
                placeholder="Amount"
              />

              <div>
                <button type="button" onClick={() => handleAddMoney(200)}>
                  200
                </button>
                <button type="button" onClick={() => handleAddMoney(500)}>
                  500
                </button>
                <button type="button" onClick={() => handleAddMoney(1000)}>
                  1000
                </button>

              </div>
              <input 
              className="payment-input"
                type="password"
                name="pin"
                value={data.pin}
                onChange={(e) => setData({ ...data, pin: e.target.value })}
                required
                placeholder="PIN"
              />
              <button type="submit">Add Money</button>
            </form>
          </div>
        </Modal>

        {/* Other buttons */}
        <div>
          <button className="payment-option" onClick={openAddMoneyModal}>
            Add Money
          </button>
        </div>
        <div>
          <button className="payment-option">Transfer Money</button>
        </div>
        <div>
          <button className="payment-option">Transaction History</button>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default Payment;
