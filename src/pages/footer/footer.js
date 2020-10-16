import React, {Component} from "react";
import "./footer.css"
import facebook from "../../Images/facebook.png"
import instagram from "../../Images/instagram.png"
import whatsapp from "../../Images/whatsapp.png"
import telegram from "../../Images/telegram.png"

class Footer extends Component{
    render(){
        return (
            
            <footer>
               
                <div className= "container">
                    <div className="row">

                        <div className="col ">
                            <p>Redes Sociais</p>
                            <div className="row img">
                                <a href="https://www.facebook.com/bandahugs"><img src={facebook}></img></a>
                                <a href="https://www.instagram.com"><img src={instagram}></img></a>
                                <a href="https://www.whatsapp.com"><img src={whatsapp}></img></a>
                                <img src={telegram}></img>
                            </div>
                        </div>

                        <div className="col contato">
                            <p>Contato: <a href="tel:51985638588">(51) 98563-8588</a></p>
                            <p>E-mail: <a href="mailto:antoniocarlosnieto@gmail">antoniocarlosnieto@gmail.com</a></p>
                            
                        </div>
                        
                        <div className="col">
                            <p>
                                Endereço: <br/>
                                Rua Dom Joao Backer, 1852 <br/>
                                Bloco P Apto 464 <br/>
                                Bairro Fátima <br/>
                                Canoas - BR <br/>
                                Brasil
                            </p>
                        </div>

                    </div>
                </div>
                <p className="copyright pb-2">Copyright@2020 - Antonio Nieto</p>

            </footer>
        );
    }
}

export default Footer;