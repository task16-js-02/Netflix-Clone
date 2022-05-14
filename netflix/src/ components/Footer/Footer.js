import '../Footer/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <>

<h2>&copy;The copyright for Murad and Ahmad &copy;</h2>
<a href="https://ar-ar.facebook.com/" className="facebook social"> Facebook <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
<a href="https://twitter.com/"className="twitter social"> Twitter<FontAwesomeIcon icon={faTwitter} size="2x" /></a>
<a href="https://www.youtube.com"className="youtube social"> youtube  <FontAwesomeIcon icon={faYoutube} size="2x" /></a>
<a href="https://www.Instegram.com"className="instagram social"> Linkedin<FontAwesomeIcon icon={faInstagram} size="2x" /></a>
</>
    )
}
export default Footer;