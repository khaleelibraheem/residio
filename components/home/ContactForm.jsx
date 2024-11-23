'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-playfair font-bold mb-4 dark:text-white">
        Start Your Luxury Journey
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Schedule a private consultation with our luxury real estate experts
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">
              First Name
            </label>
            <Input className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">
              Last Name
            </label>
            <Input className="w-full" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Email
          </label>
          <Input type="email" className="w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Phone
          </label>
          <Input type="tel" className="w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Preferred Location
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beverly-hills">Beverly Hills</SelectItem>
              <SelectItem value="manhattan">Manhattan</SelectItem>
              <SelectItem value="miami-beach">Miami Beach</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Budget Range
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5m">$1M - $5M</SelectItem>
              <SelectItem value="5-10m">$5M - $10M</SelectItem>
              <SelectItem value="10m+">$10M+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25">
          Schedule Consultation
        </Button>
      </form>
    </motion.div>
  );
}