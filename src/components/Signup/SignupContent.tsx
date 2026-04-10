import Image from "next/image";

const SignupContent = () => (
  <div className="modal-content">
    <div className="signup-img">
      <Image
        src="https://kitsu.io/images/register-head-b2efe1b5bc270b0166c83217a0aecf22.png"
        alt=""
        width={400}
        height={120}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
    <h4>Aviso</h4>
    <div className="signup-message append">
      Este é apenas um <span className="signup-standout project">projeto pessoal</span>. Ainda não
      está totalmente funcional — talvez no futuro, se sobrar tempo. Este modal foi inspirado em um
      app que curto. Para mais informações:{" "}
      <span className="signup-standout e-mail">mplechdev@gmail.com</span>
    </div>
  </div>
);

export default SignupContent;
