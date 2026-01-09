const WelcomeSection = () => {
  const stats = [
    { value: "40+", label: "Years of Excellence" },
    { value: "300", label: "Acres Campus" },
    { value: "80+", label: "Study Centres" },
    { value: "50K+", label: "Students" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
            Welcome to Acharya Nagarjuna University
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Acharya Nagarjuna University, a state university established in 1976, has been constantly striving towards achieving progress
            and expansion during its existence for over four decades. Spread over 300 acres of land on the National High Way (NH-16)
            between Vijayawada and Guntur of Andhra Pradesh, which is declared as state capital of Andhra Pradesh, the University is one
            of the front ranking and fastest expanding Universities in the state. The National Assessment and Accreditation Council (NAAC)
            awarded 'A' grade to Acharya Nagarjuna University. It is named after Acharya Nagarjuna who is one of the most brilliant
            preceptors and philosophers, whose depth of thought, clarity of perception and spiritual insight were such that even after
            centuries, he is a source of inspiration to a vast number of people in many countries.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="stat-number">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
