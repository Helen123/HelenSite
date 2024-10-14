"use client"; // This makes the component a Client Component
import Image from "next/image";
import emailjs from 'emailjs-com';
import { useState } from 'react';


export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS configuration (Replace with your actual EmailJS values)
    const serviceId = 'service_imsn5g8';
    const templateId = 'template_xc8extd';
    const userId = 'mz06gmbNS7u73Z44H'; // EmailJS user id

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send the message. Please try again later.');
        }
      );
  };
  return (
    <div className="min-h-screen flex flex-col items-center gap-16 font-capriola-regular" style={{ backgroundColor: '#F4F3E8' }}>
      
      {/* Section 1: Greeting */}
      <section className="flex flex-col sm:flex-row items-center justify-center sm:h-auto w-full w-full text-center" style={{ backgroundColor: '#F5F374' }}>
        
        {/* Subsection 1 */}
        <div className="flex flex-col w-full p-20">
          <h1 className="text-4xl sm:text-6xl font-bold text-left text-[#3A4750] capriola-regular">Hi, I&#39;m Helen Wu!</h1>
          <p className="text-xl sm:text-2xl mt-4  text-left  text-[#3A4750] capriola-regular">
            Welcome to my site! I’m Helen Wu, a UCSB Computer Science student passionate about building tech solutions. Check out my projects and feel free to connect!
          </p>
           {/* Button */}
          
           <button
      onClick={() => {
        const aboutSection = document.getElementById('about-me');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className="mt-6 px-8 py-4 text-lg font-medium text-[#F5F374] bg-[#3A4750] rounded-tl-full rounded-br-full hover:bg-[#2E3B42] transition duration-300 ease-in-out"
    >
      About Me
    </button>



        </div>
        
        {/* Subsection 2 */}
        <div className="flex flex-col items-center justify-center w-full p-4 h-auto min-h-[600px]">
          <Image 
            src="/p1.jpg" // Ensure the image is located in your public directory
            alt="Profile Picture"
            width={430} 
            height={700}
            className="object-cover"
          />
        </div>
      </section>



{/* Section 2: About and Picture */}
<section  id="about-me" className="flex flex-col sm:flex-row items-center justify-center min-h-screen sm:h-auto w-full gap-10 p-16">
  
  {/* Subsection 1 (Full width on small screens, 3/5 on large screens) */}
  <div className="flex flex-col w-full  gap-8 p-8">
    <h2 className="text-3xl sm:text-5xl font-bold text-left text-[#7F9FEB] capriola-regular">
      About Me
    </h2>
    <p className="text-lg sm:text-2xl text-left text-[#3A4750] ">
      I&#39;m a third-year Computer Science student at UCSB, part of the Engineering Honor Program. I&#39;m passionate about software development, AI technologies, and building tools that make a difference.
    </p>
    <ul className="mt-4 space-y-2 text-lg sm:text-xl">
      <li className="underline text-[#3A4750] ">Engineering Honor Program Student</li>
      <li className="underline text-[#3A4750] ">GPA: 3.9</li>
    </ul>
    
    {/* Button */}
    <button
      onClick={() => {
        const aboutSection = document.getElementById('projects');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }} className="mt-6 px-8 py-4 text-lg font-medium text-[#F4F3E8] bg-[#3A4750] rounded-tl-full rounded-br-full hover:bg-[#2E3B42] transition duration-300 ease-in-out">
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

  {/* Subsection 2 (Full width on small screens, 2/5 on large screens) */}
  <div className="flex flex-col w-full items-center justify-center p-4">
    <Image 
      src="/110.jpg" // Replace with the actual image path
      alt="Profile Picture"
      width={400}
      height={400}
      className="object-cover rounded-lg"
    />
  </div>
</section>

{/* Section: Projects */}
<section  id="projects" className="bg-[#F4F3E8] py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " >
    <h2 className="text-3xl sm:text-5xl font-bold text-center mb-10  text-[#7F9FEB] capriola-regular">
      My Project
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#3A4750] capriola-regular">
      
      {/* project 1: */}
      <div className="flex flex-col items-center rounded-lg shadow-lg p-6">
        <Image
          src="/icon.png" // Replace with actual image path
          alt="Traditional Chinese Orchestra Sharing Platform"
          width={244}
          height={244}
          className="rounded-lg object-cover"
        />
        <h3 className="mt-6 text-2xl font-semibold text-[#3A4750]">HuaHarmony</h3>
        <p className="mt-2 text-lg text-[#3A4750]">Jasmine Echo Chinese Ensemble</p>
        <div className="flex items-center justify-center gap-4">
  <Image
    src="rn11.png" // React Native icon URL
    alt="React Native" 
    className="w-20 h-20"
  /> 
  <Image 
    src="/firebase.webp" // Firebase icon URL
    alt="Firebase" 
    className="w-20 h-20"
  />
</div>
        <p className="mt-4 text-left text-gray-600">
  🎵 Built an app for sharing music sheets and videos in the Chinese orchestra community. <br/>
  🎻 Leveraged UCSB orchestra experience to customize features. <br/>
  ⚛️ Used <strong>React Native </strong>for scalability and <strong>Firebase </strong>for auth and storage.
</p>


      </div>

      {/* project 2:  */}
      <div className="flex flex-col items-center rounded-lg shadow-lg p-6">
        <Image
          src="/travel.png" // Replace with actual image path
          alt="Travel Planning Platfrom"
          width={244}
          height={244}
          className="rounded-lg object-cover"
        />
        <h3 className="mt-6 text-2xl font-semibold text-[#3A4750]">WanderWay</h3>
        <p className="mt-2 text-lg text-[#3A4750]">Travel Planning APP</p>
        <div className="flex items-center justify-center gap-4">
  <Image 
    src="rn11.png" // React Native icon URL
    alt="React Native" 
    className="w-20 h-20"
  /> 
  <Image 
    src="/firebase.webp" // Firebase icon URL
    alt="Firebase" 
    className="w-20 h-20"
  />
</div>
<p className="mt-4 text-left text-gray-600">
  📱 Built a travel app for sharing posts and creating plans. <br/>
  ⚙️ Used <strong>React Native</strong>, <strong>Expo</strong>, <strong>Firebase</strong>, and <strong>Redux</strong> for seamless performance. <br/>
  🚀 Led sprints in <strong>Agile</strong>, ensuring efficient workflows.
</p>



      </div>



    </div>
  </div>
</section>





{/* Section 4: Experience */}
<section id ="experiences"className="flex flex-col items-left justify-center gap-20 max-w-screen-lg mx-auto text-[#3A4750] p-8">
  <div>
    <h2 className="text-4xl sm:text-5xl font-semibold text-left text-[#7F9FEB] capriola-regular">Experience</h2>
    <ul className="mt-10 text-xl sm:text-2xl ">

{/* Experience 1: Tax Technology Intern */}
<li className="mb-12 p-8 border-2 rounded-xl shadow-2xl bg-white max-w-screen-lg mx-auto">
  <h3 className="text-3xl font-bold text-left">Tax Technology Intern (Full-time) - EY</h3>
  <p className="text-xl mt-6 font-semibold">June 2024 - August 2024 | 40 hrs/week</p>
  <ul className="list-disc pl-6 mt-4">
    <li>Improved labeling deadlines and subsidy amounts using <strong>Logistic Regression</strong>.</li>
    <li>Automated policy analysis, reducing speed per item from 45s to 0.05s with 0.1% error rate.</li>
    <li>Achieved <strong>70%</strong> accuracy with Logistic Regression and TFIDF models.</li>
    <li>Enhanced prompt engineering, achieving 98% accuracy in label extraction.</li>
    <li>Added AI-assisted writing and policy summaries using OpenAI API and <strong>LangChain.</strong></li>
  </ul>

  <p className="text-xl mt-8 font-semibold">June 2023 - September 2023 | 40 hrs/week</p>
  <ul className="list-disc pl-6 mt-4">
    <li>Automated policy retrieval, cutting analysis time to 1 minute per policy.</li>
    <li>Extracted policy data using Python libraries and AI prompts via Claude/OpenAI.</li>
    <li>Reduced manual work by 50% with <strong>Elasticsearch </strong>and automated essay drafting.</li>
    <li>Scraped and tagged data for 1500 firms, eliminating 95% irrelevant content.</li>
    <li>Gathered up-to-date company info with RPA and Perplexity queries.</li>
  </ul>
</li>



{/* Experience 2: Researcher at UCSB */}
<li className="mb-12 p-8 border-2 rounded-xl shadow-2xl bg-white max-w-screen-lg mx-auto">
  <h3 className="text-3xl font-bold text-left">Student Researcher - Early Research Scholars Program (ERSP)</h3>
  <p className="text-xl mt-6 font-semibold">September 2023 - Present | 8 hrs/week</p>
  <ul className="list-disc pl-6 mt-4">
    <li>Researched Vision-language Models to enhance the Method of Loci memory technique.</li>
    <li>Collaborated with 3 undergraduates, 2 PhD mentors, and 1 professor.</li>
    <li>Developed and maintained a <strong>React-based </strong>web platform for over 50 participants.</li>
    <li>Integrated OpenAI API to generate personalized text and images for &ldquo;memory palaces&ldquo;.</li>
    <li>Conducted 50+ experiments and automated processes, cutting time costs by 60%.</li>
  </ul>
</li>

    </ul>
  </div>
</section>
{/* Section 5: Contact Us */}
<section id ="contact"className="flex flex-col sm:flex-row justify-between items-start max-w-screen-lg mx-auto py-12 ">
  <div className="w-full sm:w-1/2 mb-8 sm:mb-0 p-8">
    <h2 className="text-4xl sm:text-5xl font-semibold text-left text-[#7F9FEB] capriola-regular">Contact me</h2>
    <p className="mt-6 text-xl text-left text-[#3A4750]">
    Interested in collaborating? Fill out the form below, and I&#39;ll get back to you as soon as possible. Looking forward to connecting with you!
    </p>
  </div>

  <form className="w-full sm:w-1/2 space-y-6 p-8" onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-lg font-semibold" htmlFor="first-name">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              className="w-full p-4 border rounded-lg focus:outline-none"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-lg font-semibold" htmlFor="last-name">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              className="w-full p-4 border rounded-lg focus:outline-none"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-4 border rounded-lg focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-4 border rounded-lg focus:outline-none h-32"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-4 bg-[#3B496B] text-white text-xl font-bold hover:bg-[#293a56] transition duration-300 bg-[#3A4750] rounded-tl-full rounded-br-full ease-in-out"
        >
          SEND
        </button>
      </form>
</section>
{/* Footer Section */}
<footer className="flex flex-col sm:flex-row justify-between items-start mx-auto py-12 w-full p-8">
  <div className="w-full mb-8 sm:mb-0 p-8">
    <h2 className="text-4xl sm:text-5xl font-semibold text-left text-[#7F9FEB] capriola-regular">Helen Wu&#39;s site</h2>
  </div>

  <div className="flex w-full sm:w-3/4 mx-auto">
  <div className="w-1/2 mb-8 sm:mb-0 p-8">
    <h3 className="text-xl font-semibold text-left text-[#3A4750]">Explore</h3>
    <ul className="mt-4 space-y-2">
      <li><a href="#about-me" className="text-[#3A4750] hover:underline">About me</a></li>
      <li><a href="#projects" className="text-[#3A4750] hover:underline">Projects</a></li>
      <li><a href="#experiences" className="text-[#3A4750] hover:underline">Experiences</a></li>
      <li><a href="#contact" className="text-[#3A4750] hover:underline">Contact</a></li>
    </ul>
  </div>
  <div className="w-1/2 p-8">
  <h3 className="text-xl font-semibold text-left text-[#3A4750]">Follow me</h3>
  <ul className="mt-4 space-y-2">
    <li>
      <p className="text-[#3A4750]">Email: <a href="mailto:qwu132@ucsb.edu" className="hover:underline">qwu132@ucsb.edu</a></p>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/qi-wu-22a448221/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3A4750] hover:underline"
      >
        LinkedIn
      </a>
    </li>
    <li>
      <a
        href="https://github.com/Helen123"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3A4750] hover:underline"
      >
        GitHub
      </a>
    </li>
  </ul>
</div>

  </div>
</footer>




    </div>
  );
}



