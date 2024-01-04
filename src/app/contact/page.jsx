import Image from "next/image";
import Link from "next/Link";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>Sant Ralph Magazine</h1>
        <p>
          Embark on an enriching journey with Sant Ralph Magazine, your go-to
          source for the latest trends in sports, health, technology, lifestyle,
          and entertainment. Curated by Ekpenisi Erue Raphael, our platform
          offers a harmonious blend of informative and captivating content.
          Explore sports victories, wellness tips, and the latest tech
          innovations. Immerse yourself in lifestyle trends, and celebrate the
          vibrancy of entertainment in film, music, literature, and art. Managed
          by Raphael, Sant Ralph Magazine goes beyond content delivery; it
          crafts an immersive experience. Advertisers can leverage prime
          opportunities to authentically connect with their audience, and our
          services extend to website development, graphic design, video editing,
          digital marketing, SEO optimization, and more. Join us in this dynamic
          medium where every page unfolds a new adventure. Sant Ralph Magazine
          beckons, inviting you to explore the boundless horizons of knowledge,
          innovation, and entertainment.
        </p>
      </div>
      <div>
        <Link href="mailto:ekpenisiraphael@gmail.com">
          <Image src="/email.jpeg" alt="Email" width={24} height={24} />
        </Link>
        <Link href="tel:+918826120974">
          <Image src="/tell.jpeg" alt="Phone" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ekpenisiraphael"
          target="_blank"
        >
          <Image src="/linkedin.jpeg" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://github.com/eerapheal" target="_blank">
          <Image src="/gitHub.jpeg" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://twitter.com/ekpenisiraphael" target="_blank">
          <Image src="/x.jpeg" alt="Twitter" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
