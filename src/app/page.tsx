'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  CubeTransparentIcon,
  ServerIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  SparklesIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CloudIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  CheckIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentCheckIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FaWhatsapp, FaSlack, FaMicrosoft, FaViber, FaTelegram, FaFacebookMessenger } from 'react-icons/fa'

const mainFeatures = [
  {
    name: 'Custom Built Solution',
    description: 'Tailored chatbot development based on your specific business needs and use cases',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'One-Time License',
    description: 'Simple one-time licensing model with no recurring fees, just ongoing support when you need it',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Full Implementation',
    description: 'End-to-end service including consultation, data preparation, development, and deployment',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Deploy Anywhere',
    description: 'Flexible deployment options - cloud, on-premise, or hybrid environment of your choice',
    icon: ServerIcon,
  },
  {
    name: 'Global Language Support',
    description: 'Full support for any language, including right-to-left scripts like Arabic, ensuring worldwide accessibility',
    icon: GlobeAltIcon,
  },
  {
    name: 'Data Ownership',
    description: 'Complete ownership of your chatbot and data with perpetual license',
    icon: LockClosedIcon,
  }
]

const chatbotTypes = [
  {
    name: 'Custom Web Portal',
    description: 'Full-featured web application with dedicated chat interface, admin dashboard, and analytics',
    icon: ComputerDesktopIcon,
    features: ['Custom branded interface', 'Advanced analytics', 'User management', 'Multilingual interface']
  },
  {
    name: 'Website Widget',
    description: 'Embeddable chat widget that seamlessly integrates with your existing website',
    icon: ChatBubbleBottomCenterTextIcon,
    features: ['Easy integration', 'RTL language support', 'Mobile responsive', 'Multi-page support']
  },
  {
    name: 'Messaging Platforms',
    description: 'Native chatbot integration with popular messaging platforms',
    icon: ChatBubbleLeftRightIcon,
    features: [
      {
        name: 'WhatsApp',
        icon: FaWhatsapp
      },
      {
        name: 'Microsoft Teams',
        icon: FaMicrosoft
      },
      {
        name: 'Slack',
        icon: FaSlack
      },
      {
        name: 'Viber',
        icon: FaViber
      },
      {
        name: 'Telegram',
        icon: FaTelegram
      },
      {
        name: 'Facebook Messenger',
        icon: FaFacebookMessenger
      }
    ]
  },
  {
    name: 'Mobile Apps',
    description: 'Custom mobile applications or SDK integration for iOS and Android',
    icon: DevicePhoneMobileIcon,
    features: ['Native mobile apps', 'SDK integration', 'Push notifications', 'Offline support']
  },
  {
    name: 'API Integration',
    description: 'Flexible REST API for custom implementations and integrations',
    icon: CodeBracketIcon,
    features: ['REST API access', 'Webhooks', 'Custom endpoints', 'Authentication']
  },
  {
    name: 'Multi-Channel',
    description: 'Unified chatbot experience across multiple platforms and channels',
    icon: GlobeAltIcon,
    features: ['Centralized management', 'Consistent responses', 'Channel-specific customization', 'Unified analytics']
  }
]

