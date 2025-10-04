import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Award,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";
import heroCoach from "@/assets/hero-coach-bgremove.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-gradient pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container-width relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative slide-in-right order-2 lg:order-1">
            <div className="relative">
              {/* Main Image with Arch Top Border */}
              <div
                className="relative z-10 overflow-hidden hover:shadow-glass hover-lift"
                style={{
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                  borderBottomLeftRadius: "0.5rem",
                  borderBottomRightRadius: "0.5rem",
                }}
              >
                <img
                  src={heroCoach}
                  alt="Professional life coach and HR consultant"
                  className="w-full h-[400px] md:h-[525px] object-cover"
                  style={{
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                    borderBottomLeftRadius: "0.5rem",
                    borderBottomRightRadius: "0.5rem",
                  }}
                />

                {/* Overlay Elements - directly on image */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-soft">
                  <div className="text-sm font-medium text-primary">
                    Available for Consultation
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Remote & In-Person Sessions
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 text-center rounded-lg shadow-soft">
                  <div className="text-lg font-bold text-primary">4.9/5</div>
                  <div className="text-xs text-muted-foreground">
                    Client Rating
                  </div>
                </div>
              </div>

              {/* Overlaying Icons - positioned relative to the image container */}
              <div className="absolute top-2 -right-1 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-glass float-animation z-20">
                <Star className="w-8 h-8 text-primary fill-current" />
              </div>

              <div
                className="absolute top-20 -left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft float-animation z-20"
                style={{ animationDelay: "2s" }}
              >
                <Award className="w-6 h-6 text-primary" />
              </div>

              <div
                className="absolute top-40 -right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft float-animation z-20"
                style={{ animationDelay: "4s" }}
              >
                <Users className="w-5 h-5 text-primary" />
              </div>

              <div
                className="absolute bottom-32 -left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft float-animation z-20"
                style={{ animationDelay: "1s" }}
              >
                <Target className="w-6 h-6 text-primary" />
              </div>

              <div
                className="absolute bottom-16 -right-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft float-animation z-20"
                style={{ animationDelay: "3s" }}
              >
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left space-y-6 fade-in-up order-1 lg:order-2">
            {/* Trust Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-sm font-medium text-primary"> */}
            {/*   <Star className="w-4 h-4 fill-current" /> */}
            {/*   Founded by Anne Anshumathi Raj - Senior HR Manager & Life Coach */}
            {/* </div> */}

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Time to Restart.
                <span className="text-gradient block">
                  With Clarity & Courage.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                From leadership pivots to personal breakthroughs, unlock your
                potential.
                <br />
                Get 10+ years of expert coaching and strategic insights to build
                resilience and lasting success.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-6 py-3 h-auto"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Years crafting clarity
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">
                  Certifications
                </div>
              </div>
              <div className="text-center lg:text-left col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">
                  Journeys Restarted
                </div>
              </div>
              <div className="text-center lg:text-left col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Owned on your terms
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
