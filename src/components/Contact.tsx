import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, MessageSquare, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

    const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs.sendForm('service_4zxy8xu', 'template_0bt91xh', form.current, '0Sqn7RrWiJlA6GANZ')
        .then((result) => {
            console.log(result.text);
            toast({
              title: "Message sent!",
              description: "Thank you for your message. I'll get back to you soon.",
            });
            setFormData({ name: '', email: '', message: '' });
        }, (error) => {
            console.log(error.text);
            toast({
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              variant: "destructive",
            })
        }).finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
        <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below or get in touch via email.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Information Column */}
          <div className="lg:col-span-2 animate-in slide-in-from-left duration-700">
            <Card className="border-2 border-gray-200 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 h-full shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Mail className="h-7 w-7 text-teal-500" />
                  <span>Contact Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-lg">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-teal-500">
                    <Mail className="h-6 w-6 text-teal-500 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Email</h4>
                    <p className="text-muted-foreground">ahmadtaufikr.jobs@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-teal-500">
                    <MapPin className="h-6 w-6 text-teal-500 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">Location</h4>
                    <p className="text-muted-foreground">Bandung, Indonesia</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

                <div>
                  <h4 className="font-semibold text-xl mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Button asChild variant="outline" size="icon" className="w-12 h-12 border-2 rounded-lg hover:bg-gray-800 hover:text-white hover:border-gray-800 dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300">
                      <a href="https://github.com/atr27" target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="w-12 h-12 border-2 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 transition-all duration-300">
                       <a href="https://www.linkedin.com/in/ahmad-taufik-3b110a206" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form Column */}
          <div className="lg:col-span-3 animate-in slide-in-from-right duration-700">
            <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <MessageSquare className="h-7 w-7 text-teal-500" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-lg">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required className="text-lg py-6 border-2 focus:border-teal-500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-lg">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="text-lg py-6 border-2 focus:border-teal-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-lg">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Ready to discuss your project?" rows={7} required className="text-lg p-4 border-2 focus:border-teal-500 resize-none" />
                  </div>
                  
                  <Button type="submit" className="w-full text-lg py-7 bg-teal-500 hover:bg-teal-600 text-white font-bold transition-all duration-300 transform hover:scale-105" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-3 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}