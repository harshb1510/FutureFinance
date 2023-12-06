import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./payment.css";
import jwtDecode from "jwt-decode";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ENV from '../../cofig.js'

// Set the app element for react-modal
Modal.setAppElement("#root"); // replace '#root' with the ID of your root element

const Payment = () => {
  

  useEffect(() => {
    const loadRazorpayScript = async () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
      };
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

  const checkMoneyStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background:"#dcd9d9",
      borderRadius: "10px",
      height:"300px"

    },
  };

  const addMoneyStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background:"#dcd9d9",
      borderRadius: "10px",
      height:"350px"

    },
  };
  const transferStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background:"#dcd9d9",
      borderRadius: "10px",
      height:"480px"

    },
  };

  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  const decodedUser = user ? jwtDecode(user) : null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddMoneyModalOpen, setIsAddMoneyModalOpen] = useState(false);
  const [isTransferMoneyModalOpen, setIsTransferMoneyModalOpen] =
    useState(false);

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

  const openTransferMoneyModal = () => {
    if (user) {
      setIsTransferMoneyModalOpen(true);
    } else {
      toast.error("Login First");
    }
  };

  const openTransactionHistory = () => {
    if (user) {
      navigate("/transactionHistory");
    } else {
      toast.error("Login First");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddMoneyModalOpen(false);
    setIsTransferMoneyModalOpen(false);
  };



  const username = decodedUser ? decodedUser.username : null;
  const [data, setData] = useState({
    pin: "",
    account: "",
  });
  const [money, setMoney] = useState({
    addMoney: "",
    transferMoney: "",
  });
  const [ transactions,setTransactions] = useState([]); 

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `${ENV.HOST}/user/${username}`
        );
        setTransactions(response.data.transactions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTransactions();
  }, [username]);


  const handleAddMoney = (amount) => {
    const currentAmount = parseFloat(money.addMoney) || 0;
    const newAmount = currentAmount + amount;
    setMoney({ ...money, addMoney: newAmount.toFixed(2) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postPin = await axios.post(
        `${ENV.HOST}/user/${username}/pinMatch`,
        data
      );
      
      toast.success("Balance :" + postPin.data.balance);
      closeModal();
      setData({ ...data, pin: "" });
    } catch (error) {
      console.log(error);
    }
  };


  const initPayment = (addMoneyResponse) => {
    
    const options = {
      key: ENV.RAZORPAY_PUBLIC_ID ,
      amount: addMoneyResponse.data.data.amount,
      currency: addMoneyResponse.data.data.currency,
      order_id: addMoneyResponse.data.data.id,
      handler: async (response) => {
        
        try {
          // Send the necessary information for payment verification
          const verifyUrl = `${ENV.HOST}/user/${username}/paymentVerify`;
          const verifyData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };
           await axios.post(verifyUrl, verifyData);
  
          // Assuming the verification is successful, proceed with updating the balance
          const updateBalanceUrl = `${ENV.HOST}/user/${username}/updateBalance`;
          const updateBalanceData = {
            amount: addMoneyResponse.data.data.amount/100, // Adjust as needed
          };
         await axios.post(
            updateBalanceUrl,
            updateBalanceData
          );
  
          // Handle the response or perform additional actions if needed
          
          toast.success(`Rs.${addMoneyResponse.data.data.amount/100} has been credited in your account`);
          closeModal();
          setData({ ...data, pin: "" });
          setMoney({ ...money, addMoney: "" });
  
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  

  const handleAddMoneySubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${ENV.HOST}/user/${username}/pinMatch`,
        { pin: data.pin }
      );

      // Assuming postPin.data.balance is the current balance after PIN verification
      
      // Now, make a request to add money
      const addMoneyResponse = await axios.post(
        `${ENV.HOST}/user/${username}/addMoney`,
        {
          addMoney: parseFloat(money.addMoney),
        }
      );
      console.log(addMoneyResponse);

     initPayment(addMoneyResponse);
     
    
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleTransferMoney = async (e) => {
    e.preventDefault();
    try {
   await axios.post(
        `${ENV.HOST}/user/${username}/pinMatch`,
        { pin: data.pin }
      );

      // Now, make a request to transfer money
     await axios.post(
        `${ENV.HOST}/user/${username}/transferMoney`,
        {
          account: data.account,
          amount: parseFloat(money.transferMoney),
        }
      );
      // Assuming transferMoneyResponse.data.balance is the updated balance after transfering money
      toast.success(
        money.transferMoney +
          "  " +
          " is transfered to Account No." +
          data.account
      );
      closeModal();
      setData({ ...data, account: "", pin: "" });
      setMoney({ ...money, transferMoney: "" });
      // window.location.reload();
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
          style={checkMoneyStyles}
        >
          <div className="profile-wrapper">
            <h2 className="payment-h2">Check Balance</h2>
            <form className="payment-form" onSubmit={handleSubmit}>
              <label className="payment-label" htmlFor="pin">
                Enter PIN:
              </label>
              <input
                className="modal-input"
                type="password"
                name="pin"
                value={data.pin}
                onChange={(e) => setData({ ...data, pin: e.target.value })}
                required
                placeholder="PIN"
              />
              <button className="usernameButton" type="submit">
                Proceed
              </button>
            </form>
          </div>
        </Modal>

        <Modal
          isOpen={isAddMoneyModalOpen}
          onRequestClose={closeModal}
          contentLabel="Add Money Modal"
          style={addMoneyStyles}
        >
          <div className="profile-wrapper">
            <h2 className="payment-h2">Add Money</h2>
            <form onSubmit={handleAddMoneySubmit} id="form" className="payment-form">
              <label htmlFor="addMoney" className="payment-label">Enter Amount:</label>
              <input
               className="modal-input"
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
                <button type="button" className="usernameButton" onClick={() => handleAddMoney(200)}>
                  200
                </button>
                <button type="button" className="usernameButton" onClick={() => handleAddMoney(500)}>
                  500
                </button>
                <button type="button" className="usernameButton" onClick={() => handleAddMoney(1000)}>
                  1000
                </button>
              </div>
              <input
                className="modal-input"
                type="password"
                name="pin"
                value={data.pin}
                onChange={(e) => setData({ ...data, pin: e.target.value })}
                required
                placeholder="PIN"
              />
              <button className="usernameButton" type="submit">Add Money</button>
            </form>
          </div>
        </Modal>
        <Modal
          isOpen={isTransferMoneyModalOpen}
          onRequestClose={closeModal}
          contentLabel="Transfer Money Modal"
          style={transferStyles}
        >
          <div className="profile-wrapper">
            <h2 className="payment-h2">Transfer Money</h2>
            <form className="profile-form" onSubmit={handleTransferMoney} id="form">
              <label className="payment-label" htmlFor="account"> Enter Account No. :</label>
              <input
               className="modal-input"
                type="number"
                name="account"
                value={data.account}
                onChange={(e) => setData({ ...data, account: e.target.value })}
                required
                placeholder="Account No."
              />
              <br></br>
              <label className="payment-label"  htmlFor="amount">Enter Amount:</label>
              <input
               className="modal-input"
                type="number"
                step="0.01"
                name="amount"
                value={money.transferMoney}
                onChange={(e) =>
                  setMoney({ ...money, transferMoney: e.target.value })
                }
                required
                placeholder="Amount"
              />
              <br></br>
              <label className="payment-label"  htmlFor="pin">Enter PIN:</label>
              <br></br>
              <input
               className="modal-input"
                type="password"
                name="pin"
                value={data.pin}
                onChange={(e) => setData({ ...data, pin: e.target.value })}
                required
                placeholder="PIN"
              />
              <button className="usernameButton" type="submit">Transfer Money</button>
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
          <button className="payment-option" onClick={openTransferMoneyModal}>
            Transfer Money
          </button>
        </div>
        <div>
          <button className="payment-option" onClick={openTransactionHistory}>
            Transaction History
          </button>
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
