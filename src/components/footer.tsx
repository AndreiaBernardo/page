
const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white text-center p-4 mt-5">
      <div className="container">
        <p className="mb-0 ">Redes Sociais</p>
        
        <div className="text-white mt-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" me-3">
            <i className="bi bi-github"></i>
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <div className="mt-4 ">
          <p>Endereço</p>
          <p>Rua das Flores, 123 - Jardim Botânico, Cidade Verde</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: contato@floresdobosque.com.br</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
