import profileImage from '@/assets/profile.jpg';
import { Card, CardContent } from '@/components/ui/card'

export function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center animate-in slide-in-from-left duration-700">
            <div className="relative group">
              {/* Rotating gradient ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-rotate-slow"></div>
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src={profileImage}
                  alt="Ahmad Taufik R"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Experience badge with glow */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg glow-cyan">
                <span className="text-white font-bold text-lg">1+</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-in slide-in-from-right duration-700">
            <Card className="relative border-2 border-purple-500/20 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group hover-lift">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="relative p-8 space-y-6">
    
                <p className="text-lg leading-relaxed text-justify">
                  I'm a passionate <span className="font-semibold text-cyan-400">full-stack developer</span> with less than 1 year of experience developing web
                  and mobile applications. My journey began with a curiosity about how things work, which
                  led me to fall in love with coding.
                </p>

                <p className="text-lg leading-relaxed text-justify">
                  I specialize in <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">React, Vue, Node.js, Laravel, Golang, Flutter</span>, and other modern web and
                  mobile app technologies. When I'm not coding, you can find me exploring new design
                  trends, contributing to open-source projects, or enjoying a tasty cup of coffee.
                </p>
                
                {/* Decorative gradient line */}
                <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-50"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}