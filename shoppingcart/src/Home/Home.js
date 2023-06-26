import Benifit from "./Benifit/Benifit";
import Cardproduct from "./Cardproduct/Cardproduct";
import "./Home.css"

const Home = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="top-bar">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Store</a> </li>
                        <li><a href="#">Track Orders</a></li>
                    </ul>
                </div>
                <div className="main-bar">
                    <p>SHOP APP</p>
                    <div className="search">
                        <img src="./menu.png" className="img-menu" />
                        <h1>Categories</h1>
                        <img src="./Line 11.png" className="img-line" />
                        <input type="Search" placeholder="Search Items" className="search-item" ></input>
                        <img src="./SearchIcon (1).png" className="img-search" />
                    </div>
                    <img src="./Cart-vector.png" className="img-cart1" />
                    <img src="./UserItem.png" className="img-user" />
                </div>
            </div>
            <div className="selecter-1">
                <div className="nav">
                    <div className="categories" >
                        <img src="./menu (1).png" className="img-menu2" />
                        <h2>Categories</h2>
                    </div>
                    <ul>
                        <li>
                            <a href="#" >Computer</a>
                            <img src="./Vector (2).png" className="img-vetor2" />
                        </li>
                        <li>
                            <a href="#" >Hand Tools</a>
                            <img src="./Vector (2).png" className="img-vetor2" />
                        </li>
                        <li>
                            <a href="#" >Machine Tools</a>
                            <img src="./Vector (2).png" className="img-vetor2" />
                        </li>
                        <li>
                            <a href="#" >Power Tools</a>
                            <img src="./Vector (2).png" className="img-vetor2" />
                        </li>
                        <li>
                            <a href="#" >Storage Tools</a>
                            <img src="./Vector (2).png" className="img-vetor2" />
                        </li>
                        <li>
                            <a href="#" >Clothes & PPE</a>
                            <img src="./Vector (2).png" className="img-vetor2" />
                        </li>
                        <li>
                            <a href="#" >Electrical</a>
                            <img src="./Vector (2).png" className="img-vetor2" />
                        </li>
                        <li>
                            <a href="#" >Building Tools</a>
                            <img src="./Vector (2).png" className="img-vetor2" />
                        </li>
                        <li>
                            <a href="#" >Foods</a>
                            <img src="./Vector (2).png" className="img-vetor2" />
                        </li>
                        <li>
                            <a href="#">Drinks</a>
                            <img src="./Vector (2).png" className="img-vetor2" />
                        </li>
                    </ul>
                </div>
                <div className="img-product">
                    <img src="./Photos.png" className="img-item1" />
                    <div className="img-layout">
                        <img src="./Photos.png" className="img-item" />
                        <img src="./Photos.png" className="img-item" />
                        <img src="./Photos.png" className="img-item" />
                    </div>
                </div>
            </div>
            <div className="list-benifit">
                <Benifit />
                <Benifit />
                <Benifit />
                <Benifit />
            </div>
            <div className="profile-banner">
                <p><a href="#">Bestsellers</a></p>
                <h5><a href="#">Show more...</a></h5>
            </div>
            <div className="selecter-2">
                <div className="list-card">
                    <Cardproduct />
                    <Cardproduct />
                    <Cardproduct />
                    <Cardproduct />
                </div>
            </div>


        </div>
    );
}

export default Home;