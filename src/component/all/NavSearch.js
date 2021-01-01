import '../../assets/css/css-reset.css';
import '../../assets/scss/style.css';
import '../../assets/scss/style-mobile.css';
import '../../assets/scss/style-landscape.css';
import '../../assets/scss/style-tab.css';
import '../../assets/css/fonts.css';
import '../../assets/js/aos/aos.css';
import '../../assets/css/animate.min.css';


function NavSearch() {
  return (
    <div className="nav-search">
        <form>
            <input type="text" placeholder="Search"></input>
        </form>
    </div>
    
  );
}

export default NavSearch;
