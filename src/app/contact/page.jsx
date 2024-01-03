import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>Sant Ralph Magazine</h1>
        <p >
          Explore the latest trends in sports, health, technology, lifestyle,
          and entertainment. Stay informed and entertained with our diverse
          range of articles on cutting-edge topics.
        </p>
      </div>
      <div >
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/youtube.png" alt="LinkedIn" width={24} height={24} />
        <Image src="/instagram.png" alt="Email" width={24} height={24} />
        <Image src="/tiktok.png" alt="Facebook" width={24} height={24} />
        <Image src="/x.jpg" alt="Twitter" width={24} height={24} />
      </div>
    </div>
  );
};

export default Contact;
