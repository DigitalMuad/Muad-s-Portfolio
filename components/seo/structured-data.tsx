export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muad Mahdi",
          url: "https://www.muadmahdi.com",
          sameAs: [
            "https://github.com/DigitalMuad",
            "https://www.linkedin.com/in/muad-mahdi-949003295/",
            "https://x.com/DigitalMuad"
          ],
          jobTitle: "Full Stack Developer",
          knowsAbout: ["Web Development", "Javascript", "Python", "React", "Flask"],
          image: "/muad_mahdi4.jpg",
          description: "Full Stack Developer specializing in JavaScript, React, and Python ecosystems."
        })
      }}
    />
  );
} 