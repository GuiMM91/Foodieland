import { Container, LinksContent, SocialContent } from "./styles"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

export function Header(){ 
    return(
        <Container>
            <div>
              <img src="../../../public/assets/logo.png"/>
            </div>
            <LinksContent>
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
                <a href="">About us</a>
            </LinksContent>
            <SocialContent>
                <a href=""><FaFacebookF size={22} /></a>
                <a href=""><FaInstagram size={22} /></a>
                <a href=""><FaTwitter size={22} /></a>
            </SocialContent>
        </Container>
    )
}