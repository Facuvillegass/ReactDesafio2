import "./HomePage.css"
import bienes from "./AssetsHomePage/bienes.png"

function homePage ()
{
    return(
        <div className="homePageTitle">
            <h1>
                Welcome to BuyIt.com
            </h1>
            <img src={bienes} className="imgHomeStyle"/>
        </div>
    )
}

export default homePage()