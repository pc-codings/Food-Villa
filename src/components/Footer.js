
const Footer = ()=>{

    return(
<>
  
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  {/*GOOGLE FONTS*/}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap"
    rel="stylesheet"
  />
  <footer>
    <div className="footer">
      <div className="row">
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-instagram" />
        </a>
        <a href="https://www.linkedin.com/in/paritosh-chowdhury-414b891b9/">
          <i className="fa fa-linkedin" />
        </a>
        <a href="https://github.com/pc-codings">
          <i className="fa fa-github" />
        </a>
      </div>
      <div className="row">
        <ul>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>
      </div>
      <div className="row">
        Copyright © 2023 Paritosh - All rights reserved || Designed By:
        Paritosh
      </div>
    </div>
  </footer>
</>

    )
}

export default Footer;
