import React, {Component} from "react";
import "./home.css";
import titulo1 from "../../Images/titulo1.jpg";
import titulo2 from "../../Images/titulo2.jpg";
import titulo3 from "../../Images/titulo3.jpg";
import titulo4 from "../../Images/titulo4.jpg";


class Home extends Component{
    render(){
        return (
            <div className="home">
                <p className="titulo">Home</p>
                <div className="conteiner px-5">
                <div className="row ">
                    <div className="col-3 px-3">
                        <img className="foto " src={titulo1}></img>
                    </div>
                    <div className="col-3">
                        <img className="foto" src={titulo2}></img>
                    </div>
                    <div className="col-3">
                        <img className="foto" src={titulo3}></img>
                    </div>
                    <div className="col-3">
                        <img className="foto" src={titulo4}></img>
                    </div>
                </div>

                

                <div>
                <p><h3>Integrantes</h3></p>
                </div>
                

                <div className="row pt-5">
                    <div className="col-4 px-3 text-center">
                        <img className="foto " src={titulo1}></img>
                    </div>
                    <div className="col-8 borda">
                        <p><h3>Apresentação</h3></p>
                    </div>
                </div>



                </div>
                


            </div>
            
        );
    }
}

export default Home;
