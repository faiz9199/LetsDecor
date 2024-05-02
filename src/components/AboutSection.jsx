import Button from "./Button";

const AboutSection = () => {
  return (
    <div className="my-10 flex flex-col items-center text-center justify-center mx-6">
      <div className="flex-col gap-6 md:mb-16 flex items-center justify-center"> {/* Updated here */}
        <h1 className="text-4xl uppercase">About</h1>
        <Button/>
      </div>
      <div className="text-center">
        <p className="font-nunito font-semibold text-xl leading-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum
          distinctio ullam quo accusamus porro libero consequuntur est sit
          corrupti, explicabo fugit eos similique veniam reprehenderit dicta
          quasi enim repellat iusto assumenda aliquam aspernatur error
          voluptates? Placeat voluptate eos, nesciunt debitis tempora ea, quia
          laboriosam ipsum fugit perspiciatis molestiae deleniti!
        </p>
      </div>
    </div>
  );
};
export default AboutSection;
