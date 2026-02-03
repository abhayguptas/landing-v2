'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  review: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah',
    position: 'Product Manager',
    company: 'TechCorp',
    review: 'I\'ve been using this service for 7 months now and it\'s been a great experience. The platform is not only fast and reliable but also has exceptional communication from its staff. They constantly updated me on the status of my invoices in real-time.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 2,
    name: 'Louay',
    position: 'Founder & CEO',
    company: 'StartupHub',
    review: 'I\'ve been using this for 7 months. 1- Trust: I can totally trust my invoice will get paid and money will be transferred successfully. 2- Great support: I needed human support 2 times, and their support was very fast, helpful, and clear about things I wanted. 3- Easy: the website itself has made the minimum needed UI that can direct you immediately to your goal.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Louay'
  },
  {
    id: 3,
    name: 'Anne',
    position: 'Design Director',
    company: 'Creative Studio',
    review: 'I started using this as a freelancer 2 years ago and now I use it for my own company. I\'ve always received great customer service when I had any questions about the transfers or dashboard.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anne'
  },
  {
    id: 4,
    name: 'Ricardo',
    position: 'CTO',
    company: 'Innovate Labs',
    review: 'I\'ve been using this invoicing application for freelancers for 3+ years. It not only demonstrates impressive speed and reliability but also excels in its exceptional communication capabilities facilitated by the staff.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ricardo'
  },
  {
    id: 5,
    name: 'Michael',
    position: 'Operations Lead',
    company: 'ScaleUp Inc',
    review: 'Outstanding service and support. The team is always responsive and goes above and beyond to help. The platform is intuitive and makes my workflow so much easier.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  },
  {
    id: 6,
    name: 'Emma',
    position: 'Marketing Director',
    company: 'Growth Partners',
    review: 'Been a customer for over a year now. The reliability is unmatched and the customer support team is incredibly knowledgeable. Highly recommend to anyone looking for a professional solution.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
  },
  {
    id: 7,
    name: 'David',
    position: 'Business Owner',
    company: 'Digital Solutions',
    review: 'The best decision I made for my business. Fast, reliable, and the support team is always there when you need them. The platform just works seamlessly.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
  },
  {
    id: 8,
    name: 'Sophie',
    position: 'Head of Product',
    company: 'NextGen Tech',
    review: 'Excellent platform with top-notch customer service. They respond quickly and always find a solution. The interface is clean and easy to navigate.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie'
  }
]

const StarRating = () => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-[#252525]"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )
}

// Card size variations for visual interest
const getCardSize = (index: number) => {
  const sizes = [
    { width: 'w-[260px] md:w-[300px]', height: 'min-h-[280px] md:min-h-[320px]' },
    { width: 'w-[300px] md:w-[340px]', height: 'min-h-[300px] md:min-h-[340px]' },
    { width: 'w-[280px] md:w-[320px]', height: 'min-h-[260px] md:min-h-[300px]' },
    { width: 'w-[320px] md:w-[360px]', height: 'min-h-[320px] md:min-h-[360px]' },
    { width: 'w-[270px] md:w-[310px]', height: 'min-h-[290px] md:min-h-[330px]' },
    { width: 'w-[310px] md:w-[350px]', height: 'min-h-[280px] md:min-h-[320px]' },
    { width: 'w-[290px] md:w-[330px]', height: 'min-h-[310px] md:min-h-[350px]' },
    { width: 'w-[260px] md:w-[300px]', height: 'min-h-[270px] md:min-h-[310px]' },
  ]
  return sizes[index % sizes.length]
}

export function Testimonials() {
  return (
    <section className="relative w-full bg-[#faf8f5]">
      <div className="flex flex-col px-4 md:px-12 lg:px-24 py-24 md:py-32">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="flex justify-between items-center w-full mb-12 md:mb-16"
      >
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-sm md:text-base font-medium text-[#252525]">
            Testimonials
          </h2>
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>
      </motion.div>

      {/* Header Section */}
      <div className="relative flex h-[30vh] items-center justify-start mb-6 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] max-w-4xl">
          What it feels like to{' '}
            <span className="text-[#252525]/40">work with Kubixter</span>
          </h1>
        </motion.div>
      </div>

      {/* Gray Container for Cards */}
      <div className="bg-[#262626] rounded-2xl md:rounded-3xl px-6 md:px-8 lg:px-12 py-12 md:py-16 mb-12 md:mb-16">
        {/* Testimonials Marquee */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
          <motion.div
            className="flex gap-4 md:gap-6 will-change-transform"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 50
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => {
              const cardSize = getCardSize(index)
              return (
                <div
                  key={`${testimonial.id}-${index}`}
                  className={`flex-shrink-0 ${cardSize.width} ${cardSize.height} bg-[#faf8f5] rounded-2xl p-5 md:p-6 flex flex-col`}
                >
                  {/* Review Text */}
                  <p className="text-sm md:text-base text-[#252525] leading-relaxed mb-4 flex-1">
                    {testimonial.review}
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#252525]/10">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#252525]">
                          {testimonial.name}, {testimonial.position}
                        </p>
                        <p className="text-xs text-[#252525]/60 mt-0.5">{testimonial.company}</p>
                      </div>
                    </div>
                    <StarRating />
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Section: Stats and CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col gap-2"
        >
          <p className="text-lg md:text-xl font-medium text-[#252525]">
            4.6★ stars out of 5
          </p>
          <p className="text-sm md:text-base text-[#252525]/70">
            3 minutes avg. response time
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://trustpilot.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#252525] text-[#faf8f5] font-medium rounded-full hover:bg-[#252525]/90 transition-colors"
        >
          Contact us
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Bottom Line */}
      <div className="w-full border-t border-dotted border-[#252525]/40 mt-16 md:mt-24" />
      </div>
    </section>
  )
}