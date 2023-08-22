const Footer = () => {
    return(
      <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/menu" className="hover:text-gray-300">Menu</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <p className="mb-2">1234 Street Name, City</p>
            <p className="mb-2">Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Food Delivery App. All rights reserved.</p>
      </div>
    </footer>
    )
  };
  
  export default Footer;