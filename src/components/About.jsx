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
                  src="https://cdn.prod.website-files.com/6267f35934aa8b1795cf1a9f/62f5394f512f1534599827db_vend.png"
                  alt="Team"
                  className="rounded-lg w-full md:w-[550px] md:h-[630px]"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-4xl mb-6 leading-relaxed antialiased font-extrabold text-red-500">
                  We are a bookstore in the heart of Pune
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  We are a community of readers, and we like diverse stories. We
                  have experienced the world differently thanks to the stories
                  we've read and shared—they enrich us like nothing else, and we
                  would like to share that with you.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  We choose the books we shelve with care. We believe that a
                  good bookshelf should hold a world of voices and stories, from
                  across time, place and experience. We love nature writing,
                  science, reflections across genre on gender and caste and
                  history. We feature fiction, non-fiction, the social sciences,
                  and history, and we love translations, science fiction, and
                  graphic novels.
                </p>
                <p className="text-2xl font-black mb-6 leading-relaxed">
                  We believe that the relatively unheard needs more place on
                  shelves and that no single voice should dominate.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  We enjoy the whimsy of a bookshelf, and hope that you discover
                  something fresh and interesting each time you visit—a new way
                  of looking at the world. If you’d like, we would be delighted
                  to spend time with you, and help you foray in directions you
                  may not even know you were looking for.
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
