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
        <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below or get in touch via email.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Information Column */}
          <div className="lg:col-span-2 animate-in slide-in-from-left duration-700">
            <Card className="group border-2 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Contact Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-lg">
                <div className="flex items-start space-x-4 group/item">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/item:scale-110 group-hover/item:bg-gradient-to-br group-hover/item:from-cyan-400 group-hover/item:to-purple-500 group-hover/item:shadow-lg">
                    <Mail className="h-6 w-6 text-cyan-400 transition-colors duration-300 group-hover/item:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1">Email</h4>
                    <p className="text-muted-foreground group-hover/item:text-cyan-400 transition-colors">ahmadtaufikr.jobs@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group/item">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/item:scale-110 group-hover/item:bg-gradient-to-br group-hover/item:from-purple-400 group-hover/item:to-pink-500 group-hover/item:shadow-lg">
                    <MapPin className="h-6 w-6 text-purple-400 transition-colors duration-300 group-hover/item:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1">Location</h4>
                    <p className="text-muted-foreground group-hover/item:text-purple-400 transition-colors">Bandung, Indonesia</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-6"></div>

                <div>
                  <h4 className="font-semibold text-xl mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Button asChild variant="outline" size="icon" className="w-14 h-14 border-2 border-purple-500/30 rounded-xl hover:bg-gradient-to-br hover:from-gray-800 hover:to-black hover:text-white hover:border-transparent dark:hover:from-white dark:hover:to-gray-200 dark:hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-lg">
                      <a href="https://github.com/atr27" target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="w-14 h-14 border-2 border-purple-500/30 rounded-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
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
            <Card className="border-2 border-purple-500/20 hover:border-cyan-400/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg">
                    <MessageSquare className="h-7 w-7 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-lg font-semibold">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required className="text-lg py-6 border-2 border-purple-500/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-lg font-semibold">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="text-lg py-6 border-2 border-purple-500/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-lg font-semibold">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Ready to discuss your project?" rows={7} required className="text-lg p-4 border-2 border-purple-500/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 resize-none transition-all duration-300" />
                  </div>
                  
                  <Button type="submit" className="relative w-full text-lg py-7 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 overflow-hidden group" disabled={isSubmitting}>
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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