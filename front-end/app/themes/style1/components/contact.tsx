"use client"
import { useState } from "react"
import { ProfileData } from "@/utils/types"
import { Mail, Phone, MapPin, Send ,Linkedin} from "lucide-react"
export function Contact(props:{contact:ProfileData}) {
  console.log(props.contact)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div id="contact" className="py-16 bg-gray-100 md:py-24 w-full">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
              Have a question or want to work together? Feel free to contact me!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-500">{props.contact.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-500">{props.contact.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-gray-500">{props.contact.location}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Linkedin className="h-6 w-6 text-primary mt-0.5" />
              <div>
                <h3 className="font-bold">LinkedIn</h3>
                <p className="text-gray-500">{props.contact.linkedin}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              <div className="space-y-2 col-span-2 ">
                 <input name="name" placeholder="Your Name"  className="bg-white px-3 py-3  w-full rounded-md" value={formData.name} onChange={handleChange} required />
              </div>    
              <div className="space-y-2 col-span-3">
                <input
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  className="bg-white px-3 py-3 rounded-md w-full"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="bg-white px-3 py-3 rounded-md w-full" required />
            </div>
            <div className="space-y-2">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[120px] px-3 py-3 rounded-md w-full bg-white"
              />
            </div>
            <button type="submit" className="w-full bg-black text-5 text-white flex items-center rounded-md justify-center h-2/12">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

