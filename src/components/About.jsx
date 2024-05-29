import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className=" min-h-screen pt-20">
          <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
            <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-2xl">
              <p className="text-lg mb-4">
                Welcome to our website! We are a passionate team dedicated to
                providing the best service and products to our customers.
              </p>
              <p className="text-lg mb-4">
                Our mission is to [insert mission statement here]. We believe in
                [insert belief or values here], and strive to [insert goal or
                objective here].
              </p>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vehicula libero velit, quis vehicula ipsum ultrices nec. Proin
                mattis vel odio sed sagittis. Integer vitae nisi nulla. Fusce
                nec lacinia mi. Sed consequat enim in risus tincidunt, at tempor
                sapien varius.
              </p>
              <p className="text-lg mb-4">
                Nullam dictum consequat justo vel faucibus. Aliquam nec interdum
                velit. Nulla facilisi. Curabitur in est luctus, mollis ex ut,
                eleifend magna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
