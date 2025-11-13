import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Target, Trophy, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">{t("aboutUs")}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t("aboutUsDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{t("ourStory")}</h3>
              <p className="text-muted-foreground">
                {t("ourStoryDesc")}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{t("ourMission")}</h3>
              <p className="text-muted-foreground">
                {t("ourMissionDesc")}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{t("whyChooseUs")}</h3>
              <p className="text-muted-foreground">
                {t("whyChooseUsDesc")}
              </p>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">{t("location")}</h2>
            <p className="text-center text-muted-foreground text-lg">
              Nirpodi Purbopara near Bridge, Sabdi, Bondorm Narayonganj
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
