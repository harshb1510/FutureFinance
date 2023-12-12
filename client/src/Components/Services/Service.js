import "./Service.css"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section>

    <div className='serviceContainer'>
       <div className="left">
        <h1 id="heading">Our Services</h1>
       </div>
      <Link to='/payment'> <div className="right">
        <div className="service1">
            <PaymentIcon className="serviceIcon" style={{width:"60px",height:"60px"}}/>
            Transfer Money
            
        </div>
        <div className="service2">
            <AccountBalanceIcon className="serviceIcon" style={{width:"60px",height:"60px"}}/>
            Check Balance
        </div>
        <div className="service3">
            <AccountBalanceWalletIcon className="serviceIcon" style={{width:"60px",height:"60px"}}/>
            Transaction History
        </div>
       </div>
       </Link>
    </div>
    </section>
  )
}

export default Service
