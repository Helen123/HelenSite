import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-16 font-capriola-regular" style={{ backgroundColor: '#F4F3E8' }}>
      
      {/* Section 1: Greeting */}
      <section className="flex flex-row items-center justify-center h-screen w-full text-center" style={{ backgroundColor: '#F5F374' }}>
        
        {/* Subsection 1 */}
        <div className="flex flex-col w-1/2 p-20">
          <h1 className="text-4xl sm:text-6xl font-bold text-left text-[#3A4750] capriola-regular">Hi, I'm Qi Wu!</h1>
          <p className="text-xl sm:text-2xl mt-4  text-left  text-[#3A4750] capriola-regular">
            Welcome to my site! I’m Qi Wu, a UCSB Computer Science student passionate about building tech solutions. Check out my projects and feel free to connect!
          </p>
           {/* Button */}
           <button className="mt-6 px-8 py-4 text-lg font-medium text-[#F5F374] bg-[#3A4750] rounded-tl-full rounded-br-full hover:bg-[#2E3B42] transition duration-300 ease-in-out">
About Me
</button>


        </div>
        
        {/* Subsection 2 */}
        <div className="flex flex-col items-center justify-center w-1/2 p-4 h-auto min-h-[600px]">
          <Image 
            src="/p1.jpg" // Ensure the image is located in your public directory
            alt="Profile Picture"
            width={430} 
            height={700}
            className="object-cover"
          />
        </div>
      </section>
 {/*
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
      */}

      {/* Section 2: About and Picture */}
<section className="flex flex-row items-center justify-center h-screen w-full gap-10 p-16">
  
  {/* Subsection 1 (3/5 Width) */}
  <div className="flex flex-col w-3/5 gap-8 p-8">
    <h2 className="text-3xl sm:text-5xl font-bold text-left text-[#3A4750] capriola-regular">
      About Me
    </h2>
    <p className="text-lg sm:text-2xl text-left text-[#3A4750] capriola-regular">
    I'm a third-year Computer Science student at UCSB, part of the Engineering Honor Program. I’m passionate about software development, AI technologies, and building tools that make a difference.
    </p>
    <ul className="mt-4 space-y-2 text-lg sm:text-xl">
            <li className="underline text-[#3A4750] capriola-regular">Engineering Honor Program Student</li>
            <li className="underline text-[#3A4750] capriola-regular">GPA: 3.9</li>
          </ul>
    
    {/* Button */}
    <button className="mt-6 px-8 py-4 text-lg font-medium text-[#F5F374] bg-[#3A4750] rounded-tl-full rounded-br-full hover:bg-[#2E3B42] transition duration-300 ease-in-out">
      Learn More
    </button>

    {/* Image */}
    <div className="mt-6">
      <Image 
        src="/114.jpg" // Replace with the actual image path
        alt="Project Preview"
        width={600}
        height={200}
        className="object-cover"
      />
    </div>
  </div>

  {/* Subsection 2 (2/5 Width) */}
  <div className="flex flex-col w-2/5 items-center justify-center p-4">
    <Image 
      src="/110.jpg" // Replace with the actual image path
      alt="Profile Picture"
      width={400}
      height={400}
      className="object-cover"
    />
  </div>
</section>

<section className="bg-[#F4F3E8] py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#3A4750] mb-10">
      My Experience
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Service 1: Basic */}
      <div className="flex flex-col items-center rounded-lg shadow-lg p-6">
        <Image
          src="/s2.png" // Replace with actual image path
          alt="Basic Service"
          width={244}
          height={244}
          className="rounded-lg object-cover"
        />
        <h3 className="mt-6 text-2xl font-semibold text-[#3A4750]">Tax Technology Intern</h3>
        <p className="mt-2 text-lg text-[#3A4750]">EY Shanghai TAX | Shanghai</p>
        <p className="mt-2 text-lg text-[#3A4750]">June 2024-August 2024</p>
        <p className="mt-4 text-left text-gray-600">
        🚀 Improved labeling with Logistic Regression. <br/>
📈 Achieved 70% accuracy using TFIDF. <br/>
💡 Integrated AI writing via OpenAI API and LangChain.

