import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const ImageGallery = () => {
  const images = [
    { src: gallery1, alt: "Graduation Celebration" },
    { src: gallery2, alt: "Students Studying Together" },
    { src: gallery3, alt: "Sports Victory" },
    { src: gallery4, alt: "Laboratory Research" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Graduates & Campus Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the vibrant community and memorable moments at our partner colleges
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
            >
              <img
                src={typeof image.src === "string" ? image.src : image.src.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
