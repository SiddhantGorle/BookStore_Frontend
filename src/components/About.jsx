import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-gradient-to-r from-neutral to-transparent dark:text-white">
        <div className="min-h-screen pt-20 justify-center">
          <div className="py-10">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full p-4 md:p-10 md:px-20">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <img
                  src="//noraure-5.myshopify.com/cdn/shop/files/slider_top_3.png?v=1646633795"
                  alt="Team"
                  className="rounded-lg w-full md:w-[550px] md:h-[630px]"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-lg mb-6 leading-relaxed">
                  Welcome to our website! We are a passionate team dedicated to
                  providing the best service and products to our customers.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Our mission is to [insert mission statement here]. We believe
                  in [insert belief or values here], and strive to [insert goal
                  or objective here].
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vehicula libero velit, quis vehicula ipsum ultrices nec. Proin
                  mattis vel odio sed sagittis. Integer vitae nisi nulla. Fusce
                  nec lacinia mi. Sed consequat enim in risus tincidunt, at
                  tempor sapien varius.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Nullam dictum consequat justo vel faucibus. Aliquam nec
                  interdum velit. Nulla facilisi. Curabitur in est luctus,
                  mollis ex ut, eleifend magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