const detailedFeatures = {
  conversation: [
    {
      name: 'Business Analysis',
      description: 'In-depth consultation to identify how AI can transform your operations',
      icon: ChartBarIcon,
    },
    {
      name: 'Data Preparation',
      description: 'Professional collection, cleaning, and optimization of your training data',
      icon: CubeTransparentIcon,
    },
    {
      name: 'Custom Training',
      description: 'Fine-tuned models specifically trained on your business domain',
      icon: ChatBubbleLeftRightIcon,
    }
  ],
  technical: [
    {
      name: 'Seamless Integration',
      description: 'Custom integration with your existing systems and workflows',
      icon: CodeBracketIcon,
    },
    {
      name: 'Flexible Deployment',
      description: 'Deploy in your preferred environment with our expert assistance',
      icon: CloudIcon,
    },
    {
      name: 'Ongoing Support',
      description: 'Technical support and maintenance when you need it',
      icon: CpuChipIcon,
    }
  ],
  customization: [
    {
      name: 'Brand Alignment',
      description: 'Perfectly matched to your brand voice and communication style in any language',
      icon: WrenchScrewdriverIcon,
    },
    {
      name: 'Knowledge Integration',
      description: 'Built with your specific documentation and business logic, supporting multiple languages and scripts',
      icon: CubeTransparentIcon,
    },
    {
      name: 'Process Optimization',
      description: 'Streamlined workflows based on your business processes',
      icon: ServerIcon,
    }
  ]
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1
    }
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    }
  },
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-surface">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 modern-grid" />
        <div className="absolute inset-0 modern-dots-bg" />
        <div className="absolute inset-0 hero-bg" />
        <div className="hero-gradient" />
        <div className="container-custom relative pt-32 pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                <SparklesIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Custom AI Solutions</span>
              </div>
              <h1 className="section-title">
                Transform Your Business<br />
                <span className="gradient-text">Through Agentic Chatbots</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-xl">
                Get started with our proven AI chatbot solution. Built on years of experience, our established product can be quickly customized to your needs. Our experts will guide you through the entire journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link href="#benefits" className="btn-secondary">
                  View Benefits
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative h-[800px] animate-float"
            >
              <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl -z-10" />
              <Image
                src="/images/hero-image.png"
                alt="Q Chatbot Interface"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Expert Guidance Section */}
      <div className="relative py-20 bg-white">
        <div className="absolute inset-0 modern-grid opacity-[0.15]" />
        <div className="container-custom relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="feature-card group">
              <div className="relative h-12 w-12 mb-6">
                <ChartBarIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                We Analyze Your Needs
              </h3>
              <p className="text-slate-600">
                Our experts dive deep into your business processes to identify where AI can make the biggest impact. We find opportunities you might not even know exist.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="feature-card group">
              <div className="relative h-12 w-12 mb-6">
                <WrenchScrewdriverIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                We Design the Solution
              </h3>
              <p className="text-slate-600">
                Based on our analysis, we design a custom chatbot solution that perfectly fits your needs. We handle all the technical complexity so you don't have to.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="feature-card group">
              <div className="relative h-12 w-12 mb-6">
                <ChatBubbleLeftRightIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                We Build it Together
              </h3>
              <p className="text-slate-600">
                Through close collaboration, we ensure your chatbot exceeds expectations. Regular updates and feedback sessions keep you in control while we handle the implementation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Features Section */}
      <div id="benefits" className="relative py-20 bg-white">
        <div className="absolute inset-0 modern-grid opacity-[0.15]" />
        <div className="container-custom relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-6 mb-20"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Why Choose <span className="gradient-text">Q Chatbot</span>?
            </motion.h2>
            <motion.p variants={itemVariants} className="section-description">
              Battle-tested features powering successful businesses worldwide
            </motion.p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mainFeatures.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="feature-card group"
              >
                <div className="relative h-12 w-12 mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <feature.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {feature.name}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Chatbot Types Section */}
      <div id="implementation" className="relative py-20 bg-surface">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-6 mb-20"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Flexible <span className="gradient-text">Implementation Options</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="section-description">
              Our established platform supports all major channels, ready to be customized for your needs
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {chatbotTypes.map((type) => (
              <motion.div
                key={type.name}
                variants={itemVariants}
                className="feature-card group"
              >
                <div className="relative h-12 w-12 mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <type.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {type.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={typeof feature === 'string' ? feature : feature.name} className="flex items-center gap-2 text-sm text-slate-600">
                      {typeof feature === 'string' ? (
                        <>
                          <CheckIcon className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </>
                      ) : (
                        <>
                          <feature.icon className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature.name}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Quick Delivery Section */}
      <div className="relative py-20 bg-white">
        <div className="absolute inset-0 modern-dots-bg" />
        <div className="absolute inset-0 hero-bg opacity-50" />
        <div className="container-custom relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-6 mb-20"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Rapid <span className="gradient-text">Delivery</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="section-description">
              With our battle-tested product as the foundation, your custom chatbot can be up and running in as little as 2 weeks
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="feature-card text-center">
              <div className="relative h-12 w-12 mx-auto mb-6">
                <ChatBubbleLeftRightIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Week 1</h3>
              <p className="text-slate-600 mb-4">Initial consultation and requirements gathering</p>
              <p className="text-primary font-medium">Days 1-2</p>
            </motion.div>

            <motion.div variants={itemVariants} className="feature-card text-center">
              <div className="relative h-12 w-12 mx-auto mb-6">
                <DocumentCheckIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Week 1</h3>
              <p className="text-slate-600 mb-4">Data assessment and preparation</p>
              <p className="text-primary font-medium">Days 3-5</p>
            </motion.div>

            <motion.div variants={itemVariants} className="feature-card text-center">
              <div className="relative h-12 w-12 mx-auto mb-6">
                <CpuChipIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Week 2</h3>
              <p className="text-slate-600 mb-4">Development and AI model setup</p>
              <p className="text-primary font-medium">Days 6-10</p>
            </motion.div>

            <motion.div variants={itemVariants} className="feature-card text-center">
              <div className="relative h-12 w-12 mx-auto mb-6">
                <RocketLaunchIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Week 2</h3>
              <p className="text-slate-600 mb-4">Testing and deployment</p>
              <p className="text-primary font-medium">Days 11-14</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              Our established product and proven process allow us to deliver high-quality custom chatbots quickly. 
              Built on years of experience and real-world implementations, our core technology is ready to be tailored to your needs.
              While most customizations can be completed in 2 weeks, the exact timeline may vary based on your specific requirements and data complexity.
            </motion.p>
            <Link href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Schedule Consultation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Detailed Features Section */}
      <div className="relative py-16 bg-surface">
        <div className="container-custom">
          {/* Conversation Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <motion.span variants={itemVariants} className="text-primary font-semibold">
                  Full-Service Implementation
                </motion.span>
                <motion.h2 variants={itemVariants} className="section-title">
                  From Concept to <span className="gradient-text">Deployment</span>
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg text-slate-600">
                  With our mature product as the foundation, we quickly customize and deploy your AI solution, from initial consultation to final implementation.
                </motion.p>
                <motion.div variants={itemVariants} className="space-y-6">
                  {detailedFeatures.conversation.map((feature) => (
                    <div key={feature.name} className="flex gap-4 items-start">
                      <div className="relative h-6 w-6 mt-1">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{feature.name}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <motion.div variants={itemVariants} className="relative h-[400px] lg:h-[600px]">
                <Image
                  src="/images/conversation-demo.png"
                  alt="Conversation Interface"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Technical Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants} className="relative h-[400px] lg:h-[600px]">
                <Image
                  src="/images/technical-demo.png"
                  alt="Technical Interface"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="space-y-8">
                <motion.span variants={itemVariants} className="text-primary font-semibold">
                  Technical Excellence
                </motion.span>
                <motion.h2 variants={itemVariants} className="section-title">
                  Seamless <span className="gradient-text">Integration</span>
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg text-slate-600">
                  Our proven integration framework ensures seamless connection with your existing systems and infrastructure.
                </motion.p>
                <motion.div variants={itemVariants} className="space-y-6">
                  {detailedFeatures.technical.map((feature) => (
                    <div key={feature.name} className="flex gap-4 items-start">
                      <div className="relative h-6 w-6 mt-1">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{feature.name}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Customization Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <motion.span variants={itemVariants} className="text-primary font-semibold">
                  Complete Control
                </motion.span>
                <motion.h2 variants={itemVariants} className="section-title">
                  Your Solution, <span className="gradient-text">Your Way</span>
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg text-slate-600">
                  Get a perpetual license to our established platform, customized to your exact needs and ready for rapid deployment.
                </motion.p>
                <motion.div variants={itemVariants} className="space-y-6">
                  {detailedFeatures.customization.map((feature) => (
                    <div key={feature.name} className="flex gap-4 items-start">
                      <div className="relative h-6 w-6 mt-1">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{feature.name}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <motion.div variants={itemVariants} className="relative h-[400px] lg:h-[600px]">
                <Image
                  src="/images/customization-demo.png"
                  alt="Customization Interface"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="relative py-20 bg-white">
        <div className="container-custom">
          <div className="text-center space-y-6 mb-20">
            <h2 className="section-title">
              Simple <span className="gradient-text">Licensing Model</span>
            </h2>
            <p className="section-description">
              One-time license fee with optional support packages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="feature-card">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Business needs analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Data collection & preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Custom AI model development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>System integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Deployment assistance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="feature-card border-primary">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">License</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Perpetual usage rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Source code ownership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>No recurring fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Deploy anywhere</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="feature-card">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Technical support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Bug fixes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Security updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Optional maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Knowledge base access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-slate-600 mb-8">
              Each solution is tailored to your needs, building upon our mature and proven platform.<br />
              Contact us for a personalized quote on customizing our established product for your business.
            </p>
            <Link href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Schedule Consultation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Client Showcase Section */}
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="section-description mt-4">
              Join the companies transforming their business with our solutions
            </p>
          </div>
        </div>
        
        <div className="relative">
          {/* Single row with double set of logos for seamless loop */}
          <div className="flex">
            <div className="flex gap-8 items-center animate-scroll-left whitespace-nowrap">
              {/* First set of logos */}
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/bbc.svg" alt="BBC" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/times.svg" alt="Times" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/nestle.svg" alt="Nestle" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/hilti.svg" alt="Hilti" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/smart.svg" alt="Smart" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/manpower.svg" alt="Manpower" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              
              {/* Second set of logos (exact duplicate for seamless loop) */}
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/bbc.svg" alt="BBC" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/times.svg" alt="Times" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/nestle.svg" alt="Nestle" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/hilti.svg" alt="Hilti" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/smart.svg" alt="Smart" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
              <div className="w-[400px] h-[140px] relative">
                <Image src="/images/clients/manpower.svg" alt="Manpower" fill className="grayscale hover:grayscale-0 transition-all object-contain" />
              </div>
            </div>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        <div className="container-custom">
          <div className="text-center mt-16">
            <a 
              href="https://q.agency/case-studies/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              View Full Case Studies
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative py-20 bg-surface">
        <div className="absolute inset-0 modern-grid opacity-[0.15]" />
        <div className="container-custom relative">
          <div className="text-center space-y-6 mb-16">
            <h2 className="section-title">
              Transform Your Business with <span className="gradient-text">AI Chat</span>
            </h2>
            <p className="section-description max-w-3xl mx-auto">
              Whether you're looking to automate customer support, streamline operations, or create new revenue channels - we'll guide you through the entire process. Our multilingual chatbot solution supports all languages, including Arabic and other RTL scripts, making it perfect for global businesses.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-12 grid sm:grid-cols-2 gap-6">
              <div className="feature-card text-center sm:text-left">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary mx-auto sm:mx-0 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Not Sure Where to Start?</h3>
                <p className="text-gray-600">
                  That's perfectly fine! We'll analyze your business processes and identify the best opportunities for AI automation.
                </p>
              </div>
              <div className="feature-card text-center sm:text-left">
                <ShieldCheckIcon className="h-8 w-8 text-primary mx-auto sm:mx-0 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Worried About Complexity?</h3>
                <p className="text-gray-600">
                  Our team handles all the technical details. You focus on your business goals, we'll make the chatbot work for you.
                </p>
              </div>
            </div>

            <form className="space-y-8">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Company Ltd."
                  required
                />
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                  What would you like to achieve?
                </label>
                <select
                  id="goal"
                  name="goal"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                >
                  <option value="">Select your main goal</option>
                  <option value="support">Provide 24/7 Customer Support</option>
                  <option value="leads">Generate and Qualify Sales Leads</option>
                  <option value="internal">Support Internal Team & Knowledge Sharing</option>
                  <option value="automate">Automate Repetitive Tasks</option>
                  <option value="multiple">Multiple Goals - Let's Discuss</option>
                  <option value="unsure">Not Sure - Need Guidance</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Want to tell us more? (Optional)
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Share any specific challenges or goals, like "We want to reduce response time to customer inquiries" or "Looking to automate repetitive tasks"
                </p>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Don't worry if you're not sure what to write - we can discuss everything during the consultation"
                />
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-700">Do you handle sensitive data?</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="security-yes"
                      name="security"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary/20"
                      value="yes"
                    />
                    <label htmlFor="security-yes" className="ml-3 text-sm text-gray-600">
                      Yes - We need enhanced security
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="security-no"
                      name="security"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary/20"
                      value="no"
                    />
                    <label htmlFor="security-no" className="ml-3 text-sm text-gray-600">
                      No - Standard security is fine
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="security-unsure"
                      name="security"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary/20"
                      value="unsure"
                    />
                    <label htmlFor="security-unsure" className="ml-3 text-sm text-gray-600">
                      Not sure - Let's discuss during consultation
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                    required
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link href="https://q.agency/privacy-policy/" className="text-primary hover:text-secondary">
                      Privacy Policy
                    </Link>{' '}
                    and consent to being contacted about Q Agency services.
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-4 group"
                >
                  <span className="inline-flex items-center">
                    Schedule Your Free Consultation
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">
                    Here's what happens next:
                  </p>
                  <p className="text-sm text-gray-600">
                    1. Our experts will review your business needs<br />
                    2. We'll schedule a call to discuss possibilities<br />
                    3. You'll receive a custom chatbot solution proposal
                  </p>
                </div>
              </div>
            </form>

            <div className="mt-12 pt-12 border-t border-gray-200">
              <div className="text-center mb-12">
                <a 
                  href="https://q.agency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <Image 
                    src="/images/clients/q-logo.svg" 
                    alt="Q Agency" 
                    width={50} 
                    height={50} 
                    className="mx-auto"
                  />
                </a>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">London Office</h3>
                  <p className="text-gray-600">Borough Yards, 13 Dirty Lane<br />London, SE19PA</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Zagreb HQ</h3>
                  <p className="text-gray-600">Reljkoviceva 4<br />10000 Zagreb, Croatia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 