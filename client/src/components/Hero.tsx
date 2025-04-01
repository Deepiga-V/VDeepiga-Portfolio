import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useTypingEffect } from '@/hooks/use-typing-effect';
import { scrollToSection } from '@/lib/utils';

const roles = ['UI/UX Designer', 'Web Designer'];

export default function Hero() {
  const [containerRef, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [imageRef, isImageVisible] = useIntersectionObserver<HTMLDivElement>();
  const typedText = useTypingEffect({ texts: roles });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          <div 
            ref={containerRef}
            className={`order-2 md:order-1 text-center md:text-left transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary dark:text-blue-400">Deepiga</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              <span className="typing-text">{typedText}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              I build exceptional digital experiences with a focus on performance, 
              accessibility, and cutting-edge technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 font-medium rounded-md transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
            <div className="flex space-x-4 mt-8 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/deepiga-v-05a25524b" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                  <i className="fab fa-linkedin text-2xl"></i>
              </a>
                <a href="https://github.com/Deepiga-V" target="_blank"  rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                  <i className="fab fa-github text-2xl"></i>
              </a>
                <a href="https://www.behance.net/deepiga" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                  <i className="fab fa-behance text-2xl"></i>
              </a>
                <a href="https://dribbble.com/Deepiga" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                  <i className="fab fa-dribbble text-2xl"></i>
              </a>
                <a href="mailto:email@deepigavelmurugan.com" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                  <i className="fas fa-envelope text-2xl"></i>
                </a>
            </div>
          </div>
          <div 
            ref={imageRef}
            className={`order-1 md:order-2 flex justify-center transition-all duration-700 ${isImageVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Background blob shape with animation */}
              <div className="absolute inset-0 bg-primary bg-opacity-20 dark:bg-blue-500 dark:bg-opacity-20 animate-pulse" 
                  style={{
                    borderRadius: '60% 40% 70% 30% / 60% 30% 70% 40%',
                    animation: 'morph 8s ease-in-out infinite'
                  }}>
              </div>
              
              {/* Image container with hexagon-like shape */}
              <div 
                className="absolute inset-4 ring-4 ring-white dark:ring-gray-800 shadow-xl overflow-hidden" 
                style={{
                  borderRadius: '55% 45% 65% 35% / 45% 65% 35% 55%',
                  transform: 'rotate(5deg)'
                }}
              >
                <img 
                  src="/images/Pic1.jpeg" 
                  alt="Deepiga's Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
