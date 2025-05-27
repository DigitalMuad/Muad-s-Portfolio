export function ProfileImagesSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.muadmahdi.com",
          },
          about: {
            "@type": "Person",
            name: "Muad Mahdi",
            description:
              "Full Stack Developer specializing in JavaScript, React, and Python ecosystems.",
          },
          associatedMedia: [
            {
              "@type": "ImageObject",
              contentUrl: "https://www.muadmahdi.com/muad_mahdi5.jpg",
              name: "Muad Mahdi - Software Developer Primary Profile",
              description:
                "Primary profile photo of Muad Mahdi, Software Developer",
              encodingFormat: "image/jpeg",
              width: "800",
              height: "800",
            },
            {
              "@type": "ImageObject",
              contentUrl: "https://www.muadmahdi.com/muad_mahdi6.jpg",
              name: "Muad Mahdi - Software Developer Alternate Profile",
              description:
                "Secondary profile photo of Muad Mahdi, showcasing professional appearance",
              encodingFormat: "image/jpeg",
              width: "800",
              height: "800",
            },
          ],
        }),
      }}
    />
  );
}
