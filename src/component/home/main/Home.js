import "./home.css";
import Slide from "../slide/Slide";
import Product from "../products/Product";

export default function Home() {
 const slideImage = [
  "/Images/Carasoule image/1st.jpg",
  "/Images/Carasoule image/2nd.jpg",
  "/Images/Carasoule image/3rd.jpg",
  "/Images/Carasoule image/4th.jpg",
  "/Images/Carasoule image/5th.jpg",
 ]


  return (
    <>
    <div>
    {slideImage.map((slide)=>{ 
      return(
        <Slide key={slide} image ={slide}/> )
      })}
    </div>
    <Product/>
      </>
  );
}
