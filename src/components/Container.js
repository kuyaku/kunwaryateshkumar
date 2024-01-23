const Container = (props) => {
  return (
    <div className="min-h-screen w-full  flex justify-center items-center p-1 md:p-10">
      {props.children}
    </div>
  );
};

export default Container;
