import {Col} from "react-bootstrap";
import TypeWriter from "../UI/TypeWriter.js";
import img1 from "../../assests/images/pr.svg";


const Home = () => {
    const data = [
        "<span class='text-info fs-1'>Hello!!!</span>",
        "<span style='color: #27ae60;' class='fs-2'>I'm Satyam Singh</span>",
        "<span class='text-warning'>Fullstack Developer</span>",
    ]
    return(
        <section id="home" className="row mb-5">
            <Col  md={{order:'first',span:6}} xs={{order:'last',span:12}}>
                <img className="img-fluid" src={img1} />
            </Col>
            <Col md={6} sm={12}>
                <TypeWriter string={data}/>
            </Col>
        </section>
    )
}

export default Home;