import profileImage from '@/assets/profile.jpg';
import { Card, CardContent } from '@/components/ui/card'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-xl">
                <img
                  src={profileImage}
                  alt="Ahmad Taufik R"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">1+</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-in slide-in-from-right duration-700">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
                  I'm a passionate full-stack developer with less than 1 year of experience developing web
                  and mobile applications. My journey began with a curiosity about how things work, which
                  led me to fall in love with coding.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
                  I specialize in React, Vue, Node.js, Laravel, Golang, Flutter, and other modern web and
                  mobile app technologies. When I'm not coding, you can find me exploring new design
                  trends, contributing to open-source projects, or enjoying a tasty cup of coffee.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://drive.google.com/file/d/15PzYMs4unKlwvXhQoguROkwBPVOyAE9w/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}