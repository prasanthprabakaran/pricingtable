import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-svg-core/styles.css'
import  { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <div className="App pricing">
      <div className='container'>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='card mb-5 mb-lg-0'>
            <div className='card-body'>
              <h5 className='card-title text-muted text-uppercase text-center'>Free</h5>
              <h6 className='card-price text-center'>$0<span className='period'>/month</span></h6>
              <ul className='fa-ul'>
                <li><span className='fa-li'><i className='fas'><FontAwesomeIcon  icon={faCheck}/> </i></span>Single User</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>5GB Storage</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Unlimited Public Projects</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Community Access</li>
                <li className='text-muted'><span className='fa-li'><i className='icon'><FontAwesomeIcon icon={faXmarkCircle} /></i></span>Unlimited Private Projects</li>
                <li className='text-muted'><span className='fa-li'><i className='icon'><FontAwesomeIcon icon={faXmarkCircle} /></i></span>Dedicated Phone Support</li>
                <li className='text-muted'><span className='fa-li'><i className='icon'><FontAwesomeIcon icon={faXmarkCircle} /></i></span>Free Subdomain</li>
                <li className='text-muted'><span className='fa-li'><i className='icon'><FontAwesomeIcon icon={faXmarkCircle} /></i></span>Monthly Status Reports</li>
              </ul>
              <div className='d-grid'>
                <a href='_blank' className='btn btn-primary text-uppercase'>Button</a>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className='card mb-5 mb-lg-0'>
            <div className='card-body'>
              <h5 className='card-title text-muted text-uppercase text-center'>Plus</h5>
              <h6 className='card-price text-center'>$9<span className='period'>/month</span></h6>
              <ul className='fa-ul'>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>5 Users</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>50GB Storage</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Unlimited Public Projects</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Community Access</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Dedicated Phone Support</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Unlimited Private Projects</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Free Subdomain</li>
                <li className='text-muted'><span className='fa-li'><i className='icon'><FontAwesomeIcon icon={faXmarkCircle} /></i></span>Monthly Status Reports</li>
              </ul>
              <div className='d-grid'>
                <a href='_blank' className='btn btn-primary text-uppercase'>Button</a>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className='card mb-5 mb-lg-0'>
            <div className='card-body'>
              <h5 className='card-title text-muted text-uppercase text-center'>Pro</h5>
              <h6 className='card-price text-center'>$49<span className='period'>/month</span></h6>
              <ul className='fa-ul'>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Unlimited User</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>150GB Storage</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Unlimited Public Projects</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Community Access</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Unlimited Private Projects</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Dedicated Phone Support</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Free Subdomain</li>
                <li><span className='fa-li'><i className='icon'><FontAwesomeIcon  icon={faCheck}/></i></span>Monthly Status Reports</li>
              </ul>
              <div className='d-grid'>
                <a href='_blank' className='btn btn-primary text-uppercase'>Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
