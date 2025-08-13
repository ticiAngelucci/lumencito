import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-lumen-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-lumen-orange to-lumen-red rounded-lg flex items-center justify-center">
                <i className="fas fa-heart text-white"></i>
              </div>
              <h4 className="text-xl font-bold">Lumencito</h4>
            </div>
            <p className="text-gray-300">Transformando ideas en realidad, una colaboración a la vez.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Enlaces</h5>
            <ul className="space-y-2 text-gray-300">
              {["Inicio", "Proyectos", "Sobre Nosotros", "Contacto"].map((link,i)=>(
                <li key={i}><a href="#" className="hover:text-lumen-orange transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Soporte</h5>
            <ul className="space-y-2 text-gray-300">
              {["Centro de Ayuda", "Términos de Uso", "Privacidad", "FAQ"].map((link,i)=>(
                <li key={i}><a href="#" className="hover:text-lumen-orange transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Síguenos</h5>
            <div className="flex space-x-4">
              {["twitter","instagram","linkedin"].map((icon,i)=>(
                <a key={i} href="#" className="w-10 h-10 bg-gradient-to-br from-lumen-orange to-lumen-red rounded-lg flex items-center justify-center hover:shadow-lg transition-all">
                  <i className={`fab fa-${icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Lumencito. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
