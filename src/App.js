import './App.css';

function App() {
  return (
    <div className="App pricing">
      <div className='row'>
        <div className='col-lg-4'>
          <div className='card mb-5 mb-lg-0'>
            <div className='card-body'>
              <h5 className='card-title'>Free</h5>
              <h6 className='card-price'>$0<span className='period'>/month</span></h6>
              <ul className='fa'>
                <li><span className='fa'><i className='fas'></i></span>Single User</li>
                <li><span className='fa'><i className='fas'></i></span>5GB Storage</li>
                <li><span className='fa'><i className='fas'></i></span>Unlimited Public Projects</li>
                <li><span className='fa'><i className='fas'></i></span>Community Access</li>
                <li><span className='text-muted'><i className='fas'></i></span>Unlimited Private Projects</li>
                <li><span className='text-muted'><i className='fas'></i></span>Dedicated Phone Support</li>
                <li><span className='text-muted'><i className='fas'></i></span>Free Subdomain</li>
                <li><span className='text-muted'><i className='fas'></i></span>Monthly Status Reports</li>
              </ul>
              <div className='d-grid'>
                <a href='_blank' className='btn'>Button</a>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className='card mb-5 mb-lg-0'>
            <div className='card-body'>
              <h5 className='card-title'>Plus</h5>
              <h6 className='card-price'>$9<span className='period'>/month</span></h6>
              <ul className='fa'>
                <li><span className='fa'><i className='fas'></i></span>5 Users</li>
                <li><span className='fa'><i className='fas'></i></span>50GB Storage</li>
                <li><span className='fa'><i className='fas'></i></span>Unlimited Public Projects</li>
                <li><span className='fa'><i className='fas'></i></span>Community Access</li>
                <li><span className='fa'><i className='fas'></i></span>Unlimited Private Projects</li>
                <li><span className='fa'><i className='fas'></i></span>Dedicated Phone Support</li>
                <li><span className='fa'><i className='fas'></i></span>Free Subdomain</li>
                <li><span className='fa'><i className='fas'></i></span>Monthly Status Reports</li>
              </ul>
              <div className='d-grid'>
                <a href='_blank' className='btn'>Button</a>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className='card mb-5 mb-lg-0'>
            <div className='card-body'>
              <h5 className='card-title'>Pro</h5>
              <h6 className='card-price'>$49<span className='period'>/month</span></h6>
              <ul className='fa'>
                <li><span className='fa'><i className='fas'></i></span>Unlimited User</li>
                <li><span className='fa'><i className='fas'></i></span>150GB Storage</li>
                <li><span className='fa'><i className='fas'></i></span>Unlimited Public Projects</li>
                <li><span className='fa'><i className='fas'></i></span>Community Access</li>
                <li><span className='fa'><i className='fas'></i></span>Unlimited Private Projects</li>
                <li><span className='fa'><i className='fas'></i></span>Dedicated Phone Support</li>
                <li><span className='fa'><i className='fas'></i></span>Free Subdomain</li>
                <li><span className='fa'><i className='fas'></i></span>Monthly Status Reports</li>
              </ul>
              <div className='d-grid'>
                <a href='_blank' className='btn'>Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
