const FierceWoolArt = () => {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  // Commission types data
  const commissionTypes = [
    {
      title: "Headshot",
      price: "$30",
      image: "https://via.placeholder.com/400x400",
    },
    {
      title: "Half Body",
      price: "$50",
      image: "https://via.placeholder.com/400x400",
      popular: true,
    },
    {
      title: "Full Body",
      price: "$80",
      image: "images/fb.jpg",
    },
    {
      title: "Additional Characters",
      price: "+$20",
      image: "https://via.placeholder.com/400x400",
    },
    {
      title: "Pixel Art Icon",
      price: "$25",
      image: "https://via.placeholder.com/400x400",
    },
    {
      title: "Reference Sheet",
      price: "$100",
      image: "https://via.placeholder.com/400x400",
    },
    {
      title: "Traditional Package",
      price: "$150",
      image: "https://via.placeholder.com/400x400",
    }
  ];
  
  // FAQ data
  const faqItems = [
    {
      question: "What is the turnaround time for commissions?",
      answer: "Typically 1-2 weeks depending on complexity and my current queue."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes! Each commission includes up to 2 rounds of revisions."
    },
    {
      question: "What kind of characters do you specialize in?",
      answer: "I specialize in creating alternate versions of existing characters."
    }
  ];
  
  // State for FAQs
  const [openFAQ, setOpenFAQ] = React.useState(null);
  
  // Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 border-b border-blue-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                FierceWool's Art
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition">About</a>
              <a href="#commissions" className="text-gray-300 hover:text-blue-400 transition">Commissions</a>
              <a href="#faq" className="text-gray-300 hover:text-blue-400 transition">FAQ</a>
            </nav>
            
            {/* CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                Request a Commission
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-blue-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-blue-900">
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition">About</a>
                <a href="#commissions" className="text-gray-300 hover:text-blue-400 transition">Commissions</a>
                <a href="#faq" className="text-gray-300 hover:text-blue-400 transition">FAQ</a>
                <div className="pt-4">
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                    Request a Commission
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900 opacity-20 rounded-l-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-purple-900 opacity-20 rounded-tr-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Transform Your Characters With New Versions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Give your existing characters fresh looks and new life. I specialize in creating alternate versions of your beloved OCs with different styles, outfits, and expressions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-lg">
                  Order Commission
                </button>
                <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-blue-400 font-medium rounded-lg transition">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="images/Destinyproject.png" 
                alt="FierceWool Character" 
                className="rounded-xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose FierceWool's Art?</h2>
            <p className="text-gray-300">
              I specialize in transforming your existing characters into new versions while maintaining their core identity and personality. Get a fresh perspective on characters you already love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-blue-900 hover:border-blue-700 transition shadow-lg">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Character Reimagining</h3>
              <p className="text-gray-300">I'll create fresh takes on your existing characters while maintaining their essence and personality.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-blue-900 hover:border-blue-700 transition shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Multiple Variations</h3>
              <p className="text-gray-300">Get different styles, outfits, poses, and expressions for the same character - perfect for refreshing your favorites.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-blue-900 hover:border-blue-700 transition shadow-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Clear Communication</h3>
              <p className="text-gray-300">Regular updates and open communication to ensure your art meets your expectations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Commissions Section */}
      <section id="commissions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Commission Options</h2>
            <p className="text-gray-300">
              Choose the commission type that best suits your goals and needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {commissionTypes.map((commission, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg relative group cursor-pointer bg-gray-800">
                <img 
                  src={commission.image} 
                  alt={commission.title}
                  className="w-full h-auto object-contain transition duration-500 group-hover:scale-105"

                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-white font-semibold text-lg">{commission.title}</h4>
                  <p className="text-blue-300 text-sm mb-2">{commission.price}</p>
                  <button className="mt-2 text-blue-400 hover:text-blue-300 transition text-sm flex items-center">
                    Order Now <span className="ml-1">→</span>
                  </button>
                </div>
                {commission.popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full z-10">
                    Popular
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">
              Got questions about commissioning art? Find answers to common queries below.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="mb-4 border-b border-blue-900 pb-4 last:border-b-0"
              >
                <button 
                  className="flex justify-between items-center w-full text-left py-4"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-blue-400">{item.question}</h3>
                  <span className="ml-4 flex-shrink-0 text-blue-400 text-xl">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="pb-4 text-gray-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready For A Fresh Take On Your Character?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact me today to discuss how we can give your existing character an exciting new version while maintaining what makes them special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-900 hover:bg-gray-100 font-semibold rounded-lg transition shadow-lg">
                Request a Quote
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition">
                Contact via Email
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 pt-16 pb-8 border-t border-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              FierceWool's Art
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Specializing in creating fresh, alternate versions of your beloved original characters.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <span className="sr-only">DeviantArt</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0l-5.5 5.5 1 2.5-4.5 5 3 1 0.5 4.5 5.5-5.5-1-2.5 4.5-5-3-1L19 0zM6.5 4L0 10.5l5.5 9L12 24l6.5-6.5L13 8.5 6.5 4z" />
                </svg>
              </a>
            </div>
            <div className="text-center text-gray-500 text-sm">
              © 2025 FierceWool's Art. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Render the app
ReactDOM.render(<FierceWoolArt />, document.getElementById('root'));
