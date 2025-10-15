import React, { useEffect, useRef, useState } from 'react';
import { Play, Zap, Globe, TrendingUp, Star, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import { MarqueeDemo } from '../components/ui/Marquee';
import Footer from '../components/Footer';
import { DottedMap } from '../components/ui/DottedMap';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { Globe as GlobeComponent } from '../components/ui/Globe';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const Home = () => {
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ is open by default

  // FAQ data
  const faqs = [
    {
      id: 0,
      question: "What types of AI solutions do you offer?",
      answer: "We provide a range of AI tools including natural language processing, machine learning models, computer vision, automation, and data analytics solutions tailored for various industries."
    },
    {
      id: 1,
      question: "Is your AI customizable to our business needs?",
      answer: "Yes, absolutely. Our AI solutions are fully customizable to meet your specific business requirements. We work closely with your team to understand your goals and tailor our solutions accordingly."
    },
    {
      id: 2,
      question: "What kind of tasks can your AI automate?",
      answer: "Our AI can automate various tasks including customer support, data processing, content generation, workflow optimization, predictive analytics, and routine business processes to improve efficiency."
    },
    {
      id: 3,
      question: "Do you offer API access for developers?",
      answer: "Yes, we provide comprehensive API access for developers with detailed documentation, SDKs, and support to integrate our AI solutions seamlessly into your existing systems."
    },
    {
      id: 4,
      question: "Can we try your platform before purchasing?",
      answer: "Absolutely! We offer free trials and demo sessions where you can explore our platform, test key features, and see how our solutions work with your specific use cases before making any commitment."
    },
    {
      id: 5,
      question: "What kind of support is available?",
      answer: "We provide 24/7 technical support, dedicated account managers, comprehensive documentation, training sessions, and ongoing maintenance to ensure your success with our solutions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create the smooth scroller
    let smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });

    // Set initial states for animations
    gsap.set(".hero-badge", { y: 30, opacity: 0 });
    gsap.set(".hero-title", { y: 50, opacity: 0 });
    gsap.set(".hero-subtitle", { y: 30, opacity: 0 });
    gsap.set(".hero-buttons", { y: 40, opacity: 0 });
    gsap.set(".hero-trust", { y: 30, opacity: 0 });
    gsap.set(".service-header", { y: 50, opacity: 0 });
    gsap.set(".service-card", { y: 60, opacity: 0, scale: 0.9 });
    gsap.set(".trust-content", { x: -100, opacity: 0 });
    gsap.set(".trust-card", { x: 100, opacity: 0 });
    gsap.set(".industries-header", { x: -80, opacity: 0 });
    gsap.set(".industries-marquee", { x: 100, opacity: 0 });
    gsap.set(".resource-header", { y: 50, opacity: 0 });
    gsap.set(".resource-card", { y: 80, opacity: 0, scale: 0.8 });
    gsap.set(".stats-header", { y: 40, opacity: 0 });
    gsap.set(".stats-card", { y: 60, opacity: 0, scale: 0.9 });
    gsap.set(".globe-content", { x: -100, opacity: 0 });
    gsap.set(".globe-container", { x: 100, opacity: 0, scale: 0.8 });
    gsap.set(".faq-content", { x: -80, opacity: 0 });
    gsap.set(".faq-item", { x: 80, opacity: 0 });
    gsap.set(".form-content", { x: -100, opacity: 0 });
    gsap.set(".form-container", { x: 100, opacity: 0 });

    // Hero Section Animations
    const heroTl = gsap.timeline();
    heroTl
      .to(".hero-badge", { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" })
      .to(".hero-title", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
      .to(".hero-subtitle", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.7")
      .to(".hero-buttons", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .to(".hero-trust", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");

    // Services Section Animations
    ScrollTrigger.create({
      trigger: ".services-section",
      start: "top 80%",
      onEnter: () => {
        gsap.to(".service-header", {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
        
        gsap.to(".service-card", {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 0.3
        });
      }
    });

    // Trust Section Animations
    ScrollTrigger.create({
      trigger: ".trust-section",
      start: "top 75%",
      onEnter: () => {
        gsap.to(".trust-content", {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
        
        gsap.to(".trust-card", {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.3
        });
      }
    });

    // Industries Section Animations
    ScrollTrigger.create({
      trigger: ".industries-section",
      start: "top 80%",
      onEnter: () => {
        gsap.to(".industries-header", {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
        
        gsap.to(".industries-marquee", {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.4
        });
      }
    });

    // Resource Center Animations
    ScrollTrigger.create({
      trigger: ".resource-section",
      start: "top 75%",
      onEnter: () => {
        gsap.to(".resource-header", {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
        
        gsap.to(".resource-card", {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.4)",
          delay: 0.5
        });
      }
    });

    // Stats Section Animations
    ScrollTrigger.create({
      trigger: ".stats-section",
      start: "top 80%",
      onEnter: () => {
        gsap.to(".stats-header", {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
        
        gsap.to(".stats-card", {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.5)",
          delay: 0.3
        });
      }
    });

    // Globe Section Animations
    ScrollTrigger.create({
      trigger: ".globe-section",
      start: "top 75%",
      onEnter: () => {
        gsap.to(".globe-content", {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out"
        });
        
        gsap.to(".globe-container", {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.8)",
          delay: 0.4
        });
      }
    });

    // FAQ Section Animations
    ScrollTrigger.create({
      trigger: ".faq-section",
      start: "top 80%",
      onEnter: () => {
        gsap.to(".faq-content", {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
        
        gsap.to(".faq-item", {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3
        });
      }
    });

    // Form Section Animations
    ScrollTrigger.create({
      trigger: ".form-section",
      start: "top 75%",
      onEnter: () => {
        gsap.to(".form-content", {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out"
        });
        
        gsap.to(".form-container", {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.4
        });
      }
    });

    // Floating animations for elements
    gsap.to(".hero-title", {
      y: -10,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2
    });

    // Cleanup function
    return () => {
      if (smoother) smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={smoothWrapperRef} id="smooth-wrapper">
      <div ref={smoothContentRef} id="smooth-content">
        <main className="min-h-screen bg-black text-white relative" style={{ overflow: 'visible' }}>
      {/* Stars Background */}
      <div 
        className="absolute inset-0 opacity-80 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/stars.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:px-8 z-10">
        {/* Purple Light Background for Hero Section */}
        <div 
          className="absolute inset-10 left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[1000px] h-[700px] rounded-full blur-3xl pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.5) 0%, rgba(126, 34, 206, 0.3) 40%, rgba(88, 28, 135, 0.1) 70%, transparent 90%)'
          }}
        ></div>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="hero-badge mb-8 inline-flex items-center rounded-full bg-purple-700/20 px-4 py-2 text-sm text-white ring-1 ring-blue-600/20 backdrop-blur-sm">
              <span className="mr-2">🚀</span>
              <span style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                New in 2024: Advanced AI-Powered Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="hero-title text-5xl font-stretch-normal font-[poppins] tracking-tight sm:text-6xl lg:text-7xl mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              
            >
              Build the Future
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                With Sails Software
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="hero-subtitle mx-auto max-w-2xl text-lg leading-8 text-gray-300 mb-10"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
            >
              Transform your business with cutting-edge technology solutions. 
              We deliver scalable, secure, and innovative software that drives growth 
              and empowers your team to achieve more.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button />
              
              <button 
                className="group bg-gray-800/50 hover:bg-gray-700/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 border border-gray-600/50 backdrop-blur-sm hover:border-gray-500/50"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="hero-trust flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-400"></div>
                </div>
                <span style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                  Trusted by 10,000+ companies
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                  4.9/5 rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section relative px-6 py-20 lg:px-8 z-10 bg-black">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="service-header mx-auto max-w-4xl text-center mb-16">
            <h2 
              className="text-4xl font-inter font-[poppins] tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              
            >
              Your Partner for IT Services, Software Solutions and Innovation that Drives Success.
            </h2>
            <p 
              className="mx-auto max-w-3xl text-lg leading-8 text-gray-300"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
            >
              We solve business challenges with services that drive lasting outcomes and enhance experiences for you and your customers.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SaaS Services */}
            <div className="service-card group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300 hover:bg-gray-800/50">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">SaaS</span>
                </div>
              </div>
              <h3 
                className="text-xl font-semibold mb-4 text-blue-600"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                SaaS Services
              </h3>
              <p 
                className="text-gray-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Our Software-as-a-Service (SaaS) development services encompass the complete lifecycle—from multi-tenant application design to seamless implementation and deployment.
              </p>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Read More
              </button>
            </div>

            {/* AI & Beyond */}
            <div className="service-card group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-600/50 transition-all duration-300 hover:bg-gray-800/50">
              <div className="w-16 h-16 bg-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600/30 transition-colors">
                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 
                className="text-xl font-semibold mb-4 text-cyan-600"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                AI & Beyond
              </h3>
              <p 
                className="text-gray-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Data and AI are at the core of modern business analytics—empowering organizations to enhance strategy, streamline operations, and make intelligent, data-driven decisions.
              </p>
              <button 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Read More
              </button>
            </div>

            {/* Cloud Native */}
            <div className="service-card group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-600/50 transition-all duration-300 hover:bg-gray-800/50">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600/30 transition-colors">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 
                className="text-xl font-semibold mb-4 text-green-600"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Cloud Native
              </h3>
              <p 
                className="text-gray-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Our Cloud Services Solutions guide you in selecting and integrating the right cloud-based ERP systems and vendors, tailored precisely to your business objectives and operational needs.
              </p>
              <button 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Read More
              </button>
            </div>

            {/* DevOps */}
            <div className="service-card group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-orange-600/50 transition-all duration-300 hover:bg-gray-800/50">
              <div className="w-16 h-16 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600/30 transition-colors">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 
                className="text-xl font-semibold mb-4 text-orange-600"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                DevOps
              </h3>
              <p 
                className="text-gray-300 leading-relaxed mb-6"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Data and AI are at the core of modern business analytics—empowering organizations to enhance strategy, streamline operations, and make intelligent, data-driven decisions.
              </p>
              <button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Trust Sails Section */}
      <section className="trust-section relative px-6 py-20 lg:px-8 z-10 bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="trust-content">
              <p 
                className="text-sm font-[poppins] text-blue-400 mb-4"
                
              >
                Why Businesses Trust Sails
              </p>
              
              <span 
                className="text-4xl bg-gradient-to-r from-blue-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent font-[poppins] tracking-tight sm:text-5xl mb-6"
                
              >
                Our Editorial Integrity
              </span>
              
              <p 
                className="text-lg leading-8 text-gray-300 mb-8"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                We build partnerships with technology vendors rooted in fairness, integrity and transparency. We ensure every representation is accurate, unbiased and free from hidden influences. We empower our clients with technology that is not only trustworthy but also future-ready.
              </p>
              
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                AI Agent Playbook
              </button>
            </div>

            {/* Right Content - Card Component */}
            <div className="trust-card relative">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-300">
                <div className="mb-6">
                  <img 
                    src="/saas-concept-collage-2.jpg" 
                    alt="Business Partnership" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <img 
                        src="/SailsLogoLight1.png" 
                        alt="Sails Software" 
                        className="h-12 right-0 inset-80 absolute w-auto"
                      />
                    </div>
                    <h3 
                      className="text-2xl font-[poppins] text-white mb-2"
                      
                    >
                      Corporate Brochure
                    </h3>
                    <p 
                      className="text-sm font-[poppins] text-gray-400"
                      
                    >
                      EMPOWERING DIGITAL TRANSFORMATION
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section relative px-6 py-20 lg:px-8 z-10 bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            {/* Left Content - 1/4 space */}
            <div className="industries-header lg:col-span-1">
              <h2 
                className="text-4xl font-[poppins] tracking-tight sm:text-5xl mb-6 text-blue-400"
              
              >
                Industries
              </h2>
              
              <p 
                className="text-lg font-[poppins] leading-8 text-gray-300"
                
              >
                We work with industries that touch lives daily and bring change to the world: Banking and Financial Services, Insurance Services, Retail and Consumer Services, Healthcare and Life Sciences Services and Technology.
              </p>
            </div>

            {/* Right Content - Marquee Cards - 3/4 space */}
            <div className="industries-marquee lg:col-span-3 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
              <MarqueeDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Center Section */}
      <section className="resource-section relative px-6 py-20 lg:px-8 z-10 bg-black overflow-hidden">
        {/* Dotted Map Background */}
        <div className="absolute inset-0 opacity-30">
          <DottedMap 
            width={800} 
            height={400} 
            mapSamples={8000}
            dotRadius={0.8}
            className="text-blue-500/40"
          />
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="resource-header mb-16 text-center">
            <h2 
              className="bg-gradient-to-r from-blue-600 via-purple-300 to-cyan-500 bg-clip-text text-transparent text-4xl font-[poppins] tracking-tight sm:text-5xl mb-6"
            >
              Resource Center
            </h2>
            <p 
              className="text-lg font-[poppins] leading-8 text-gray-300 mb-8"
            >
              Success Stories | Blogs
            </p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-[poppins] font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              See More
            </button>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="resource-card group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/resource_1.webp" 
                  alt="How To Choose A Software Development Company in the AI Era" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-[poppins] font-semibold text-white mb-2 line-clamp-2">
                  How To Choose A Software Development Company in the AI Era
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="resource-card group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/resource_2.webp" 
                  alt="10 Essential Strategies for SaaS Cost Management in 2025" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-[poppins] font-semibold text-white mb-2 line-clamp-2">
                  10 Essential Strategies for SaaS Cost Management in 2025
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="resource-card group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/resource_3.webp" 
                  alt="Empowering Performance: Modernizing Legacy Applications in Consumer Credit Reporting" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-[poppins] font-semibold text-white mb-2 line-clamp-2">
                  Empowering Performance: Modernizing Legacy Applications in Consumer Credit Reporting
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="resource-card group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/resource_4.webp" 
                  alt="Prioritize Problems, Then Embrace AI Solutions" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-[poppins] font-semibold text-white mb-2 line-clamp-2">
                  Prioritize Problems, Then Embrace AI Solutions.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation for Guaranteed Outcomes Section */}
      <section className="stats-section relative px-6 py-20 lg:px-8 z-10 bg-black">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="stats-header text-center mb-16">
            <h2 
              className="text-4xl font-[poppins] tracking-tight sm:text-5xl mb-6 text-blue-400"
            >
              The foundation for guaranteed outcomes
            </h2>
            <p 
              className="text-lg font-[poppins] leading-8 text-gray-400 max-w-4xl mx-auto"
            >
              A legacy built over 10 years, with a foundation that drives continuous progress.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Years of Experience */}
            <div className="stats-card bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 text-center hover:border-blue-600/30 transition-all duration-300 group">
              <div className="mb-4">
                <AnimatedCounter 
                  endValue={10}
                  suffix="+"
                  className="text-5xl font-[poppins] font-bold text-blue-400 group-hover:text-blue-300 transition-colors"
                  duration={2.5}
                />
              </div>
              <h3 className="text-lg font-[poppins] font-medium text-gray-300 mb-2">
                Years Of Experience
              </h3>
            </div>

            {/* Number of Employees */}
            <div className="stats-card bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 text-center hover:border-cyan-600/30 transition-all duration-300 group">
              <div className="mb-4">
                <AnimatedCounter 
                  endValue={300}
                  suffix="+"
                  className="text-5xl font-[poppins] font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  duration={2.8}
                />
              </div>
              <h3 className="text-lg font-[poppins] font-medium text-gray-300 mb-2">
                Number of Employees
              </h3>
            </div>

            {/* Happiness Score */}
            <div className="stats-card bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 text-center hover:border-green-600/30 transition-all duration-300 group">
              <div className="mb-4">
                <AnimatedCounter 
                  endValue={91.32}
                  suffix="%"
                  className="text-5xl font-[poppins] font-bold text-green-400 group-hover:text-green-300 transition-colors"
                  duration={3}
                  decimals={2}
                />
              </div>
              <h3 className="text-lg font-[poppins] font-medium text-gray-300 mb-2">
                Happiness Score
              </h3>
            </div>

            {/* Client Satisfaction Score */}
            <div className="stats-card bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 text-center hover:border-purple-600/30 transition-all duration-300 group">
              <div className="mb-4">
                <AnimatedCounter 
                  endValue={95}
                  suffix="%"
                  className="text-5xl font-[poppins] font-bold text-purple-400 group-hover:text-purple-300 transition-colors"
                  duration={2.3}
                />
              </div>
              <h3 className="text-lg font-[poppins] font-medium text-gray-300 mb-2">
                Client Satisfaction Score
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Globe Section */}
      <section className="globe-section relative px-6 py-20 lg:px-8 z-10 bg-black overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="globe-content relative z-10">
              <h2 
                className="text-4xl font-[poppins] tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent"
              >
                Global Reach, Local Impact
              </h2>
              <p 
                className="text-lg font-[poppins] leading-8 text-gray-300 mb-8"
              >
                We serve clients across the globe, delivering innovative software solutions that make a real difference in local communities and international markets. Our global presence ensures we understand diverse business needs and cultural nuances.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                  <h3 className="text-2xl font-[poppins] font-bold text-blue-400 mb-2">50+</h3>
                  <p className="text-sm font-[poppins] text-gray-400">Countries Served</p>
                </div>
                <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                  <h3 className="text-2xl font-[poppins] font-bold text-cyan-400 mb-2">24/7</h3>
                  <p className="text-sm font-[poppins] text-gray-400">Global Support</p>
                </div>
              </div>
            </div>

            {/* Right Content - Globe */}
            <div className="globe-container relative flex items-center justify-center">
              <GlobeComponent 
                className="max-w-[500px] max-h-[500px]"
                config={{
                  width: 800,
                  height: 800,
                  onRender: () => {},
                  devicePixelRatio: 2,
                  phi: 0,
                  theta: 0.3,
                  dark: 1,
                  diffuse: 0.4,
                  mapSamples: 16000,
                  mapBrightness: 0.8,
                  baseColor: [0.2, 0.4, 1],
                  markerColor: [0.1, 0.8, 1],
                  glowColor: [0.2, 0.4, 1],
                  markers: [
                    { location: [14.5995, 120.9842], size: 0.03 },
                    { location: [19.076, 72.8777], size: 0.1 },
                    { location: [23.8103, 90.4125], size: 0.05 },
                    { location: [30.0444, 31.2357], size: 0.07 },
                    { location: [39.9042, 116.4074], size: 0.08 },
                    { location: [-23.5505, -46.6333], size: 0.1 },
                    { location: [19.4326, -99.1332], size: 0.1 },
                    { location: [40.7128, -74.006], size: 0.1 },
                    { location: [34.6937, 135.5022], size: 0.05 },
                    { location: [41.0082, 28.9784], size: 0.06 },
                  ],
                }}
              />
              {/* Glow effect behind globe */}
              <div 
                className="absolute inset-0 -z-10 blur-3xl opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section relative px-6 py-20 lg:px-8 z-10 bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="faq-content">
              <h2 
                className="text-4xl font-[poppins] tracking-tight sm:text-5xl mb-6"
              >
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p 
                className="text-lg font-[poppins] leading-8 text-gray-300 mb-8"
              >
                Expert financial planning tailored to your unique goals and achieve financial peace of mind with our proven strategies.
              </p>
              
              {/* Get Started Button */}
              <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-[poppins] font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                Get Started
              </button>
            </div>

            {/* Right Content - FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={faq.id}
                  className="faq-item bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-700/20 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-[poppins] font-medium text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-700/50 pt-4">
                        <p className="text-gray-300 font-[poppins] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="form-section relative px-6 py-20 lg:px-8 z-10 overflow-hidden">
        {/* Background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
         
        ></div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="form-content text-white">
              <h2 
                className="text-4xl font-[poppins] tracking-tight sm:text-5xl mb-8 text-white"
              >
                When vision meets the right partner, possibilities turn into success
              </h2>
              
              <div className="mt-16">
                <h3 
                  className="text-3xl font-[poppins] font-semibold mb-4 text-white"
                >
                  Become a Partner
                </h3>
                <p 
                  className="text-lg font-[poppins] leading-8 text-gray-200"
                >
                  Fill out this form and someone will reach out to chat and answer your questions.
                </p>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="form-container bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <form className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-[poppins] font-medium text-white mb-2">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-[poppins]"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-[poppins] font-medium text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-[poppins]"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-[poppins] font-medium text-white mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-[poppins]"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone/Mobile */}
                <div>
                  <label className="block text-sm font-[poppins] font-medium text-white mb-2">
                    Phone/Mobile <span className="text-red-400">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center px-3 py-3 bg-white rounded-l-lg border border-r-0 border-gray-300">
                      <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-3 mr-2" />
                      <span className="text-gray-900 font-[poppins] text-sm">+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      className="flex-1 px-4 py-3 rounded-r-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-[poppins]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Products Interest */}
                <div>
                  <label className="block text-sm font-[poppins] font-medium text-white mb-2">
                    Which products are you interested in discussing? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-[poppins] resize-none"
                    placeholder="Tell us about your interests..."
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm font-[poppins] text-gray-200">
                    I have read and agree to the{' '}
                    <a href="#" className="text-blue-300 hover:text-blue-200 underline">
                      Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-300 hover:text-blue-200 underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-[poppins] font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;