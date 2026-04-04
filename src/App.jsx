import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function App() {

  const projects = [
    {
      title: "CampusKart 🛒",
      desc: "AI-powered student marketplace with cart, wishlist & group deals.",
      image: "/project1.png",
      live: "https://campuskart-liart.vercel.app",
    },
    {
      title: "Scam Detection 🔍",
      desc: "ML-based fraud detection system for real-time scam messages.",
      image: "/project4.png",
      live: "https://scam-shield-ai.vercel.app",
    },
    {
      title: "Gov Scheme Finder 🏛️",
      desc: "Find government schemes based on eligibility filters.",
      image: "/project3.png",
      live: "https://govscheme-ai.vercel.app",
    },
    {
      title: "Lexplain AI 🤖",
      desc: "AI-based legal document understanding platform.",
      image: "/project2.png",
      live: "https://lexplain-ai.vercel.app",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0f0f1a] via-[#111827] to-[#0a0a0f] text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-gray-800 px-6 py-3 flex justify-between">
        <h1 className="text-purple-400 font-bold text-xl">Kuldeep 🚀</h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#hire" className="hover:text-purple-400">Hire</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center pt-36 pb-24 px-4">

        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          src="/kuldeep.png"
          className="w-36 h-36 rounded-full mx-auto border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
        />

        <h1 className="text-5xl font-bold mt-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Kuldeep Pratap
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer 💻",
            1500,
            "React Developer ⚛️",
            1500,
            "AI Builder 🤖",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
          className="block text-gray-400 mt-3"
        />

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          B.Tech (CSE - IT) @ Dronacharya Group of Institutions, Greater Noida  
        </p>

        <p className="text-purple-400 mt-2">
          📍 Noida, NCR (India)
        </p>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a href="/resume.pdf" target="_blank" className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700">
            View Resume 📄
          </a>

          <a href="/resume.pdf" download className="bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700">
            Download ⬇️
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8">👨‍💻 About Me</h2>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-gray-300 leading-relaxed">
            I'm a <span className="text-purple-400 font-semibold">Full Stack Developer</span> 
            with strong expertise in React, Node.js, and AI/ML. I build scalable applications 
            that solve real-world problems.
          </p>

          <p className="text-gray-400 mt-4">
            Developed AI tools, e-commerce platforms, and government-based systems with focus on performance & UI/UX.
          </p>

          <p className="text-purple-400 mt-4 font-semibold">
            🚀 Ready to contribute & grow fast.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">🚀 My Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:shadow-purple-500/20 transition"
            >
              <img src={p.image} className="h-48 w-full object-cover" />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>

                <a
                  href={p.live}
                  target="_blank"
                  className="inline-block mt-4 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                  Live 🔗
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="text-center py-20">
        <h2 className="text-3xl font-bold mb-8">💻 Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["React", "Node.js", "MongoDB", "Express", "Tailwind", "JavaScript", "AI/ML"].map((s, i) => (
            <motion.span key={i} whileHover={{ scale: 1.1 }} className="bg-purple-600/80 px-5 py-2 rounded-full">
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* WHY HIRE */}
      <section id="hire" className="py-20 text-center px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10">💼 Why Hire Me?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Fast Learner", "Real Projects", "Problem Solver"].map((t, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl text-purple-400">{t}</h3>
              <p className="text-gray-400 mt-3">Delivering real value through code.</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">📊 My Stats</h2>

        <div className="flex justify-center gap-12">
          <div><h3 className="text-4xl text-purple-400">4+</h3><p>Projects</p></div>
          <div><h3 className="text-4xl text-purple-400">7+</h3><p>Tech</p></div>
          <div><h3 className="text-4xl text-purple-400">100%</h3><p>Dedication</p></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🤝 Let’s Work Together</h2>

        <a
          href="mailto:pratapkuldeep307@gmail.com"
          className="bg-purple-600 px-8 py-3 rounded-xl hover:bg-purple-700"
        >
          Hire Me 🚀
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">📬 Contact Me</h2>

        <p className="text-gray-400">📧 pratapkuldeep307@gmail.com</p>
        <p className="text-gray-400 mt-2">📱 8112521793</p>

        <div className="flex justify-center gap-8 mt-6">
          <a href="https://github.com/kuldeepgupta81" target="_blank">GitHub 🔗</a>
          <a href="https://www.linkedin.com/in/kuldeeppratap/" target="_blank">LinkedIn 🔗</a>
        </div>
      </section>

    </div>
  );
}