</p>
      </div>

      {/* Service 2: Intermediate */}
      <div className="flex flex-col items-center rounded-lg shadow-lg p-6">
        <Image
          src="/ey1.png" // Replace with actual image path
          alt="Intermediate Service"
          width={244}
          height={244}
          className="rounded-lg object-cover"
        />
        <h3 className="mt-6 text-2xl font-semibold text-[#3A4750]">Tax Technology Intern</h3>
        <p className="mt-2 text-lg text-[#3A4750]">EY Shanghai TAX | Shanghai</p>
        <p className="mt-2 text-lg text-[#3A4750]">June 2023-September 2023</p>
        <p className="mt-4 text-left text-gray-600">
        🤖 Automated policy retrieval in 1 min using Python. <br/>
📊 Analyzed texts with Claude/OpenAI APIs. <br/>
🔍 Reduced manual work 50% using Elasticsearch. <br/>
🗂️ Refined data for 1500 firms by 95%.

</p>
      </div>

      {/* Service 3: Advanced */}
      <div className="flex flex-col items-center rounded-lg shadow-lg p-6">
        <Image
          src="/ersp1.png" // Replace with actual image path
          alt="Advanced Service"
          width={244}
          height={244}
          className="rounded-lg object-cover"
        />
        <h3 className="mt-6 text-2xl font-semibold text-[#3A4750]">Advanced Service</h3>
        <p className="mt-2 text-lg text-[#3A4750]">$199</p>
        <p className="mt-4 text-center text-gray-600">
          Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-[#F4F3E8] py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#3A4750] mb-10">
      My Experience
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Service 1: Basic */}
      <div className="flex flex-col items-center rounded-lg shadow-lg p-6">
        <Image
          src="/s2.png" // Replace with actual image path
          alt="Basic Service"
          width={244}
          height={244}
          className="rounded-lg object-cover"
        />
        <h3 className="mt-6 text-2xl font-semibold text-[#3A4750]">Tax Technology Intern</h3>
        <p className="mt-2 text-lg text-[#3A4750]">EY Shanghai TAX | Shanghai</p>
        <p className="mt-2 text-lg text-[#3A4750]">June 2024-August 2024</p>
        <p className="mt-4 text-left text-gray-600">
        🚀 Improved labeling with Logistic Regression. <br/>
📈 Achieved 70% accuracy using TFIDF. <br/>
💡 Integrated AI writing via OpenAI API and LangChain.

</p>
      </div>

      {/* Service 2: Intermediate */}
      <div className="flex flex-col items-center rounded-lg shadow-lg p-6">
        <Image
          src="/ey1.png" // Replace with actual image path
          alt="Intermediate Service"
          width={244}
          height={244}
          className="rounded-lg object-cover"
        />
        <h3 className="mt-6 text-2xl font-semibold text-[#3A4750]">Tax Technology Intern</h3>
        <p className="mt-2 text-lg text-[#3A4750]">EY Shanghai TAX | Shanghai</p>
        <p className="mt-2 text-lg text-[#3A4750]">June 2023-September 2023</p>
        <p className="mt-4 text-left text-gray-600">
        🤖 Automated policy retrieval in 1 min using Python. <br/>
📊 Analyzed texts with Claude/OpenAI APIs. <br/>
🔍 Reduced manual work 50% using Elasticsearch. <br/>
🗂️ Refined data for 1500 firms by 95%.

</p>
      </div>

      {/* Service 3: Advanced */}
      <div className="flex flex-col items-center rounded-lg shadow-lg p-6">
        <Image
          src="/ersp1.png" // Replace with actual image path
          alt="Advanced Service"
          width={244}
          height={244}
          className="rounded-lg object-cover"
        />
        <h3 className="mt-6 text-2xl font-semibold text-[#3A4750]">Advanced Service</h3>
        <p className="mt-2 text-lg text-[#3A4750]">$199</p>
        <p className="mt-4 text-center text-gray-600">
          Describe important details like price, value, length of service, and why it’s unique. Or use these sections to showcase different key values of your products or services.
        </p>
      </div>

    </div>
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



