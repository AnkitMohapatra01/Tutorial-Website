import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection=()=>{
    return(
        <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1>Explore the World, One Country at a Time</h1>
          <p className="paragraph">
            Discover the history, culture and beauty of every nation. sort,
            search and filter through countries to find the details you want.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            start Exploring <FaLongArrowAltRight/>

          </button>
        </div>
        <div className="hero-image">
          <img src="/Images/world.png" alt="world-beauty" className="banner-image"/>
        </div>
      </div>
    </main>
    )
}