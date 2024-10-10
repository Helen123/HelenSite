import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center  gap-16   font-[family-name:var(--font-geist-sans)]"style={{ backgroundColor: '#F4F3E8' }}>
      
      {/* Section 1: Greeting */}
      <section className="flex flex-row items-center justify-center   h-screen  w-full stext-center"style={{ backgroundColor: '#F5F374' }}
      >
        {/* Subsection 1 */}
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="text-4xl sm:text-6xl font-bold">Hi, I'm Qi Wu!</h1>
          <p className="text-xl sm:text-2xl mt-4">Welcome to my personal website.</p>
        </div>
        
        {/* Subsection 2 */}
        <div className="flex flex-col items-center justify-center w-1/2">
        <Image 
            src="/assets/background1.jpg" // Replace with your image path
            alt="Profile Picture"
            width={300} // Default width
            height={300} // Default height
            className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 object-cover rounded-full"
          />
        </div>
      </section>

      {/* Section 2: Photo and About Me */}
      <section className="flex flex-col sm:flex-row items-center justify-center h-screen gap-52 m-16">
        
        {/* Section 2.1: Photo and Tags */}
        <section className="flex flex-col items-center justify-center gap-6">
          <div className="flex justify-center">
            <Image
              src="/favicon.ico" // Replace with your actual photo path
              alt="Qi Wu"
              width={450}
              height={450}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="mt-4 text-lg sm:text-xl">
              UCSB 2025 | B.S. in Computer Science <br />
              Web Development Enthusiast | Love Cats & Cooking
            </p>
          </div>
        </section>

        {/* About Me Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-md">
          <h2 className="text-3xl sm:text-4xl font-semibold">About Me</h2>
          <p className="mt-4 text-lg sm:text-xl">
            I'm a third-year Computer Science student at UCSB, part of the Engineering Honor Program. I’m passionate about software development, AI technologies, and building tools that make a difference.
          </p>
          <ul className="mt-4 space-y-2 text-lg sm:text-xl">
            <li className="underline">Engineering Honor Program Student</li>
            <li className="underline">GPA: 3.9</li>
            <li className="underline">
              <a 
                href="#experience"
                className="text-blue-500 hover:underline"
              >
                Early Research Scholars Program at UCSB
              </a>
            </li>
            <li className="underline">
              <a 
                href="#cooking-cat"
                className="text-blue-500 hover:underline"
              >
                My cooking and my cat adventures
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3: Projects */}
      <section className="flex flex-col items-left justify-center gap-16 max-w-screen-md mx-auto">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-left">Projects</h2>
          <ul className="mt-8 text-lg sm:text-xl">

            {/* Project 1: Traditional Chinese Orchestra Sharing Platform */}
            <li className="mb-8 p-6 border rounded-lg shadow-lg bg-white max-w-screen-sm mx-auto">
              <h3 className="text-2xl font-bold text-left">Orchestra Sharing Platform</h3>
              <div className="flex flex-col sm:flex-row items-center gap-8 mt-6">
                <div className="w-auto flex-shrink-0">
                  <Image
                    src="/favicon.ico" // Replace with actual photo path
                    alt="Orchestra Project"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-lg">
                    Developed a React Native mobile app for the traditional Chinese orchestra community to exchange music sheets, view performance videos, and connect with each other.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex gap-8 justify-center">
                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {/* GitHub Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    {/* SVG Path */}
                  </svg>
                </a>
                <a href="https://your-live-demo.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {/* Live Demo Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    {/* SVG Path */}
                  </svg>
                </a>
              </div>
            </li>

            {/* Project 2: Travel Planning App */}
            <li className="mb-8 p-6 border rounded-lg shadow-lg bg-white max-w-screen-sm mx-auto">
              <h3 className="text-2xl font-bold text-left">Travel Planning App</h3>
              <div className="flex flex-col sm:flex-row items-center gap-8 mt-6">
                <div className="w-auto flex-shrink-0">
                  <Image
                    src="/favicon.ico" // Replace with actual photo path
                    alt="Travel Planning Project"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-lg">
                    Created a React Native app allowing users to share travel experiences and plan trips based on others' posts. Used Firebase for backend services and Redux for state management.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex gap-8 justify-center">
                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {/* GitHub Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    {/* SVG Path */}
                  </svg>
                </a>
                <a href="https://your-live-demo.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {/* Live Demo Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    {/* SVG Path */}
                  </svg>
                </a>
              </div>
            </li>

            {/* Add more projects here */}
          </ul>
        </div>
      </section>

      {/* Section 4: Experience */}
      <section className="flex flex-col items-left justify-center gap-16 max-w-screen-md mx-auto">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-left">Experience</h2>
          <ul className="mt-8 text-lg sm:text-xl">

            {/* Experience 1: Tax Technology Intern */}
            <li className="mb-8 p-6 border rounded-lg shadow-lg bg-white max-w-screen-sm mx-auto">
              <h3 className="text-2xl font-bold text-left">Tax Technology Intern - EY Shanghai</h3>
              <p className="text-lg mt-4">
                Developed and optimized automated policy analysis tools using Python and scikit-learn, reducing analysis time significantly and enhancing system stability.
              </p>
            </li>

            {/* Experience 2: Researcher at UCSB */}
            <li className="mb-8 p-6 border rounded-lg shadow-lg bg-white max-w-screen-sm mx-auto">
              <h3 className="text-2xl font-bold text-left">Researcher - Early Research Scholars Program</h3>
              <p className="text-lg mt-4">
                Engaged in a study to evaluate Vision-language Models, developed a React-based web platform for experimental data collection, and integrated AI technology to support cognitive research.
              </p>
            </li>

            {/* Add more experiences here */}
          </ul>
        </div>
      </section>
    </div>
  );
}



