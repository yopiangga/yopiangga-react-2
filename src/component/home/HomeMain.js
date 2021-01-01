import '../../assets/css/css-reset.css';
import '../../assets/scss/style.css';
import '../../assets/scss/style-mobile.css';
import '../../assets/scss/style-landscape.css';
import '../../assets/scss/style-tab.css';
import '../../assets/css/fonts.css';
import '../../assets/js/aos/aos.css';
import '../../assets/css/animate.min.css';


function HomeMain() {
  return (
    <section className="home-intro">
        <div className="btn-left">
            <div className="icon-box">
                <i data-feather="chevron-left"></i>
            </div>
        </div>
        <div className="slide slide-1 active">
            <div className="content">
                <h6>PETIKDUA - 2020</h6>
                <h2>FOOD STORE</h2>
                <p>1 Organie product grown with love</p>
                <button className="btn-shop">SHOP NOW</button>
            </div>
            <div className="icon-down">
                <div className="circle animate__animated animate__bounce"></div>
            </div>
        </div>
        <div className="slide slide-2">
            <div className="content">
                <h6>PETIKDUA - 2020</h6>
                <h2>FOOD STORE</h2>
                <p>2 Organie product grown with love</p>
                <button className="btn-shop">SHOP NOW</button>
            </div>
            <div className="icon-down">
                <div className="circle"></div>
            </div>
        </div>
        <div className="btn-right">
            <div className="icon-box">
                <i data-feather="chevron-right"></i>
            </div>
        </div>
    </section>
  );
}

export default HomeMain;
