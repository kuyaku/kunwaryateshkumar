import { GitHub, Linkedin } from "react-feather";

const Footer = () => {
  return (
    <div
      id="find-me"
      className="text-gray-300 flex flex-col gap-4 lg:flex-row py-6 px-4 lg:px-28 bg-gray-950 bg-opacity-60"
    >
      <div className="flex-1">
        <p className="text-center">
          Designed and Developed by{" "}
          <span className="font-bold">Kunwar Yatesh</span>
        </p>
      </div>
      <div className="flex justify-center">
        <p>
          Copyright &copy; 2024 <span className="font-bold">KYK</span>
        </p>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end gap-4">
        <h2>Connect with me </h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFE4xBN25aZ1AAAAY0zEX5o2cOUAiis1o_9ntGnTJwpQNFJaUXoHz2u_kYwEun_hG0QMM41UVQgsG0WoyFZE5_H80SjZ6L1f2_lTMFQoOnmt_0XvNUih96UNcgEc-vaN-7oQPU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkunwar-yatesh-kumar-73579a182%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a href="https://github.com/kuyaku" target="_blank" rel="noreferrer">
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
