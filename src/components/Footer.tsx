const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg"></div>
              <h3 className="text-xl font-bold">NGO Connect</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Connecting verified NGOs with generous donors to create meaningful impact in communities worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For NGOs</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent-glow transition-colors">Register Your NGO</a></li>
              <li><a href="#" className="hover:text-accent-glow transition-colors">Verification Process</a></li>
              <li><a href="#" className="hover:text-accent-glow transition-colors">Post Requests</a></li>
              <li><a href="#" className="hover:text-accent-glow transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Donors</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent-glow transition-colors">Start Donating</a></li>
              <li><a href="#" className="hover:text-accent-glow transition-colors">Browse Causes</a></li>
              <li><a href="#" className="hover:text-accent-glow transition-colors">Track Impact</a></li>
              <li><a href="#" className="hover:text-accent-glow transition-colors">Donor Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent-glow transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent-glow transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent-glow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent-glow transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 NGO Connect. All rights reserved. Built with ❤️ for positive impact.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;